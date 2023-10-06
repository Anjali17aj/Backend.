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



SELECT * 
FROM user
WHERE followers >= 200;

SELECT name, followers 
FROM user
WHERE age + 1 = 25;

SELECT name, followers 
FROM user
WHERE age > 20 AND followers > 1000;

SELECT name, age, followers 
FROM user
WHERE age > 35 OR followers > 2000;

SELECT name, age, followers 
FROM user
WHERE age BETWEEN 15 AND 20;

SELECT name, email, followers 
FROM user
WHERE email IN ("helloash@gmail.com","anjalik17@gmail.com", "Ramanita@gmail.com" );


INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(6, 18, "Prachi", "pra@gmail.com", 170799, 818),
(7, 60, "AJAY RAM", "ram.ajay@gmail.com", 51200, 581);

SELECT name, age
FROM user
WHERE age IN (17, 24);

SELECT name, age, followers 
FROM user
WHERE age NOT IN (17, 24);




