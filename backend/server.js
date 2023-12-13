// Imports
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// Environment Varaibles
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// Creating the server
const app = express();
app.use(express.json());
// app.use(express.urlencoded);

// API Endpoints
app.get("/", (req, res) => {
  res.send(`<h1>Assignment is running in port ${PORT}</h1>`).status(200);
});

// Users Endpoint
app.use("/api/user", userRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Initialising the server
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
