import Admin from "../models/adminModel.js";

export const adminLogin=async(req,res)=>{

    const {username, password} =req.body;
    try {
        const isAdmin=await Admin.findOne({username,password});
        if(isAdmin){
            console.log("Login Successfull");
            res.json("login done")
        }
        else{
            console.log("Invalid credentials");
        }

    } catch (error) {
        console.log("server error");
    }
}