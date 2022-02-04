const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");

// import routes
const restaurantRoutes = require('./routes/restaurantRoutes.js')

const app = express()
app.use(express.json());

dotenv.config();

const dbURI = process.env.MONGO_DB

// connect to db
mongoose
  .connect(dbURI)
  .then(() => console.log(`Database connection successful`))
  .catch((err) => console.log(`Database connection error ${err}`));

// setup routes
app.use(restaurantRoutes)

  app.listen(process.env.PORT || 3088, () =>
  console.log("Server is running on Port 3088")
);