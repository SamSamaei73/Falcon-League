import React from "react";
import PhotoCoin from "../../../Images/coins.png";
import Dollor from "../../../Images/dollar.png";

const Earning = () => {
  return (
    <div className="Earning">
      <div className="title">
        <h3>Earnings</h3>
        <h4>My current earnings on Falcon League</h4>
      </div>
      <div className="item">
        <div className="imgCoin coinStyle">
          <img src={PhotoCoin} alt="PhotoGame" />
        </div>
        <div className="info">
          <div className="nameInfo">
            <h4>20</h4>
          </div>
          <div className="country">
            <h4>Total Coin Earned</h4>
          </div>
        </div>
      </div>
      <div className="avarage">
        <h5>Average Entry Fee</h5>
        <div className="Coin">
          <h3>5</h3>
          <div className="CoinPhoto">
            <img src={PhotoCoin} alt="PhotoCoin" />
          </div>
        </div>
      </div>
      <div className="item">
        <div className="imgCoin">
          <img src={Dollor} alt="PhotoGame" />
        </div>
        <div className="info">
          <div className="nameInfo">
            <h4>20$</h4>
          </div>
          <div className="country">
            <h4>Total Cash Earned</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
