module.exports = app => {
    const employee = require("../controller/employee.controller");
    const leaveController=require("../controller/leaves.controller");
    const many=require('../module/index')

    var router = require("express").Router();

    //create new employee
    router.post("/",employee.create);
  
    //getAll employee
    router.get("/",employee.findAll);

     //get employee-leaves by Emp_id 
     router.get("/:id",many.getProductReviews);

    //update employee by id
    router.post("/:id",employee.update);

    //delete employee by id
    router.delete("/:id",employee.delete);


    // add leaves for employee by id
    router.post('/addleave/:id',leaveController.addLeave );

    app.use('/api', router);
};