import { userModel } from "../models/userModel.js";
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import 'dotenv/config'

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User don't exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const token = createToken(user._id)
        res.json({ success: true, token, message: "Login successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error })
    }

}


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

export const registerUser = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        if (!validator.isEmail(email)) {
            res.json({ success: true, message: "PLease enter valid email" })
        }

        const exists = await userModel.findOne({ email });
        if (exists) {
            res.json({ success: false, message: "User already exists!" })
        }

        if (password.length < 8) {
            res.json({ success: false, message: "Password is to weak, make it strong" })
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newuser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })
        const user = await newuser.save();
        const token = createToken(user._id)
        res.json({ success: true, token, message: "Register successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error })
    }
}