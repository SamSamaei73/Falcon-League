import React from "react";
import "../../Scss/Games.scss";
import Header from "../Items/HeaderGame";
import AboutGame from "../GameItem/AboutGame";
import WarzoneP from "../../Images/icon-wz-white.png";
import Footer from "../Firstpage/Footer";
import MatchEvent from "../GameItem/MatchEvent";
import Captain from "../../Images/CPT.PRICE.png";
import WarzoneVideo from '../../Video/warzone.mp4';
import ResultsTr from "../GameItem/ResultsTr";

const Warzone = () => {
  let Info =
    "Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, and Microsoft Windows. A version for the PlayStation 5 and Xbox Series X/S has been announced to be released in 2022, with a mobile version also in development as of 2022.[1][2] The game is a part of 2019's Call of Duty: Modern Warfare and is connected to 2020's Call of Duty: Black Ops: Cold War and 2021's Call of Duty: Vanguard, but does not require purchase of any of the aforementioned titles, and was introduced during Season 2 of Modern Warfare content. Warzone was developed by Infinity Ward and Raven Software (the latter later credited as the sole developer following the integration of Cold War's content) and published by Activision. Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players.";
  return (
    <div id="Warzone">
      <Header />
      <AboutGame
        Photo={WarzoneP}
        Name={"WARZONE"}
        backGraund={{ backgroundColor: "#886f38de" }}
        Info={Info}
        video={WarzoneVideo}
      />
      <MatchEvent
        Color={{ color: "#EDCC80" }}
        active={{ backgroundColor: "#EBC063" }}
        custome={{ backgroundColor: "#886F38" }}
        PhotoGame={Captain}
        gameId={1}
      />
      <ResultsTr/>
      <Footer />
    </div>
  );
};

export default Warzone;
