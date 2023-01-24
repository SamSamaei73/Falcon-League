import React, { useEffect, useRef, useContext, useState } from "react";
import Coin from '../../../Images/coins.png';
import '../../../Scss/Admins.scss';
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";

const GameScore = ({NameGame , Trophi , Gun ,GameImg , NumColor}) => {
    const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err } = authContext;
  return (
    <div className='GameScore'>
        <div className={GameImg}>
            <div className='Username'>
                {user ? (<h4>{user.Username}</h4>) : null}
                <h6>My <span className='primaryText'>{NameGame}</span> Stastistics</h6>
            </div>
            
        </div>
        <div className='item'>
            <div className='photoIcon'>
                <img src={Trophi} alt="trophi"/>
            </div>
            <h4>Tournaments<br/>Entered</h4>
            <h1 className={NumColor}>0</h1>
        </div>
        <div className='item'>
            <div className='photoIcon'>
                <img src={Gun} alt="trophi"/>
            </div>
            <h4>Kills Per Game<br/>(Average)</h4>
            <h1 className={NumColor}>0</h1>
        </div>
        <div className='item'>
            <div className='photoIcon'>
                <img src={Coin} alt="trophi"/>
            </div>
            <h4>Earnings<br/>(Per tournament)</h4>
            <h1 className={NumColor}>0</h1>
        </div>
    </div>
  )
}

export default GameScore