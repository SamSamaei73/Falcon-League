import React, { useContext, useRef, useEffect, useState } from "react";
import HeaderGame from "../Items/HeaderGame";
import "../../Scss/Login.scss";
import PhotoConfirm from "../../Images/confirmation2.png";
import { NavLink } from "react-router-dom";
import TestContext from "../../Context/testContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const testContext = useContext(TestContext);
  const { UpdateVerification, updateVerificationData } = testContext;
  const search = useLocation().search;
  let { Id } = useParams();
  useEffect(() => {
    const userId = new URLSearchParams(search).get("pc");
    // console.log(userId, Id);
    let frmData = {};
    frmData.verificationNumber = Id;
    frmData.userId = userId;
    UpdateVerification(frmData);
  }, []);
  useEffectSkipFirst(() => {
    if (updateVerificationData) {
      ///navigate("/Login");
    }
  }, [updateVerificationData]);

  return (
    <div className="ConfirmEmail">
      <div className="mainConfirmEmail">
        <HeaderGame />
        <div className="ConfirmAlert">
          <div className="BoxAlert">
            <div className="photo">
              <img src={PhotoConfirm} alt="PhotoEmail" />
            </div>
            <h5>Your Email has been confirmed</h5>
            <h6>
              For signing in click <NavLink to="/Login">here</NavLink>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
