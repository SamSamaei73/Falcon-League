import React, { useState, useEffect } from "react";
import "../Scss/Firstpage.scss";
import Header from "./Firstpage/Header";
import Navbar from "./Firstpage/Navbar";
import Match from "./Firstpage/Match";
import AboutFalcon from "./Firstpage/AboutFalcon";
import Withus from "./Firstpage/Withus";
import Footer from "./Firstpage/Footer";
import WinGame from "./Firstpage/WinGame";
import scrollToComponent from "react-scroll-to-component";
import ImageDown from "../Images/up-arrow.png";


const Firstpage = () => {
  const [sectionData, setSectionData] = useState([]);

  const scrollC = (Id) => {
    scrollToComponent(sectionData[Id], {
      offset: 0,
      align: "top",
      duration: 800,
    });
  };

  return (
    <div id="Firstpage">
      <div className="LogoPlace">
      <div className="scroollDiv">
        <img
          src={ImageDown}
          className="circleScroll"
          onClick={(e) => scrollC(1)}
          alt="ImageDown"
        />
      </div>
      </div>
      <div className="StyleNavbar">
        <Header />
        <Navbar  />
      </div>
      <section
        ref={(section) => {
          sectionData[1] = section;
        }}
      >
        <WinGame />
      </section>
      <Match />
      <AboutFalcon />
      <Withus />
      <Footer />
    </div>
  );
};

export default Firstpage;
