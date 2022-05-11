DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    population INTEGER,
    country TEXT
);

INSERT INTO cities (name, country, population) VALUES ('Berlin', 'Germany', 3610156);

INSERT INTO cities (name, country, population) VALUES ('Hamburg', 'Germany', 1774242);

INSERT INTO cities (name, country, population) VALUES ('Munch', 'Germany', 1450381);

INSERT INTO cities (name, country, population) VALUES ('Tokyo', 'Japan', 13617445);

INSERT INTO cities (name, country, population) VALUES ('San Francisco', 'United States of America', 874961);