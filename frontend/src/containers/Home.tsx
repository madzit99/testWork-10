import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/Hooks";
import { fetchNews } from "../features/News/NewsThunks";
import { SelectNews } from "../features/News/NewsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(SelectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div>
      {news.map((oneNews) => (
        <>
          <h1>{oneNews.title}</h1>
          <p>{oneNews.date.toString()}</p>
        </>
      ))}
    </div>
  );
};

export default Home;
