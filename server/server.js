import e from 'express'
import cors from 'cors'
import { connectDB } from './config/DB.js';
import { userRouter } from './routes/userRoutes.js';

const app = e();
const port = 4000;

app.use(e.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/user", userRouter)



app.get('/', (req, res) => {
    res.send("server is live.....")
})

app.listen(port, (req, res) => {
    console.log("server running on port 4000");
})
