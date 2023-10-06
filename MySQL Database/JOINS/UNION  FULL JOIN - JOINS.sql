CREATE DATABASE college;

USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO student (id, name)
VALUES
(101, "ANJALI"),
(102, "ASHWINI"),
(103, "PRACHI"),
(104, "CHIKY");

INSERT INTO student (id, name)
VALUES
(105, "ANITA"),
(106, "ASH");


CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);
INSERT INTO course (id, course)
VALUES
(101, "MATHS"),
(102, "ENGLISH"),
(103, "SOCIAL SCIENCE"),
(104, "GENERAL SCIENCE");

INSERT INTO course (id, course)
VALUES
(107, "HINDI"),
(108, "FRENCH");


SELECT * FROM student;
SELECT * FROM course;

SELECT * 
FROM student as s
LEFT JOIN course as c
ON s.id = c.id
UNION
SELECT * 
FROM student as s
RIGHT JOIN course as c
ON s.id = c.id;



