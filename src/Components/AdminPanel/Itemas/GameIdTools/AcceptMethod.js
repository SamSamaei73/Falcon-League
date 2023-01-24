import React, { useContext, useRef, useEffect, useState } from "react";
import Battel from "../../../../Images/battle.png";
import PS4 from "../../../../Images/ps4.png";
import Xbox from "../../../../Images/xbox.png";
import TestContext from "../../../../Context/testContext";


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

const AcceptMethod = ({ Name, logo }) => {
  const testContext = useContext(TestContext);

  const { usernameGameData } = testContext;

  return (
    <div className="AcceptMethod">
      <div className="headAndLogo">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Name">
          <h2>{Name}</h2>
          <h4>Connect your account</h4>
        </div>
      </div>
      <div className="navigation">
        <h5>
          <span className="select">Select</span> {">"}{" "}
          <span className="select">Services</span> {">"} Checking
        </h5>
      </div>
      <div className="logoBox">
        <div className="logoMethod">
          <img src={Battel} alt="" />
        </div>
      </div>

      <div className="boxSuccess">
        <h3>
          <span className="successfully">{usernameGameData}</span> successfully
          added to your account
        </h3>
      </div>

      <div className="bottunBox">
        <button onClick={(e)=>{window.location.reload();}}>Back to profile</button>
      </div>
    </div>
  );
};

export default AcceptMethod;
