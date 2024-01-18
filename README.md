# Almabetter's Second Capstone Project: BookMyShow Website

## Project Overview

Almabetter's second Capstone project focuses on the development of a BookMyShow website, aiming for a user-friendly interface and optimal responsiveness across diverse devices. The project comprises both frontend and backend components.

## Deployment Links

- **Frontend on Render:** [https://frontend-bookingapp.onrender.com/](https://frontend-bookingapp.onrender.com/)
- **Backend on Render:** [https://backend-bookingapp.onrender.com/](https://backend-bookingapp.onrender.com/)

## Installation

To run the project locally, perform the following steps in your local IDE terminal:

**For Frontend:**
```bash
cd frontend
npm install
npm start
```

 **Backend installation:**

```bash
cd backend
npm install
npm start
```
# Backend Initialization

This initiates the backend at [http://localhost:8080](http://localhost:8080).

## How to Use

Visit [https://frontend-bookingapp.onrender.com/](https://frontend-bookingapp.onrender.com/) and follow these steps:

1. **Select a Movie.**
2. **Choose a Time Schedule.**
3. **Select Seats.**
4. **Click the "Book Now" Button.**

Upon clicking, a confirmation pop-up will appear, and on the right side of the screen, you can review details of the previous movie ticket.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Project Type:** MERN Stack Project

## Environment Variables

To run the project successfully, ensure the following environment variables are added to your `.env` file, which should include your MongoDB cluster.

```env
MONGODB_CLUSTER_CONNECT_KEY=your_mongodb_cluster_connect_key
```
# API Documentation: Booking App

## Base URL
[https://backend-bookingapp.onrender.com/api/](https://backend-bookingapp.onrender.com/api/)

### 1. Retrieve Bookings (GET /booking)

#### Description
The `GET /booking` endpoint is designed to provide a detailed list of the most recent bookings stored in the database. This information is presented in JSON format, offering insights into the latest transactions.

#### Example Response
```json
[
  {
    "bookingId": "65a8c73372b31af5350106a2",
    "movie": "The war with grandpa",
    "slots": "03:00 PM",
    "seats": {
      "A1": null,
      "A2": null,
      "A3": 1,
      "A4": null,
      "D1": null,
      "D2": null
    },
    "timestamp": null
  }
]

```
# Create a New Booking (POST /booking)

## Description

The `POST /booking` endpoint facilitates the creation of a new booking based on user input. Users are required to include specific parameters in the request body to successfully make a booking.

## Parameters

- `movie` (string, required): The name of the selected movie.
- `slots` (string, required): The chosen time slot for the movie.
- `seats` (number, required): The number of seats selected for the booking.
  
