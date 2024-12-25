import express from 'express';
import dotenv from 'dotenv';
import itemRought from './src/items/rought/itemRought.js';
import cors from 'cors'
import userRought from './src/user/rought/userRought.js';

const app = express();

dotenv.config();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/item',itemRought)
app.use('/api/user',userRought);

export default app;