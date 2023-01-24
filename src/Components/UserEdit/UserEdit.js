import React, { useEffect, useRef, useContext, useState } from "react";
import '../../Scss/EditUser.scss';
import Head from '../Items/HeaderGame';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from '../Firstpage/Footer.js';
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Setiings from "./Items/Setiings";
import ChangePass from "./Items/ChangePass";
import Location from "./Items/Location";
import Transactions from "./Items/Transactions";
import GameId from "./Items/GameId";
import NewTicket from "./Items/NewTicket";
import OpenTicket from "./Items/OpenTicket";
import CloseTicket from "./Items/CloseTicket";

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

const UserEdit = () => {
    const testContext = useContext(TestContext);
    const authContext = useContext(AuthContext);
    const { CreateItemInUser } = testContext;
    const { user, login, isAuthenticated, err, logout } = authContext;
      const [active , setActive]=useState(1);

  return (
    <div className='UserEdit'>
         <Head/>
        <header>
            <h2>Manage your Account</h2>
            <h5>Manage your Personal Information, keep track of your purchases and transaction history, connect Social Media and Game Accounts</h5>
        </header>
        <div className='secondHead'>
        {user ? ( <h1>{user.Username}</h1> ):null }
        </div>
        <div className="MainControl">
        <Tabs>
          <TabList onClick={(e)=>setActive(e.target.value)} className='header'>
          <Tab value={1} className={active ==1 ? "activeTab tab": "tab"}>Account Settings</Tab>
            <Tab value={2} className={active ==2 ? "activeTab tab": "tab"}>Transactions</Tab>
            <Tab value={3} className={active ==3 ? "activeTab tab": "tab"}>Game IDs</Tab>
            <Tab value={4} className={active ==4 ? "activeTab tab": "tab"}>Tickets</Tab>
            <Tab value={5} className={active ==5 ? "activeTab tab": "tab"}>Notification</Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">
               <Setiings/>
               <ChangePass/>
               <Location/>
            </div>
          </TabPanel>
          <TabPanel>
             <div className="Creater">
            <Transactions/>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="Creater">
            <GameId/>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="Creater">
            <NewTicket/>
            <OpenTicket/>
            <CloseTicket/>
          </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        </div>
        <Footer/>
    </div>
  )
}

export default UserEdit