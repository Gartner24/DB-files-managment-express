import express from 'express';
import mediaModel from '../../models/models.js';

const mp3Router = express.Router();

// Ruta de prueba (GET http://localhost:3001/api/mp3)

// Get all mp3
mp3Router.get(`/`, mediaModel.getAllMp3);

// Post a mp3
mp3Router.post(`/`, mediaModel.postMp3);
export default mp3Router;
