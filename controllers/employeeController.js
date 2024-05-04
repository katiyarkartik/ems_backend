import Employee from '../models/employeeModel.js';


export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getEmployeeById=async(req,res)=>{

    const id= req.params.id;
    try {
        const emp=await Employee.findById(id);
        res.json(emp);        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        const employee = await Employee.findByIdAndUpdate(id, updates, { new: true });
        if (employee) {
            console.log("Employee updated successfully");
            res.status(200).json({ message: "Employee updated successfully", employee });
        } else {
            console.log("Employee not found");
            res.status(404).json({ message: "Employee does not exist" });
        }
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: "error" });
    }
};

export const deleteEmployee= async(req,res)=>{
    const id =req.params.id;
    try{
        const emp=await Employee.findById(id);
        if(emp){
            console.log("employee found");
            await Employee.findByIdAndDelete(id);
            console.log("Employee Deleted");
            res.status(200).json("Employee Deleted");
        }
        else{
            console.log("Employee not found");
        }
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}