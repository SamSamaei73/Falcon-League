// import React from "react";
import "../../Scss/Firstpage.scss";
import Logo from "../../Images/falconcm.png";
import Hamburger from "../../Images/icons8-hamburger-menu-bar-with-parallel-navigation-button-48.png";
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useContext, useState } from "react";
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

const Header = () => {
  const navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  return (
    <div id="Header">
      <div className="RightNavbar">
        <ul>
          {user ? (
            <div className="drop">
              <li>
                <span>▼ </span>
                {user.Username}
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
              <li className="primary">SIGN UP / SIGN IN</li>
            </NavLink>
          )}

          <li>CONTACT US</li>
          {/* <div className="drop">
          <li>test</li>
          <div className="dropdown">
            <a>My profile</a>
            <a>Account Setting</a>
            <a>Transaction History</a>
            <a>With Draw Funds</a>
            <a>Logout</a>
          </div>
          </div> */}
        </ul>
      </div>
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="LeftNavbar">
        <ul>
          <li>TOURNAMENTS</li>

          <li className="active">HOME</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
