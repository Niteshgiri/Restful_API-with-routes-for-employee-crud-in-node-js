const connection=require('../controller/db');

// constructor
const Employee=function(employee){
    this.name=employee.name;
    this.email=employee.email;
    this.role=employee.role;
    this.address=employee.address;
}

//Insert employ into database
Employee.create=(newEmployee,result) =>{
    
  connection.query("SELECT * FROM employee WHERE email = ?", newEmployee.email, (err, results) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(newEmployee.email);
    console.log(result.email);
    if (results.length>0 ) {
      // not found Tutorial with the id
      result({ kind: "Already exist" }, null);
      return;
    }
  else{
    connection.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created Employee: ", { id: res.insertId, ...newEmployee });
        result(null, { id: res.insertId, ...newEmployee });
      });
    }
  });
  console.log("hello")
}

//get all

Employee.getAll = (name, result) => {
  let query = "SELECT * FROM employee";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  connection.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("employee: ", res);
    result(null, res);
  });
};



//Update employee
Employee.updateById = (id, employee, result) => {
  connection.query(
    "UPDATE employee SET name = ?, email = ?, role = ?,address = ? WHERE id = ?",
    [employee.name, employee.email, employee.role,employee.address, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Employee: ", { id: id, ...employee });
      result(null, { id: id, ...employee });
    }
  );
};

//delete by id

Employee.remove = (id, result) => {
  connection.query("DELETE FROM employee WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted employee with id: ", id);
    result(null, res);
  });
};


module.exports=Employee;