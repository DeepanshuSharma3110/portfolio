import express from 'express';
import { addItem } from '../controller/itemController.js';

const itemRought = express.Router();

itemRought
//adding a new item
.post('/addItem',addItem);


export default itemRought;