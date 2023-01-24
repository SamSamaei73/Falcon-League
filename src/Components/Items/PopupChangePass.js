import React from "react";
import "../../Scss/Login.scss";
import Confirm from "../../Images/reset-password.png";
import { NavLink } from "react-router-dom";

const PopupChangePass = (prop) => {
  return (
    <div className="PopupChangePass">
      <div className="BoxAlert">
        <div className="photo">
          <img src={Confirm} alt="PhotoEmail" />
        </div>
        <h5>Your Password successfully changed</h5>
        <p>
          For signing in click <NavLink to="/Login">here</NavLink>
        </p>
        <button onClick={(e) => prop.showPopup(false)}>OK</button>
      </div>
    </div>
  );
};

export default PopupChangePass;
