// Import required modules
const express = require("express");
const router = express.Router();
const Schema = require("./schema");

// Initialize Express app
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Use middleware to handle URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Use Express middleware to parse JSON data
app.use(express.json());

// Route to handle booking request
router.post("/booking", async (req, res) => {
  try {
    // Extract data from the request body
    const { movie, slot, seats } = req.body;

    // Create a new instance of the booking schema with the provided data
    const myData = new Schema({ movie, slot, seats });

    // Save the new booking data to the database
    const saved = await myData.save();

    if (saved) {
      // Send success response with the booking data
      res.status(200).json({ data: myData, message: "Booking successful!" });
    } else {
      // Send error response if booking is not successful
      res.status(500).json({
        data: null,
        message: "Something went wrong! Please try again.",
      });
    }
  } catch (error) {
    // Handle any errors that occur during the booking process
    console.error("Error during booking:", error);
    res.status(500).json({
      data: null,
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

// Route to get the data of the most recent booking
router.get("/booking", async (req, res) => {
  try {
    // Find the most recent booking from the database
    const myData = await Schema.find().sort({ _id: -1 }).limit(1);

    if (myData.length === 0) {
      // Send response with a message if no previous booking is found
      res.status(200).json({ data: null, message: "No previous Booking found!" });
    } else {
      // Send success response with the most recent booking data
      res.status(200).json({ data: myData[0] });
    }
  } catch (error) {
    // Handle any errors that occur while retrieving booking data
    console.error("Error during data retrieval:", error);
    res.status(500).json({
      data: null,
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

// Export the router for use in other parts of the application
module.exports = router;
