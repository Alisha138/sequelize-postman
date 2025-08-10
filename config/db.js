//First File: Database Connection
//Sequelize is an Object-Relational Mapping (ORM) library for Node.js that lets you interact with your PostgreSQL database using JavaScript objects and methods instead of raw SQL queries.
//Maps JS objects to database tables.
//It automatically generates ID, created at and updated at columns.
//Handles relationships (e.g., one-to-many, many-to-many).
//Provides built-in validation, migrations, and model syncing.
//Lets you write queries like User.findAll() instead of SELECT * FROM users.

const { Sequelize } = require("sequelize");
require("dotenv").config(); //loads environment variables from .env into process.env

const sequelize = new Sequelize(
  //Creates a new connection sequelize instance
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", //Specifies the database type (`postgres` in this case). This is the key line that activates PostgreSQL-specific behavior.
    port: process.env.DB_PORT,
    logging: false, //means so sql queries can be in console.log
  }
);

sequelize
  .authenticate() //check connection to the database.
  .then(() => console.log("✔ Postgres is Connected Successfully"))
  .catch((err) => console.log("❌ Postgres is not Connecting", err.message));

module.exports = sequelize;

//move to the models folder
