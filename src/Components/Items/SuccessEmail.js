import React from 'react';
import "../../Scss/Login.scss";
import { NavLink } from "react-router-dom";
import HeaderGame from "../Items/HeaderGame";
import PhotoConfirm from "../../Images/confirmation2.png";




const SuccessEmail = () => {
  return (
    <div className='SuccessEmail'>
        <div className="mainConfirmEmail">
        <HeaderGame />
        <div className="ConfirmAlert">
          <div className="BoxAlert">
            <div className="photo">
              <img src={PhotoConfirm} alt="PhotoEmail" />
            </div>
            <h5>Your password successfully changed</h5>
            <h6>
              For signing in click <NavLink to="/Login">here</NavLink>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessEmail