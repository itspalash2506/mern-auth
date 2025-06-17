import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {
    const {username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10); // Hashing the password with bcrypt..The value 10 is the salt rounds, which determines how many times the password will be hashed to make it more secure.
    // The higher the salt rounds, the more secure it is, but it also takes more time to hash the password.
    const newUser = new User({ username, email, password: hashPassword }); // Creating a new user with the hashed password
    try{
        await newUser.save() // This is the asynchronous behaviour
        res.status(201).json({message: "User created successfully"});
    }catch(err){
        res.status(500).json(err.message); 
    }
}
