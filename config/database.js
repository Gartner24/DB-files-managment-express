
// Importar módulos
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

// Crear conexión con la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Prueba de conexión
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

const database = {
  connection,
};

// modulo para ver el sisrtema operaivo
// const os = require('os');

// Exportar conexión
export default database;

