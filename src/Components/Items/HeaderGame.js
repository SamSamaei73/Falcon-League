import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Login.scss";
import Logo from "../../Images/Falcongold-logo.png";
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

const HeaderGame = () => {
  const navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;

  return (
    <div id="HeaderGame">
      <div className="navbar">
        <div className="side">
          <ul>
            <NavLink to="/">
              <li>HOME</li>
            </NavLink>
            <li>TOURNAMENT</li>
            <li>ABOUT US</li>
          </ul>
        </div>
        <div className="side">
          <ul>
            <li>BLOG</li>
            <li>CONTACT US</li>

            {user ? (
              <div className="drop">
                <li>
                  {user.Username}
                  <span>▼ </span>
                </li>
                <div className="dropdown">
                  <NavLink to="/UserAdmin">My profile</NavLink>
                  <NavLink to="/UserEdit">Account Setting</NavLink>
                  <NavLink to="/AdminGame">Create Tournament</NavLink>
                  <NavLink to="/">Transaction History</NavLink>
                  <a>With Draw Funds</a>
                  <a
                    onClick={(e) => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <NavLink to="/Login">
                {" "}
                <li className="SelectPrimary">SIGN UP / SIGN IN</li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
      <NavLink className="logo" to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default HeaderGame;
