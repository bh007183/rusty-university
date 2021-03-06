const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection")
class University extends Model {}

University.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    student_id: {
        type: DataTypes.INTEGER
    },
    course_id: {
        type: DataTypes.INTEGER
    }
   
},{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'University' // We need to choose the model name
  })

module.exports = University