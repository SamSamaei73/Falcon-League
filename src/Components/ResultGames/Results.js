import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Results.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Warzone from '../../Images/icon-wz-white.png';
import OverView from "./Items/OverView";
import ResultScore from './Items/ResultScore';
import Prize from "./Items/Prize";
import RulsResults from "./Items/RulsResults";
import { useLocation, useParams, useNavigate } from "react-router-dom";


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
  const { SetSwitchUsers } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [active, setActive] = useState(1);

  let { Id } = useParams();
  useEffect(() => {
    console.log("Id", Id);
  }, []);

  return (
    <div className="Results">
      <Head />
      <header>{user ? <h2>{user.Username}</h2> : null} </header>
      <div className="secondHead">
        <div className="HeaderName">
        <img src={Warzone} alt="Game Icon" />
        <h2>Kill race SOLO Tournament</h2>
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
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              RESULTS
            </Tab>
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              PRIZE POOL
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              RULES
            </Tab>
           
          </TabList>

          <TabPanel>
            <div className="Creater">
                <OverView Id={Id}/>
                <ResultScore Id={Id}/>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater"></div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
             <Prize/>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <RulsResults/>
            </div>
          </TabPanel>
         
        </Tabs>

      </div>
      <Footer />
    </div>
  );
};

export default Results;
