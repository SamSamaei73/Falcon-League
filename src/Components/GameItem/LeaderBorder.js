import React from "react";
import TopPlayer from "./TopPlayer";
import Allplayer from "./Allplayer";

const LeaderBorder = ({ Color , colorGold }) => {
  return (
    <div id="LeaderBorder">
      <div className="title">
        <h1 style={Color}>LEADER BOARDS</h1>
      </div>
      <h2 style={Color}>Top 3</h2>
      <div className="top3">
        <TopPlayer />
        <TopPlayer
          Top={{
            backgroundImage: "linear-gradient(to right, #E7C779, #bea648)",
            color: "#fff",
          }}
          btn={{ color: "black", backgroundColor: "#fff" }}
        />
        <TopPlayer />
      </div>
      <h2 style={Color}>All Players</h2>
      <div className="Players">
        <div className="title" style={Color}>
            <p style={{width:"30%", textAlign:'left', paddingLeft:'2rem'}}>User</p>
            <p style={{width:"10%"}}>KD</p>
            <p style={{width:"10%"}}>WIN</p>
            <p style={{width:"10%"}}></p>
            <p style={{width:"15%"}}>Location</p>
            <p style={{width:"25%",textAlign:"right",paddingRight:'3rem'}}>PROFILE</p>
        </div>
        <Allplayer colorGold={colorGold} />
        <Allplayer  colorGold={colorGold}/>
        <Allplayer  colorGold={colorGold}/>
     

      </div>
    </div>
  );
};

export default LeaderBorder;
