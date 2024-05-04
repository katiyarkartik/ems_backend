import mongoose from "mongoose";

const employeeModel = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true
    },
    // employeePhoto: {
    //     type: String,
    //     required: true
    // },
    employeeName: {
        type: String,
        required: true
    },
    employeeSalary: {
        type: Number,
        required: true
    }
});

const Employee = mongoose.model("employee", employeeModel);
export default Employee;
