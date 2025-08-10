const express = require("express");
const app = express();
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

require("dotenv").config();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/users", userRoutes);

sequelize.sync().then(() => {
  //sequelize.sync() creates tables in your PostgreSQL database based on your Sequelize model definitions. .then() waits for sequelize.sync() to finish.
  app.listen(3000, () => console.log("Server running on port 3000")); //3000 means port, listen: starts the server (at 3000 in this case)
  app.get("/", (req, res) => {
    res.send("🚀 Backend server is running!");
  });
});
