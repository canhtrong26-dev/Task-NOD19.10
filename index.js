const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const Course = require("./models/Course");
const Category = require("./models/Category");
const courseRoutes = require("./routes/courseRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();
const app = express();
app.use(express.json());

const models = { Course, Category };
Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

app.use("/api/courses", courseRoutes);
app.use("/api/categories", categoryRoutes);

sequelize.sync()
  .then(() => { console.log("Database synced successfully!"); })
  .catch((error) => { console.error("Unable to sync database:", error); });

app.listen(3000, () => { console.log("Server is running on port 3000"); });