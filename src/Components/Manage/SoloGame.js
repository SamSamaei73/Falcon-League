import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Manage.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Dota from "../../Images/dotalogo.png";
import Warzone from "../../Images/icon-wz-white.png";
import EditSolo from "./Items/EditSolo";
import ResultSolo from "./Items/ResultSolo";
import RecoverSolo from "./Items/RecoverSolo";
import Rules from "./Items/Rules";
import Reload from "../../Images/Untitled-1.png";
import PrizePoolSolo from "./Items/PrizePoolSolo";

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

const SoloGame = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { SetSwitchUsers, GetTournamentById, tournamentByIdData } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [GameIdData, setGameIdData] = useState([]);

  let { Id } = useParams();
  useEffect(() => {
    console.log("Id", Id);
  }, []);

  useEffect(() => {
    GetTournamentById(Id);
  }, []);

  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      console.log("mohtava",tournamentByIdData);
      
      setGameIdData(tournamentByIdData.GameId);
      LogoGame(tournamentByIdData.GameId);
    }
  }, [tournamentByIdData]);

  const [active, setActive] = useState(1);
  const [Show, setShow] = useState(true);

  const LogoGame = (GameIdData) => {
    switch (GameIdData) {
      case 1:
        return Warzone;
        break;
      case 2:
        return Dota;
        break;

      default:
        return Warzone;
        break;
    }
  };

  return (
    <div className="SoloGame">
      <Head />
      <header>
        <h2>Admin dashboard</h2>
      </header>
      <div className="secondHead">
        <div className="gameTitle">
          <img src={LogoGame(GameIdData)} alt="Dota" />
          <h3>Solo Score Tournament</h3>
        </div>
      </div>
      <div className="MainControl">
        <Tabs>
          <TabList
            onClick={(e) => setActive(e.target.value)}
            className="header"
          >
            <Tab value={1} className={active == 1 ? "activeTab tab" : "tab"}>
              Edit
            </Tab>
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              Result
            </Tab>
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              Prize Pool
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              Rules
            </Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">
              <EditSolo Id={Id} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <h3 className="Reload">
                <img src={Reload} alt="Reload" />
                Last update 10 minutes ago
              </h3>
              <ResultSolo Id={Id} />
              <h3 className="removePlayer">Removed Player</h3>
              <RecoverSolo />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <h3 className="Reload">
                <img src={Reload} alt="Reload" />
                Last update 10 minutes ago
              </h3>
              <PrizePoolSolo Id={Id} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <Rules />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default SoloGame;
