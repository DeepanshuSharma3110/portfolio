import { addUser, verifyUserName } from "../repository/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const saltRounds = parseInt(process.env.SALTROUND, 10);
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await addUser(name, email, hashedPassword);
    if (result) {
      return res
        .status(201)
        .json({ message: "User created successfully", user: result });
    }
    return res
      .status(500)
      .json({ message: "Unable to save the user. Please try again later." });
  } catch (err) {
    next(err);
  }
};



export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required"});
    }
    const user = await verifyUserName(email);
    if (!user) {
      return res.status(404).json({ message: "Email does not exist"});
    }
    if (!user.password) {
      return res.status(500).json({ message: "User password is not defined" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.set('Authorization',token);
      return res.status(200).json({ message: "Login successful", token });
    }
    return res.status(401).json({ message: "Invalid password" });
  }
    catch(err){
    next(err);
    }
};
