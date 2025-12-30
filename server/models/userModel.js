import mongoose from "mongoose";


export const userSchema = mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,Unique:true},
    password: {type:String,required:true},
})


export const userModel = mongoose.models.user || mongoose.model("user", userSchema);