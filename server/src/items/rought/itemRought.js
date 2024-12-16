import express from 'express';
import { addItem } from '../controller/itemController.js';
import { uploadFile } from '../../middleware/multer/multer.js';

const itemRought = express.Router();

itemRought.post('/addItem', uploadFile.any('file'), addItem);


export default itemRought;