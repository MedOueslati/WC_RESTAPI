// @Importing required modules
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()

// @Creating an Express application
const app = express()

// @Middleware to parse JSON data in the request body
app.use(express.json())
app.use("/api", require("./routes/userRoutes"))

// @Connecting to MongoDB Atlas database using URI from .env file

mongoose.connect(process.env.MONGO_URI)
.then (() => console.log("Database connected "))
.catch ((err) => console.error(err))

// @Setting up a constant for the server port
const port=process.env.PORT
// @Starting the Express server
app.listen(port, () => console.log("my server is running on port:",port))


