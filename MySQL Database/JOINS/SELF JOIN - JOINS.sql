CREATE DATABASE Employee;

USE Employee;

CREATE TABLE emp(
id INT PRIMARY KEY,
name VARCHAR(50),
manager_id INT
);

INSERT INTO emp (id, name, manager_id)
VALUES
(101, "ANJALI", 103),
(102, "ASHWINI", 104),
(103, "PRACHI", NULL),
(104, "CHIKY", 103);

INSERT INTO emp (id, name, manager_id)
VALUES
(105, "ANITA", 109),
(106, "ASH", 103);

SELECT * FROM emp as e;

SELECT * 
FROM emp as a
JOIN emp as b
ON a.id = b.manager_id;

SELECT a.name as manager_name, b.name
FROM emp as a
JOIN emp as b
ON a.id = b.manager_id;