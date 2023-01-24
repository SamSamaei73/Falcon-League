import React, { useContext, useRef, useEffect, useState } from "react";
import Battel from "../../../../Images/battle.png";
import PS4 from "../../../../Images/ps4.png";
import Xbox from "../../../../Images/xbox.png";
import TestContext from "../../../../Context/testContext";
import Spinner from "../../../../Images/Spinner.gif";

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

const SelectMethod = ({ logo, Name }) => {
  const testContext = useContext(TestContext);

  const { ShowGameItem, usernameGameData, SetUsername, CheckUserExist, err } =
    testContext;
  const [UserNameBattel, setUserNameBattel] = useState("");
  const [UserNamePs, setUserNamePs] = useState("");
  const [UserNameXbox, setUserNameXbox] = useState("");
  const [Loading, setLoading] = useState(false);

  const createUserNameforGame = (type, GameId, username) => {
    let newItem = {};
    newItem.type = type;
    newItem.username = username;  
    newItem.GameId = GameId;
    

    if (username.length > 0) {
      CheckUserExist(newItem);
      SetUsername(username);
      setLoading(true);
    }else {
      console.log("idfa" , username);
      setLoading(false);

    }
  };

  useEffectSkipFirst(() => {
    setLoading(false);
  }, [usernameGameData]);

  return (
    <div className="SelectMethod">
        <div className={Loading ? "spineer" : "spineerH"}>
        <img src={Spinner} alt="Spinner" />
      </div>
      <div className="headAndLogo">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Name">
          <h2>{Name}</h2>
          <h4>Connect your account</h4>
        </div>
      </div>
      <div className="navigation">
        <h5>
          <span className="select">Select</span> {">"} Services
        </h5>
      </div>
      <div className="addAccount">
        <h3>Select Login Method</h3>
        <div className="inputStyle">
          <div className="image">
            <img src={Battel} alt="" />
          </div>
          <input
            value={UserNameBattel}
            onChange={(e) => {
              setUserNameBattel(e.target.value);
            }}
            type="text"
            placeholder="Battle.net"
          />
          <div
            onClick={(e) =>
              {createUserNameforGame(1, ShowGameItem, UserNameBattel)}
            }
            className="image"
          >
            {">"}
          </div>
        </div>
        <div className="inputStyle">
          <div className="image">
            <img src={PS4} alt="" />
          </div>
          <input
            value={UserNamePs}
            onChange={(e) => {
              setUserNamePs(e.target.value);
            }}
            type="text"
            placeholder="PSN"
          />
          <div
            onClick={(e) => {createUserNameforGame(2, ShowGameItem, UserNamePs)}}
            className="image"
          >
            {">"}
          </div>
        </div>
        <div className="inputStyle">
          <div className="image">
            <img src={Xbox} alt="" />
          </div>
          <input
            value={UserNameXbox}
            onChange={(e) => {
              setUserNameXbox(e.target.value);
            }}
            type="text"
            placeholder="Xbox Live"
          />
          <div
            onClick={(e) =>
              {createUserNameforGame(3, ShowGameItem, UserNameXbox);}
            }
            className="image"
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMethod;
