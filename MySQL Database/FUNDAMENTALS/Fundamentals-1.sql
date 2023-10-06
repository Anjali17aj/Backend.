CREATE DATABASE college;

USE college;

CREATE TABLE student (
rollno INT,
name VARCHAR(30),
age INT
);

INSERT INTO student
VALUES
(1, "Anjali", 17),
(2, "Ashwini", 18),
(3, "Prachi", 19);

SELECT * FROM student;