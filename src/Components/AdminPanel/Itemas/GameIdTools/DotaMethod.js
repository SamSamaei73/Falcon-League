import React, { useContext, useRef, useEffect, useState } from "react";
import Battel from "../../../../Images/battle.png";
import PS4 from "../../../../Images/ps4.png";
import Xbox from "../../../../Images/xbox.png";
import Activision from "../../../../Images/4_5969572446255189332.png";
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

const DotaMethod = ({ logo, Name }) => {
  const testContext = useContext(TestContext);

  const { ShowGameItem, usernameGameData, SetUsername, CheckUserExist, err } =
    testContext;
 
  const [UserNameActivision, setUserNameActivision] = useState("");
  const [Loading, setLoading] = useState(false);

  const createDotaGame = (type, GameId, username) => {
    let newItem = {};
    newItem.type = type;
    newItem.username = username;
    newItem.GameId = GameId;


    if (username.length > 0) {
      CheckUserExist(newItem);
      SetUsername(username);
      setLoading(true);
    } else {
      console.log("idfa", username);
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
        <div className="Logo2">
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
        <h3>Add your Dota2 Id</h3>
        <div className="inputStyle">
          <div className="image">
            {/* <img className="activision" src={Activision} alt="Activision" /> */}
          </div>
          <input
            value={UserNameActivision}
            onChange={(e) => {
              setUserNameActivision(e.target.value);
            }}
            type="text"
            placeholder="DOTA 2 ID"
          />
          <div
            onClick={(e) => { createDotaGame(2, ShowGameItem, UserNameActivision); }
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

export default DotaMethod;
