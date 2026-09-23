const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const Course = require("./models/Course");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/courses", courseRoutes);

sequelize.sync()
  .then(() => { console.log("Database synced successfully!"); })
  .catch((error) => { console.error("Unable to sync database:", error); });

app.listen(3000, () => { console.log("Server is running on port 3000"); });