DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Cheese');
INSERT INTO burgers (burger_name) VALUES ('Giant');
INSERT INTO burgers (burger_name) VALUES ('Jalapeno');

ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';