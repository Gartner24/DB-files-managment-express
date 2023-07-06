CREATE DATABASE filesDB;

USE filesDB;

CREATE TABLE archivos (
    id INT PRIMARY KEY,
    archivo_mp3 BLOB,
    archivo_jpg BLOB
);
