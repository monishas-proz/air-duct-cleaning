const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define("Admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  email: {
   type: DataTypes.STRING,
   allowNull:false,
   unique: true,
   validate:{
    isEmail: true,
    notEmpty: true,
   }, 
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  otp: {
    type: DataTypes.STRING,
    allowNull: true
  },

  otpExpiresAt:{
    type: DataTypes.DATE,
    allowNull: true,
  },
  
});

module.exports = Admin;