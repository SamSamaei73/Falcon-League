import React from "react";
import "../../Scss/Games.scss";
import Header from "../Items/HeaderGame";
import AboutGame from "../GameItem/AboutGame";
import FifaPhoto from "../../Images/fifiLogo.png";
import Footer from "../Firstpage/Footer";
import MatchEvent from "../GameItem/MatchEvent";
import Captain from "../../Images/fifiPhoto.png";
import FifaVideo from '../../Video/Fifa.mp4';
import ResultsTr from "../GameItem/ResultsTr";


const Fifa = () => {
  let Info =
    "Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game developed and published by Valve.The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map.Each of the ten players independently controls a powerful character known as a Hero that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's Ancient, a large structure located within their base.";
  return (
    <div id="Warzone">
      <Header />
      <AboutGame
        Photo={FifaPhoto}
        Name={"FIFA"}
        backGraund={{ backgroundColor: "#Fff" }}
        Info={Info}
        video={FifaVideo}
        logoStyle={{width:'4rem', height:'4rem'}}
      />
      <MatchEvent
        Color={{ color: "#fff" }}
        active={{ backgroundColor: "#fff", color:"#111" }}
        custome={{ backgroundColor: "#C5C5C5", color:'#111' }}
        PhotoGame={Captain}
        photoStyle={{height:'61rem' , width:'55rem'}}
        gameId={3}
      />
      <ResultsTr/>
      <Footer />
    </div>
  );
};

export default Fifa;
