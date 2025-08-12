const express = require("express");
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/items", itemRoutes);

module.exports = app;

