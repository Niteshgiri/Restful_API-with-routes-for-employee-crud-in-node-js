module.exports = app => {
    const employee = require("../controller/employee.controller");
<<<<<<< HEAD
     const employee2=require("../module/employe.model");
=======
    const leaveController=require("../controller/leaves.controller");
    const many=require('../module/index')

>>>>>>> origin
    var router = require("express").Router();

    //create new employee
    router.post("/",employee.create);
  
    //getAll employee
    router.get("/",employee.findAll);

<<<<<<< HEAD
    // get employee  by name and email // import from employee.model in module folder
    router.get("/:name/:email",employee2.getbyNameAndEmail)
    //update employee by id
    router.put("/:id",employee.update);
=======
     //get employee-leaves by Emp_id 
     router.get("/:id",many.getProductReviews);

    //update employee by id
    router.post("/:id",employee.update);
>>>>>>> origin

    //delete employee by id
    router.delete("/:id",employee.delete);

<<<<<<< HEAD
     //get all leave of  all employee
    router.get("/all",employee2.getAllLeave);

    //add leave by employee id
    router.post("/:id",employee2.addLeave);

=======

    // add leaves for employee by id
    router.post('/addleave/:id',leaveController.addLeave );
>>>>>>> origin

    app.use('/api', router);


   
};