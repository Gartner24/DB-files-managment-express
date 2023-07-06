import express from 'express';
import mediaModel from '../../models/models.js';

const imageRouter = express.Router();

// Ruta de prueba (GET http://localhost:3001/api/image)

// Get all images
imageRouter.get(`/`, mediaModel.getAllImages);

// Post a image
imageRouter.post(`/`, mediaModel.postImage);

export default imageRouter;
