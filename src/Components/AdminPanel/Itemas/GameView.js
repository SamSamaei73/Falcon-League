import React, { useEffect, useRef, useContext, useState } from "react";
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
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";



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

const GameView = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser, otherDataStatistic, GetOtherStatisticByUserId } =
    testContext;
  const { user, login, isAuthenticated, err } = authContext;
  const [active, setActive] = useState(1);
  const [SelectGame, setSelectGame] = useState(1);
  const [staticsData, setStaticsData] = useState(null);
  

  useEffectSkipFirst(() => {
    if (SelectGame) 
   {
    console.log('gameidchanged:',SelectGame)
    GetOtherStatisticByUserId(user.id ,SelectGame );
   }
     
  }, [SelectGame]);
  useEffectSkipFirst(() => {
  //   if (otherDataStatistic) 
  //  {
  //   console.log('other recieved:',otherDataStatistic);
  //   setStaticsData(otherDataStatistic);
  //  }
     
  }, [otherDataStatistic]);

  const showStatisticByScore=(gameId)=>{
    switch (gameId) {
      case 1:
        return 
        <>
         <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    GameId={1}
                    NumColor={"warzonNum"}
                    data={otherDataStatistic}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
        </>
        break;
      case 2:
        return 
        <>
         <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    GameId={2}
                    NumColor={"warzonNum"}
                    data={otherDataStatistic}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
        </>
        break;
      case 3:
        return 
        <>
         <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    GameId={3}
                    NumColor={"warzonNum"}
                    data={otherDataStatistic}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
        </>
        break;
    
      default:
        break;
    }
  }

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
                    className={SelectGame == 3 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(3)}
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
                    className={SelectGame == 5 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(5)}
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
                    className={SelectGame == 1 ? "game active" : "game"}
                    onClick={(e) => setSelectGame(1)}
                  >
                    <img src={WZon} alt="Game" />
                  </div>
                </div>
              </div>
              {SelectGame == 1 ? (
                <>
                  <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    GameId={1}
                    NumColor={"warzonNum"}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
                </>
              ) : SelectGame == 2 ? (
                <>
                  <GameScore
                    NameGame={"DOTA2"}
                    NumColor={"DotaNum"}
                    Trophi={trophiRed}
                    Gun={GunRed}
                    GameImg={"Dota2 itemPhoto"}
                    GameId={2}

                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
                </>
              ): SelectGame == 3 ? (
                <>
                  <GameScore
                    NameGame={"WARZONE"}
                    Trophi={trophiGold}
                    Gun={GunGold}
                    GameImg={"warzone itemPhoto"}
                    GameId={1}
                    NumColor={"warzonNum"}
                    data={otherDataStatistic}
                  />
                  <ActiveTour />
                  <PastTour Logo={WarzoneLogo} />
                </>
              ) :null}
                           
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
