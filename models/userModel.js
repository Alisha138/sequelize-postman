//This file is to apply database queries in table. its also using node (require, module.exports) and sequelize (sequelize.define())

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  //definig table called User
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [2, 50] }, //validation Rules
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [6, 100] },
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    defaultValue: "user",
  },
});

module.exports = User;

//Move to controllers folder
