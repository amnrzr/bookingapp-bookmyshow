import React, { useState, useEffect } from "react";
import BsContext from "./Context";

// BsState component manages state and provides context for the application
const BsState = (props) => {
  // State variables for managing seats, error popups, and booking details
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  // Function to make a post request to the server with the booking details
  const handlePostBooking = async () => {
    // Sending API request to backend with user-selected movie, slot, and seats to book movie
    const response = await fetch(`https://backend-bookingapp.onrender.com/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });

    const data = await response.json();

    // Handling error popup based on response status
    setErrorPopup(true);
    setErrorMessage(data.message);

    // Clearing form and local storage if the response status is 200
    if (response.status === 200) {
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      window.localStorage.clear();
    }
  };

  // Function to make a get request to the server to get the last booking details
  const handleGetLastBooking = async () => {
    const response = await fetch(`https://backend-bookingapp.onrender.com/api/booking`, {
      method: "GET",
    });

    const data = await response.json();
    // Setting last booking details received from the backend
    setLastBookingDetails(data.data);
  };

  // Getting movies, slots, and seats from local storage and updating state when the page refreshes
  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie || slot || seats) {
      changeTime(slot);
      changeMovie(movie);
      changeNoOfSeats(seats);
    }
  }, []);

  // Providing all required data to the app using context
  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
