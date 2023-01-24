import React from "react";
import "../../Scss/Firstpage.scss";
import Logo from "../../Images/Falcongold-logo.png";
import Warzone from "../../Images/2021-call-of-duty-warzone-yELLOW.jpg";
import Valorant from "../../Images/thumb-1920-11866RED44.jpg";
import Dota from "../../Images/474206blue.jpg";
import Fifa from "../../Images/fifa-22-button-v2-162709blue2920671.jpg";
import Apex from "../../Images/apex-legends-WHP20.jpg";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="Navbar">
      <div className="infoNavbar">
        <div className="LogoNavbar" >
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="MainNavbar">
        <div className="GamePhoto">
          <NavLink to="/Warzone">
            <div className="gameSelect">
              <img src={Warzone} alt="Warzone" />
              <h2>WARZONE</h2>
            </div>
          </NavLink>
          <div className="gameSelect">
            <img src={Valorant} alt="VALORANT" />
            <h2>VALORANT</h2>
          </div>
          <NavLink to="/Dota">
            <div className="gameSelect">
              <img src={Dota} alt="Dota" />
              <h2>DOTA 2</h2>
            </div>
          </NavLink>
          <NavLink to="/Fifa">

          <div className="gameSelect">
            <img src={Fifa} alt="Fifa" />
            <h2>FIFA</h2>
          </div>
          </NavLink>
          <div className="gameSelect">
            <img src={Apex} alt="Apex" />
            <h2>APEX</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
