import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/SuperAdmin.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateTournamentAd from "./Items/CreateTournamentAd";
import Footer from "../Firstpage/Footer.js";
import ActiveTpurnament from "./Items/ActiveTpurnament";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import PreviousTournament from "./Items/PreviousTournament";
import UserInfo from "./Items/UserInfo";
import PersonalInfo from "./Items/PersonalInfo";
import ActiveResult from "./Items/ActiveResult";

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

const AdminGame = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { SetSwitchUsers } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [active, setActive] = useState(1);

  return (
    <div className="AdminGame">
      <Head />
      <header>
        <h2>Admin dashboard</h2>
      </header>
      <div className="secondHead">{user ? <h1>{user.Username}</h1> : null}</div>
      <div className="MainControl">
        <Tabs>
          <TabList
            onClick={(e) => setActive(e.target.value)}
            className="header"
          >
            <Tab value={1} className={active == 1 ? "activeTab tab" : "tab"}>
              Tournaments
            </Tab>
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              Users
            </Tab>
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              Financial
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              Tickets
            </Tab>
            <Tab value={5} className={active == 5 ? "activeTab tab" : "tab"}>
              Stats
            </Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">
              <div className="HeadCreateMain">Create a new Tournament</div>

              <CreateTournamentAd />
              <ActiveTpurnament />
              <PreviousTournament />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <UserInfo />
              <PersonalInfo />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              {/* <ActiveResult /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              {/* <ResultFlowchart /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminGame;
