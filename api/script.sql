CREATE DATABASE IF NOT EXISTS `news`;

USE `news`;

CREATE TABLE news
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text  TEXT NOT NULL,
    image VARCHAR(255) NULL,
    date  DATETIME DEFAULT CURRENT_TIMESTAMP NULL
);

CREATE TABLE comments
(
    id     INT AUTO_INCREMENT PRIMARY KEY,
    newsID INT NOT NULL,
    author VARCHAR(255) NULL,
    text   TEXT NOT NULL,
    CONSTRAINT comments_news_id_fk
        FOREIGN KEY (newsID) REFERENCES news (id)
            ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO news (title, text, image, date) VALUES 
('Пожар в Бишкеке!', 'В Бишкеке на окраине случился пожар!', 'images/e07edc26-1f7b-4cbc-a257-c6033bce0ae9.jpeg', '2024-08-24 18:42:32'),
('Коронавирус снова!!', 'В Бишкеке снова вспышка коронавируса!!!', 'images/1a35ba00-964c-4aaf-b928-683e6ef8b717.jpg', '2024-08-24 18:43:22');


INSERT INTO comments (newsID, author, text) VALUES 
(1, 'Максим', 'какой ужас!'),
(1, 'Алена', 'Пипееец'),
(2, 'Артем', 'о нет снова карантин'),
(2, 'Артур', 'мдааа');
