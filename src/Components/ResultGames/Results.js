import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Results.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Warzone from "../../Images/icon-wz-white.png";
import FifaLogo from "../../Images/fifiLogo.png";
import OverView from "./Items/OverView";
import ResultScore from "./Items/ResultScore";
import Prize from "./Items/Prize";
import RulsResults from "./Items/RulsResults";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import FifaResult from "./Items/FifaResult";
import PrizePoolSolo from "../Manage/Items/PrizePoolSolo";
import FifaChart from "../Manage/Items/Fifa/FifaChart1";

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

const Results = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { SetSwitchUsers, GetTournamentById, tournamentByIdData } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [active, setActive] = useState(1);
  const [TournamentData, setTournamentData] = useState([]);
  const [IdGame, setIdGame] = useState(null);

  let { Id } = useParams();
  useEffect(() => {
    console.log("Id", Id);
  }, []);

  useEffect(() => {
    GetTournamentById(Id);
  }, []);

  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      let Data = [];
      Data.push(tournamentByIdData);
      let newData = Data.map((item) => {
        let newItem = {};
        newItem.Title = item.Title;
        newItem.id = item.id;
        newItem.StartDate = item.StartDate;
        newItem.EndDate = item.EndDate;
        newItem.Prize = item.Prize;
        newItem.EntryFee = item.EntryFee;
        newItem.Minutes = item.Minutes;
        newItem.About = item.About;
        newItem.GameId = item.GameId;
        newItem.GameId = setIdGame(item.GameId);

        return newItem;
      });
      setTournamentData(newData);
      console.log("esmbax", newData);
    }
  }, [tournamentByIdData]);

  return (
    <div className="Results">
      <Head />
      <header>{user ? <h2>{user.Username}</h2> : null} </header>
      <div className="secondHead">
        <div className="HeaderName">
          {IdGame == 1 ? <img src={Warzone} alt="Game Icon" /> : null}
          {IdGame == 3 ? <img src={FifaLogo} alt="Game Icon" /> : null}

          {TournamentData.map((item) => (
            <h2>{item.Title}</h2>
          ))}
        </div>
      </div>
      <div className="MainControl">
        <Tabs>
          <TabList
            onClick={(e) => setActive(e.target.value)}
            className="header"
          >
            <Tab value={1} className={active == 1 ? "activeTab tab" : "tab"}>
              OVERVIEW
            </Tab>
            {IdGame != 3 ? (
              <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
                RESULTS
              </Tab>
            ) : null}
            {IdGame == 3 ? (
              <Tab value={5} className={active == 5 ? "activeTab tab" : "tab"}>
                 RESULTS
              </Tab>
            ) : null}
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              PRIZE POOL
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              RULES
            </Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">
              <OverView Id={Id} />
              <ResultScore Id={Id} />
            </div>
          </TabPanel>
          {IdGame != 3 ? (
            <TabPanel>
              <div className="Creater">
                <ResultScore Id={Id} />
              </div>
            </TabPanel>
          ) : null}
          {IdGame == 3 ? (
            <TabPanel>
              <div className="Creater">
                <FifaChart Id={Id} />
              </div>
            </TabPanel>
          ) : null}

          <TabPanel>
            <div className="Creater">
              <PrizePoolSolo Id={Id} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <RulsResults />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
