const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require("../connection")


class Student extends Model {
    checkPass(plain){
        return bcrypt.compareSync(plain, this.password)

    }
}

Student.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    
   
},{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Student' // We need to choose the model name
  })

Student.beforeCreate(function(user){
   return user.password = bcrypt.hashSync(user.password, 10);
})

module.exports = Student