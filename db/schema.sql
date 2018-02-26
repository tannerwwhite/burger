DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT(10) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(80) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY (id)
);