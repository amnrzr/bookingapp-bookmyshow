
Almabetter's second Capstone project involves the creation of a BookMyShow website with a straightforward user interface that ensures ease of use and responsiveness across various devices. The project includes both frontend and backend components.

Deployment Links:

Frontend on render: https://frontend-bookingapp.onrender.com/
Backend on render: https://backend-bookingapp.onrender.com/
Installation:
To run the project locally, follow these steps in your local IDE terminal:

For Frontend:

bash
Copy code
cd frontend
npm install
npm start

For Backend:

bash
Copy code
cd backend
npm install
npm start
This will start the frontend at http://localhost:3000 and the backend at http://localhost:8080.

How to Use:
Visit https://frontend-bookingapp.onrender.com/ and follow these steps:

Select a movie.
Choose a time schedule.
Select seats.
Click the "Book Now" button. A confirmation pop-up will appear, and on the right side of the screen, you can view the details of the previous movie ticket.
Tech Stack:

Frontend: React js
Backend: Node js, Express js
Database: MongoDB
MERN stack project
Environment Variables:
To run the project, add the following environment variables to your .env file, including your MongoDB cluster connect key and API_KEY.

API Documentation:
Base URL: https://backend-bookingapp.onrender.com/

Booking:

GET /booking: Returns a list of the last bookings stored in the database in JSON format.
POST /booking: Creates a new booking with the following parameters:
movie (string, required): Your selected movie.
slots (string, required): Your selected time.
seats (number, required): Number of seats you have selected.


Returns the newly created booking in JSON format.
