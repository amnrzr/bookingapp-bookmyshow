// Load environment variables from .env file
require("dotenv").config();

// Import necessary libraries
const { MongoClient } = require("mongodb");
let mongoose = require("mongoose");

// Configure Mongoose to use strict query mode
mongoose.set("strictQuery", true);

// Retrieve MongoDB connection URI from environment variables
const mongoURI = process.env.MONGODBURI;

// Function to connect to MongoDB using Mongoose library
const connectToMongo = async () => {
  try {
    // Attempt to connect to MongoDB using provided URI
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Log a success message upon successful connection
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    // Log an error message if connection fails
    console.log("Error while connecting to MongoDB:", err);
  }
};

// Export the connection function for external use
exports.connection = connectToMongo;
