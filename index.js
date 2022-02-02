const express = require('express')
const mongoose = require('mongoose')

const app = express()

const dbURI = process.env.dbURI

mongoose
  .connect(dbURI)
  .then(() => console.log(`Database connection successful`))
  .catch((err) => console.log(`Database connection error ${err}`));