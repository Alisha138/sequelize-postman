// swagger.js: Swagger Configuration File
const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description: "CRUD API for managing users with JWT authentication",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your annotated route files
};

const specs = swaggerJsdoc(options);
fs.writeFileSync("swagger.json", JSON.stringify(specs, null, 2)); //swaggerSpec means imported swaggerJsdoc
