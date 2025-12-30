import e from 'express'
import { loginUser, registerUser } from '../controller/userController.js';

export const userRouter = e.Router();

userRouter.post("/loginUser", loginUser);
userRouter.post("/registerUser", registerUser)