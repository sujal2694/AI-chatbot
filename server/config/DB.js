import mongoose from "mongoose";


export const connectDB = () => { mongoose.connect("mongodb+srv://full_stack:full_stack_123@cluster0.nojqt8f.mongodb.net/Nova").then(() => console.log("DB connected")); }