import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employeeRoutes.js';
import adminRoutes from "./routes/adminRoutes.js";
const app = express();
const PORT="8000";
const mongoURL="mongodb://localhost:27017/ems-mern"
app.use(express.json());
app.use(cors());

mongoose.connect(mongoURL).then(()=>{
    console.log("Database conected")
}).catch((error)=>{
    console.log("Error connecting to Database - Error: " + error)
})

app.use('/api/employees', employeeRoutes);
app.use('/login',adminRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on PORT : ${PORT}`);

})
