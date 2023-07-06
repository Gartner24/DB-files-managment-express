import express from 'express';
import mp3Router from './mediaRoutes/mp3.routes.js';
import imageRouter from './mediaRoutes/image.routes.js';

const router = express.Router();

// Rutas de la aplicación (prefijo: /api)
router.use('/mp3', mp3Router);
router.use('/images', imageRouter);

// Ruta de prueba (GET http://localhost:3001/api)
router.get('/', (req, res) => {
	res.status(200).json({ message: 'Bienvenido a la API de Node.js' });
});

// Manejo de rutas no encontradas (debe ir al final de las rutas)
router.use((req, res) => {
	res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores (debe ir al final de las rutas)
router.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: 'Error interno del servidor' });
});


export default router;