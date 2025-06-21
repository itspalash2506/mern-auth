import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10); // Hashing the password with bcrypt..The value 10 is the salt rounds, which determines how many times the password will be hashed to make it more secure. The higher the salt rounds, the more secure it is, but it also takes more time to hash the password.
  const newUser = new User({ username, email, password: hashPassword }); 
  try {
    await newUser.save(); 
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(errorHandler(300, err.message));
  }
};

export const signin = async (req, res, next) => {
  const {email, password } = req.body;
  try {
    const validUser = await User.findOne({email});
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password); 
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: hashPassword, ...rest} = validUser._doc;
    const expiry = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, {httpOnly: true, expires: expiry } )
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};



