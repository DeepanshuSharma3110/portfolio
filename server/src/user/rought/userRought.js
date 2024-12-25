import express from 'express';
import {registerUser,loginUser} from '../controller/userController.js'
const  userRought = express.Router();

userRought.post('/register',registerUser);
userRought.post('/login',loginUser);

export default  userRought;