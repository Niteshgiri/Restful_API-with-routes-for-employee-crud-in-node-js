const mysql=require('mysql');
const config=require("../DB/config");

const connection=mysql.createConnection({

    host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
})

connection.connect(err => {
    if(err) throw err;
    console.log("Mysql connected");
});

module.exports=connection;