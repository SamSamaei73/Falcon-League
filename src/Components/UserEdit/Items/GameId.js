import React, { useContext, useRef, useEffect, useState } from "react";
import Wz from "../../../Images/icon-wz-white.png";
import Recycle from "../../../Images/delete.png";
import Plus from "../../../Images/plus.png";
import TestContext from "../../../Context/testContext";
import PhotoGame from "../../../Images/icon-wz-white.png";
import Valorant from "../../../Images/valorant.png";
import Apex from "../../../Images/Apex.png";
import Dota from "../../../Images/dotalogo.png";
import Fifa from "../../../Images/whiteFifa.png";
import Popup from "reactjs-popup";
import SelectMethod from "../../AdminPanel/Itemas/GameIdTools/SelectMethod";
import WZon from "../../../Images/wz_logogold.png";
import AcceptMethod from "../../AdminPanel/Itemas/GameIdTools/AcceptMethod";
import FaildMethod from "../../AdminPanel/Itemas/GameIdTools/FaildMethod";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'



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

const GameId = () => {
  const Call = "Call of Duty:Warzone";
  const Dota2 = "Dota 2";
  const FiFa23 = "FIFA 23";
  const ApexN = "Apex";
  const ValorantN = "Valorant";
  const testContext = useContext(TestContext);
  const {
    ShowGameItem,
    SetShowGamelItems,
    checkUserData,
    SetGameIdDeletedAlert,
    gameIdInfoData,
    GetAllUserAccounts,
    DeleteAccountOfUser,
    deleteGameIdData,
    err,
  } = testContext;

  const [FlowState, setFlowState] = useState(1);
  const [ErrorId, setErrorId] = useState(null);
  const [UserAccunts, setEUserAccunts] = useState([]);
  const [showMessage, setShowMessage] = useState(null);


  useEffect(() => {
    GetAllUserAccounts();
  }, []);

  useEffectSkipFirst(() => {
    if (checkUserData) {
      console.log("check",checkUserData);
      setErrorId(0);
      setFlowState(3);
      GetAllUserAccounts();
    }
  }, [checkUserData]);

  useEffectSkipFirst(() => {
    if (err) {
      setErrorId(1);
      setFlowState(3);
    }
  }, [err]);

 

  useEffectSkipFirst(() => {
    if (deleteGameIdData) {
      {
        setShowMessage(true);
        SetGameIdDeletedAlert(null);
      GetAllUserAccounts();

      }
    }
  }, [deleteGameIdData]);


  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        text: " Your file has been deleted.",
        icon: "success",
      })
      setShowMessage(false);
    }
  }, [showMessage]);






  useEffectSkipFirst(() => {
    if (gameIdInfoData) {
      let newData = gameIdInfoData.map((item) => {
        let newItem = {};
        newItem.Id = item.Id;
        newItem.typedesc = item.typedesc;
        newItem.User = item.User;
        newItem.GameId = item.GameId;
        newItem.Country = item.Country;
        return newItem;
      });
      setEUserAccunts(newData);
    }
  }, [gameIdInfoData]);

  const sendDelete = (Id) => {
    
    let newItem = {};
    newItem.Id = Id;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
            
            DeleteAccountOfUser(newItem);
        }
      })
  };

  return (
    <div className="GameId">
      <div className="Title">
        <h3>Game IDs</h3>
        <h6>Game accounts l've connected</h6>
      </div>
      {UserAccunts.map((item) => (
        <div className="BoxTrans" key={item.Id}>
          <div className="GameInfo">
            <img
              src={
                item.GameId == 1
                  ? PhotoGame
                  : item.GameId == 2
                  ? Dota
                  : item.GameId == 3
                  ? Fifa
                  : item.GameId == 4
                  ? Valorant
                  : item.GameId == 5
                  ? Apex
                  : null
              }
              alt="Game"
            />
            <div className="infoText">
              <h5>{item.User}</h5>
              <h5>
                <span>{item.Country}</span> {item.typedesc}
              </h5>
            </div>
          </div>
          {item.Id ? (
            <div
              className="trash"
              onClick={(e) => {
                sendDelete(item.Id);
              }}
            >
              <img src={Recycle} alt="" />
            </div>
          ) : null}
        </div>
      ))}
      <div className="BoxTrans">
        <div className="GameInfo">
          <Popup
            trigger={
              <img
                className="Plus"
                src={Plus}
                alt="Game"
                onClick={(e) => setFlowState(1)}
              />
            }
            modal
          >
            {FlowState == 1 ? (
              <div className="addGameIdBox">
                <div className="headBoxId">
                  <h2>Game Account</h2>
                </div>
                <div className="noticeId">
                  <h5>
                    Please select the game that you want to connect. you can add
                    more than one account for each game title.
                  </h5>
                </div>
                <div className="boxSelectGame">
                  <div
                    onClick={(e) => {
                      setFlowState(2);
                      SetShowGamelItems(1);
                    }}
                    className="box"
                  >
                    <img src={WZon} alt="WZon" />
                  </div>
                  <div
                    onClick={(e) => {
                      SetShowGamelItems(4);
                    }}
                    className="box"
                  >
                    <img src={Valorant} alt="Valorant" />
                  </div>
                  <div
                    onClick={(e) => {
                      setFlowState(2);
                      SetShowGamelItems(5);
                    }}
                    className="box"
                  >
                    <img src={Apex} alt="Apex" />
                  </div>
                  <div
                    onClick={(e) => {
                      setFlowState(2);
                      SetShowGamelItems(2);
                    }}
                    className="box"
                  >
                    <img className="Dota" src={Dota} alt="Dota" />
                  </div>
                  <div onClick={(e) => SetShowGamelItems(3)} className="box">
                    <img src={Fifa} alt="Fifa" />
                  </div>
                </div>
              </div>
            ) : null}

            {FlowState == 2 ? (
              <>
                {ShowGameItem == 1 ? (
                  <SelectMethod logo={WZon} Name={Call} />
                ) : null}
                {ShowGameItem == 4 ? (
                  <SelectMethod logo={Valorant} Name={ValorantN} />
                ) : null}
                {ShowGameItem == 5 ? (
                  <SelectMethod logo={Apex} Name={ApexN} />
                ) : null}
                {ShowGameItem == 2 ? (
                  <SelectMethod logo={Dota} Name={Dota2} />
                ) : null}
                {ShowGameItem == 3 ? (
                  <SelectMethod logo={Fifa} Name={FiFa23} />
                ) : null}
              </>
            ) : null}
            {FlowState == 3 ? (
              <>
                {ErrorId == 0 ? <AcceptMethod logo={WZon} Name={Call} /> : null}
                {ErrorId == 1 ? <FaildMethod logo={WZon} Name={Call} /> : null}
              </>
            ) : null}
          </Popup>
          <div className="infoText">
            <h5>ADD ACCOUNT</h5>
            <h5>click here to add account</h5>
          </div>
        </div>
        <div className="trash"></div>
      </div>
    </div>
  );
};

export default GameId;
