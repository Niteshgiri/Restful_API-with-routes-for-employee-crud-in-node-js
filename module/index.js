//const { DataTypes } = require('sequelize');
const dbConfig = require('../DB/config');
const emp=require('../module/employeeModel');
const {Sequelize, DataTypes} = require('sequelize');



const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
       
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)


sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//create a table of employees and attendence
db.employees=require('./employeeModel.js')(sequelize, DataTypes)
db.leaves=require('./attendenceModel.js')(sequelize, DataTypes)





db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


// 1 to Many Relation

db.employees.as=function (db){
db.employees.hasMany(db.leaves, {
    foreignKey: 'Employee_id',
    as: 'leave'
})

db.leaves.belongsTo(db.employees, {
    foreignKey: 'Employee_id',
    as: 'employee'
})


}

const getProductReviews =  async (req, res) => {

    const id = req.params.id
   
    const data = await db.employees.findOne({
        include: [{
            model: db.leaves,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}



module.exports = { db ,getProductReviews }
