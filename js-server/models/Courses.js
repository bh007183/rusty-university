const {Sequelize, DataTypes, Model} = require("sequelize")
const sequelize = require("../connection")
class Courses extends Model {}

Courses.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructor:{
        type: DataTypes.STRING,
        allowNull: false
    },

    
   
},{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Course' // We need to choose the model name
  })

module.exports = Courses