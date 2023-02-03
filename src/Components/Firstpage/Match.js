import React, { useEffect, useRef, useContext, useState } from "react";
import '../../Scss/Firstpage.scss';
import BoxIvonet from './BoxIvonet';
import WZon from '../../Images/wz_logo.png';
import Valorant from '../../Images/valorant.png';
import Apex from '../../Images/Apex.png';
import Dota from '../../Images/Dota-2-Logo.png';
import Fifa from '../../Images/Easports_fifa_logo.png';
import Captain from '../../Images/CPT.PRICE.png';
import { NavLink } from "react-router-dom";
import TestContext from "../../Context/testContext";







const Match = () => {



  const [SelectGame , setSelectGame]= useState(1)
  return (
    <div id='Match'>
      <div className="titleMatch">
        <h1>ACTIVE TOURNAMENTS</h1>
      </div>
      <div className="mainMatch">
        <div className="logoGame">
          <div className={SelectGame==1 ? " activeGame" : "game"} onClick={(e)=>setSelectGame(1)}>
            <img  src={WZon} alt="WZon" />
          </div>
          <div className={SelectGame==5 ? " activeGame" : "game"}  onClick={(e)=>setSelectGame(5)}>
            <img  src={Valorant} alt="Valorant" />
          </div>
          <div className={SelectGame==4 ? " activeGame" : "game"}  onClick={(e)=>setSelectGame(4)}>
            <img  src={Apex} alt="Apex" />
          </div>
          <div className={SelectGame==2 ? " activeGame" : "game"} onClick={(e)=>setSelectGame(2)}>
            <img src={Dota} alt="Dota" />
          </div>
          <div className={SelectGame==3 ? " activeGame" : "game"} onClick={(e)=>setSelectGame(3)}>
            <img  src={Fifa} alt="Fifa" />
          </div>
        </div>
        <div className="ItemMatch">
          <BoxIvonet gameId={SelectGame}/>
        </div>
        <div className="GameCaptain">
          <img src={Captain} alt="Captain"/>
        </div>
      </div>
    </div>
  )
}

export default Match