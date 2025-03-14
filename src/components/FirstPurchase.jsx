import React, { useState } from "react";
import "../css/firstpurchase.css";
import fpimg from "../assets/images/undraw_playing_fetch_cm19.svg";

const FirstPurchase = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform your registration logic here

    // Display the popup
    setShowPopup(true);

    // Reset the form or perform other actions as needed
  };

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <div className={`fp ${showPopup ? "popup-visible" : ""}`}>
      <img id="fpimg" src={fpimg} alt="Fetching dog" />
      <form action="" id="regform">
        <p>Get 20% off on your</p>
        <p>First Purchase</p>
        <input
          type="text"
          id="mail"
          className="input"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          id="pwd"
          className="input"
          placeholder="Password"
          required
        />
        <input
          type="password"
          id="cpwd"
          className="input"
          placeholder="Confirm password"
          required
        />
        <button id="regbtn" onClick={handleRegister}>
          Register
        </button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div>
          <div className="backdrop"></div>
          <div className="popup">
            <div className="part1">
              <p >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  
                  className="icon-check"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              <p className="check-text">SUCCESS</p>

            </div>
            <div className="part2">
              <p id="text-popup">
                Congratulation, your account has <br />
                been successfully created!
              </p>
              <button id="continue-button" onClick={handleClosePopup}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstPurchase;
