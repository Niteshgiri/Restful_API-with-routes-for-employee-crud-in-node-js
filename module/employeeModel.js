module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define("employees", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }
    
    })

    return Employee

}