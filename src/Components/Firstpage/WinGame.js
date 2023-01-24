import React, { useEffect, useRef, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";

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



const WinGame = () => {
  const navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  return (
    <div id="WinGame">
      <div className="ShadowWin">
        <div className="MainTest">
            <h1>LET'S WIN THE</h1>
            <h1 className='primaryText'>GAME</h1>
        </div>
        {user ? null :( <NavLink to="/Login"><button>JOIN</button></NavLink>)}
      </div>
    </div>
  );
};

export default WinGame;
