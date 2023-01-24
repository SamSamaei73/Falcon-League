import React from "react";
import "../../Scss/Games.scss";
import Header from "../Items/HeaderGame";
import AboutGame from "../GameItem/AboutGame";
import Dota2 from "../../Images/dotalogo.png";
import Footer from "../Firstpage/Footer";
import MatchEvent from "../GameItem/MatchEvent";
import Captain from "../../Images/pudge.png";
import DotaVideo from '../../Video/dota.mp4';
import ResultsTr from "../GameItem/ResultsTr";

const Dota = () => {
  let Info =
    "Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game developed and published by Valve.The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map.Each of the ten players independently controls a powerful character known as a Hero that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's Ancient, a large structure located within their base.";
  return (
    <div id="Warzone">
      <Header />
      <AboutGame
        Photo={Dota2}
        Name={"DOTA2"}
        backGraund={{ backgroundColor: "#672522ae" }}
        Info={Info}
        video={DotaVideo}
        logoStyle={{width:'4rem', height:'4rem'}}
      />
      <MatchEvent
        Color={{ color: "#AF2921" }}
        active={{ backgroundColor: "#B12A22", color:"#fff" }}
        custome={{ backgroundColor: "#692724", color:'#fff' }}
        PhotoGame={Captain}
        photoStyle={{height:'30rem' , width:'35rem'}}
        gameId={2}
      />
            <ResultsTr/>

      <Footer />
    </div>
  );
};

export default Dota;
