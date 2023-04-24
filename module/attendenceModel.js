module.exports = (sequelize, DataTypes) => {

    const Attendence = sequelize.define("LEAVES", {
        
        LeavesDates: {
            type: DataTypes.STRING
        },
        LeaveReason: {
            type: DataTypes.STRING
        }
        
    
    })

    return Attendence

}