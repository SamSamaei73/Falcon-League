import React, { useState } from "react";
import GameId from "./GameId";
import Mystate from "./Mystate";
import Earning from "./Earning";
import WZon from "../../../Images/wz_logogold.png";
import Valorant from "../../../Images/valorant.png";
import Apex from "../../../Images/Apex.png";
import Dota from "../../../Images/dotalogo.png";
import Fifa from "../../../Images/whiteFifa.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameScore from "./GameScore";
import ActiveTour from "./ActiveTour";
import PastTour from "./PastTour";
import trophiGold from "../../../Images/tournament.png";
import trophiRed from "../../../Images/tournamentred.png";
import GunGold from "../../../Images/gun.png";
import GunRed from "../../../Images/wint.png";
import WarzoneLogo from "../../../Images/icon-wz-white.png";
import DotaLogo from "../../../Images/dotalogo.png";

const GameView = () => {
  const [active, setActive] = useState(1);
  const [SelectGame, setSelectGame] = useState(5);

  return (
    <div className="GameView">
      <div className="left">
        <Tabs>
          <TabList
            onClick={(e) => setActive(e.target.value)}
            className="header"
          >
            <Tab value={1} className={active == 1 ? "activeTab tab" : "tab"}>
              Overview
            </Tab>
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              Tournaments
            </Tab>
          </TabList>

          <TabPanel>
            <div className="overView">
              <div className="statist">
                <div className="title">
                  <h2>Game Statistics</h2>
                  <h4>Player's game specific statistics</h4>
                </div>
                <div className="games">
                  <div
                    className={SelectGame == 1 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(1)}
                  >
                    <img src={Fifa} alt="Game" />
                  </div>
                  <div
                    className={SelectGame == 2 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(2)}
                  >
                    <img src={Dota} alt="Game" />
                  </div>
                  <div
                    className={SelectGame == 3 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(3)}
                  >
                    <img src={Apex} alt="Game" />
                  </div>
                  <div
                    className={SelectGame == 4 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(4)}
                  >
                    <img src={Valorant} alt="Game" />
                  </div>
                  <div
                    className={SelectGame == 5 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(5)}
                  >
                    <img src={WZon} alt="Game" />
                  </div>
                </div>
              </div>
              {SelectGame == 5 ? (
                <>
                  <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    NumColor={"warzonNum"}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
                </>
              ) : null}
              {SelectGame == 2 ? (
                <>
                  <GameScore
                    NameGame={"DOTA2"}
                    NumColor={"DotaNum"}
                    Trophi={trophiRed}
                    Gun={GunRed}
                  />
                  <ActiveTour />
                  <PastTour
                    Logo={DotaLogo}
                    logoStyle={{ width: "40px", height: "40px" }}
                  />
                </>
              ) : null}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
      <div className="right">
        <div className="HeadGap"></div>
        <GameId />
        <Mystate />
        <Earning />
      </div>
    </div>
  );
};

export default GameView;
