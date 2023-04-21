module.exports = app => {
    const employee = require("../controller/employee.controller");
  
    var router = require("express").Router();

    //create new employee
    router.post("/",employee.create);
  
    //getAll employee
    router.get("/",employee.findAll);

    //update employee by id
    router.post("/update/:id",employee.update);

    //delete employee by id
    router.delete("/delete/:id",employee.delete);

    app.use('/api', router);
};