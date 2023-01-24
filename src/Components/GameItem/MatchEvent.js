import React from "react";
import BoxIvonet from "../Firstpage/BoxIvonet";

const MatchEvent = ({ Color, active, custome, PhotoGame , photoStyle , gameId}) => {
  return (
    <div id="MatchEvent">
      <div className="Title">
        <h1 style={Color}>TOURNMENTS</h1>
      </div>
      <div className="TabGame">
        <div className="Activity" style={active}>
          Active TOURNMENTS
        </div>
        <div className="Activity" style={custome}>
          Custome TOURNMENTS
        </div>
      </div>
      <div className="MatchStyle">
        <div className="mainMatch">
          <div className="ItemMatch">
            <BoxIvonet gameId={gameId}/>
          </div>
          <div className="GameCaptain" style={photoStyle} >
            <img src={PhotoGame} alt="Captain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchEvent;
