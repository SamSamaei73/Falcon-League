import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Manage.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import Dota from '../../Images/dotalogo.png';
import EditTeam from "./Items/EditTeam";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import ResultFlowchart from "../SuperAdmin.js/Items/ResultFlowchart";
import TeamSelect from "../SuperAdmin.js/Items/TeamSelect";
import Reload from "../../Images/Untitled-1.png";
import RulesTeaam from "./Items/RulesTeaam";
import PrizePoolTeam from "./Items/PrizePoolTeam";


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
  let { Id } = useParams();
  useEffect(() => {
    console.log('Id', Id);
  }, [])
  const [active, setActive] = useState(1);

  return (
    <div className="SoloGame">
      <Head />
      <header>
        <h2>Admin dashboard</h2>
      </header>
      <div className="secondHead">
        <div className="gameTitle">

          <img src={Dota} alt="Dota" />
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
              <EditTeam Id={Id} />

            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
            <h3 className="Reload">
                <img src={Reload} alt="Reload" />
                Last update 10 minutes ago
              </h3>
              <TeamSelect/>
              <ResultFlowchart/>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <PrizePoolTeam/>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <RulesTeaam/>
            </div>
          </TabPanel>
          
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default SoloGame;
