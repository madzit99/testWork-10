import { Router } from "express";
import mysqlDb from "../mysqldb";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { imageUpload } from "../multer";
import { NewsWithoutId } from "../type";

const newsRouter = Router();

newsRouter.get("/", async (req, res) => {
  const [results] = await mysqlDb
    .getConnection()
    .query("SELECT id, title, image, date FROM news");
  return res.send(results);
});

newsRouter.get("/:id", async (req, res) => {
  const [results] = (await mysqlDb
    .getConnection()
    .query("SELECT * FROM news " + "WHERE id = ?", [
      req.params.id,
    ])) as RowDataPacket[];

  const newNews = results[0];

  if (!newNews) {
    return res.status(404).send({ error: "Не найдено!" });
  }

  return res.send(newNews);
});

newsRouter.post("/", imageUpload.single("image"), async (req, res) => {
  const newItem: NewsWithoutId = {
    title: req.body.title,
    text: req.body.text,
    image: req.file ? req.file.filename : null,
  };

  const [results] = (await mysqlDb
    .getConnection()
    .query("INSERT INTO news (title, text, image) " + "VALUES (?, ?, ?)", [
      newItem.title,
      newItem.text,
      newItem.image,
    ])) as ResultSetHeader[];

  return res.send({
    id: results.insertId,
    ...newItem,
  });
});

newsRouter.delete("/:id", async (req, res) => {
  const [results] = await mysqlDb
    .getConnection()
    .query("DELETE FROM news WHERE id = ?", [req.params.id]);

  return res.send("Новость удалена.");
});


export default newsRouter;
