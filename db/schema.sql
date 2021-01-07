DROP DATABASE IF EXISTS burgeregrub_db;
CREATE DATABASE IF NOT EXISTS burgeregrub_db;
USE burgeregrub_db;

CREATE TABLE burgeregrub (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgeregrub (name) VALUES ('Tomato');
INSERT INTO burgeregrub (name) VALUES ('Chalk');
INSERT INTO burgeregrub (name) VALUES ('Beetroot');

ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';