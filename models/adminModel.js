import mongoose, { model } from "mongoose";

const adminSchema = new mongoose.Schema({
    adminID:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const Admin= mongoose.model("admin",adminSchema);
export default Admin;