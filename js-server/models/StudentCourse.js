const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection")
class StudentCourse extends Model {}

StudentCourse.init({
   
    student_id: {
        type: DataTypes.INTEGER
    },
    course_id: {
        type: DataTypes.INTEGER
    }
   
},{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'StudentCourse' // We need to choose the model name
  })

module.exports = StudentCourse