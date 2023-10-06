CREATE DATABASE IF NOT EXISTS instagram;
SHOW DATABASES;
USE instagram;

CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(20) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT age_check CHECK (age>=13),
PRIMARY KEY(id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 24, "ANJALI KUMARI", "anjalik17@gmail.com", 1500, 800),
(2, 20, "ASHWINI KUMAR", "helloash@gmail.com", 45450, 88),
(3, 40, "ANITA RAM", "Ramanita@gmail.com", 14350, 200),
(4, 17, "Julie", "julie3@gmail.com", 134500, 8180),
(5, 26, "Charlie", "charlie5@gmail.com", 111500, 58110);

SELECT max(followers)
FROM user;

SELECT min(age)
FROM user;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age>14;