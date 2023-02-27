import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Manage.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import Fifa from '../../Images/whiteFifa.png';
import EditTeam from "./Items/EditTeam";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import TeamSelect from "../SuperAdmin.js/Items/TeamSelect";
import Reload from "../../Images/Untitled-1.png";
import RulesTeaam from "./Items/RulesTeaam";
import PrizePoolTeam from "./Items/PrizePoolTeam";
import FifaChart from "../Manage/Items/Fifa/FifaChart1";
import FifaChartEntry from "../Manage/Items/Fifa/FifaChart";
import EditSolo from "./Items/EditSolo";
import InputFifa from "./Items/InputFifa";



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

const SoloFifa = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { SetSwitchUsers, GetTournamentById, tournamentByIdData } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [GameIdData, setGameIdData] = useState([]);
  let { Id } = useParams();
  useEffect(() => {
    console.log('Id', Id);
  }, [])
  useEffect(() => {
    GetTournamentById(Id);
  }, []);

  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      console.log("mohtava", tournamentByIdData);

      setGameIdData(tournamentByIdData.GameId);
      // LogoGame(tournamentByIdData.GameId);
    }
  }, [tournamentByIdData]);
  const [active, setActive] = useState(1);

  return (
    <div className="SoloFifa">
      <Head />
      <header>
        <h2>Admin dashboard</h2>
      </header>
      <div className="secondHead">
        <div className="gameTitle">

          <img src={Fifa} alt="Fifa" />
          <h3>TEAM Score Tournament</h3>
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
              Prize pool
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
              <InputFifa Id={Id} />

              {/* <FifaChartEntry Id={Id} /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <FifaChart Id={Id} />
              {/* <PrizePoolTeam /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <RulesTeaam />
            </div>
          </TabPanel>

        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default SoloFifa;
