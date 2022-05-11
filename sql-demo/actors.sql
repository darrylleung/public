CREATE TABLE actors (id SERIAL primary key, name VARCHAR(255) NOT NULL, age INTEGER, numofoscars INT);

INSERT INTO actors (name, age, numofoscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (name, age, numofoscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, numofoscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (name, age, numofoscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, numofoscars) VALUES ('John Cho', 43, 0);

--First Query
--SELECT name FROM actors WHERE numofoscars > 1;

--Second Query
--SELECT name FROM actors WHERE age > 30;