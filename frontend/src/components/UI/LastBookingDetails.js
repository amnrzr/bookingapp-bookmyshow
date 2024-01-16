import React, { useEffect } from "react";
import "../styles/lastbookingdetails.css";
import { useContext } from "react";
import BsContext from "../../context/Context";
import { seats } from "../../data";

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {
    // Fetching the details of the last booking
    handleGetLastBooking();
  }, []); // Ensure useEffect runs only once on component mount

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        // Show last booking details if available
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => (
                <li className="seat_value" key={index}>
                  {seat}: {lastBookingDetails.seats ? lastBookingDetails.seats[seat] || 0 : 0}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            {/* Show the time slot of the booking */}
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            {/* Show the movie name of the last booked movie */}
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        // Display a message if the last booking details are not available
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
