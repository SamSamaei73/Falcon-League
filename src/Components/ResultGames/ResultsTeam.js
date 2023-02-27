import React, { useEffect, useRef, useContext, useState } from "react";
import "../../Scss/Results.scss";
import Head from "../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../Firstpage/Footer.js";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Warzone from "../../Images/icon-wz-white.png";
import Prize from "./Items/Prize";
import RulsResults from "./Items/RulsResults";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import ConditionGame from "./ItemsTeam/ConditionGame";
import TeamResultsChart from "./ItemsTeam/TeamResultsChart";
import BoxTeam from "./ItemsTeam/BoxTeam";

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
  const {
    SetSwitchUsers,
    usersOfSpecificTeamData,
    tournamentByIdData,
    GetTournamentById,
    GetAllTeamUsers,
    GetUsersOfSpecificTeam,
  } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(null);
  const [TournamentData, setTournamentData] = useState([]);


  let { Id } = useParams();
  useEffect(() => {
    console.log("Id", Id);
    setShow(true);
    setShow(false);
    GetTournamentById(Id);
    GetAllTeamUsers(Id);
    GetUsersOfSpecificTeam(Id);
    // console.log("tournamentByIdData:", tournamentByIdData);
  }, []);
  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      setShow(false);
      setShow(true);
    }
  }, [tournamentByIdData]);
  useEffectSkipFirst(() => {
    if (usersOfSpecificTeamData) {
      setShow(false);
      setShow(true);
    }
  }, [usersOfSpecificTeamData]);



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

        return newItem;
      });
      setTournamentData(newData);
    }
  }, [tournamentByIdData]);


  return (
    <div className="Results">
      <Head />
      <header>{user ? <h2>{user.Username}</h2> : null} </header>
      <div className="secondHead">
        <div className="HeaderName">
          <img src={Warzone} alt="Game Icon" />
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
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              RESULTS
            </Tab>
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              TEAM
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              RULES
            </Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">{show && <ConditionGame Id={Id} />}</div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <TeamResultsChart />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <BoxTeam Id={Id} />
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
