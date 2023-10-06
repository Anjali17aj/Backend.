CREATE DATABASE school;
USE school;

CREATE TABLE students(
rollno INT PRIMARY KEY,
name VARCHAR(50),
MARKS INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO students 
(rollno, name, marks, grade, city)
VALUES
(101, "anjali", 98, "A", "PUNE"),
(102, "prachi", 88, "B", "TATA"),
(103, "chiky", 67, "D", "KERALA"),
(104, "ash", 59, "C", "BLR"),
(105, "pash", 19, "F", "KGP");


SELECT * FROM students;

SELECT AVG(marks)
FROM students;

SELECT ROLLNO
FROM students
WHERE rollno % 2 =0;

SELECT name, rollno
FROM students
WHERE rollno IN (102, 104, 103);


SELECT name, rollno
FROM students
WHERE rollno IN (
SELECT ROLLNO
FROM students
WHERE rollno % 2 =0);