import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import database from './config/database.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './app/routes/index.routes.js';
import ipRestrictionMiddleware from './app/middleware/ipRestrictionMiddleware.js';
// import router from './app/routes/index.routes.js';

dotenv.config();

const app = express();

app.use(express.static('app/public'));

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Middleware para restringir el acceso a ciertas rutas
app.use(ipRestrictionMiddleware);

// Rutas de la aplicación
app.use('/api', router);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', `${__dirname}/app/views`);
app.set('view engine', 'ejs');

// Render index.ejs
app.get('/', (req, res) => {
  res.render('index', { title: 'Node.js' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Listening in http://localhost:${PORT}`);
});
