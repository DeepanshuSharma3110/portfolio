import express from 'express';
import { addItem } from '../controller/itemController.js';
import { uploadFile } from '../../middleware/multer/multer.js';
import {getAllItems} from '../controller/itemController.js';
const itemRought = express.Router();

itemRought

// post request
.post('/addItem', uploadFile.any('file'), addItem)



// get request
.get('/allItems', getAllItems)




export default itemRought;