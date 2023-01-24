import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import Trophi from "../../../Images/tournament.png";
import PhotoGame from "../../../Images/icon-wz-white.png";
import Valorant from "../../../Images/valorant.png";
import Apex from "../../../Images/Apex.png";
import Dota from "../../../Images/dotalogo.png";
import Fifa from "../../../Images/whiteFifa.png";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

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

const ActiveTour = () => {
  const Call = "Call of Duty:Warzone";
  const Dota2 = "Dota 2";
  const FiFa23 = "FIFA 23";
  const ApexN = "Apex";
  const ValorantN = "Valorant";

  const testContext = useContext(TestContext);
  const {
    GetRegisterTournment,
    registerForThisGameData,
    startTournmentData,
    StartTournment,
    SetStartTournament,
    err,
  } = testContext;
  const [UserOfGameId, setUserOfGameId] = useState(null);
  const [TournamentId, setTournamentId] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [IdGame, setIdGame] = useState(null);

  useEffect(() => {
    setIdGame(TournamentId);
    GetRegisterTournment();
  }, []);

  useEffectSkipFirst(() => {
    if (startTournmentData) {
      GetRegisterTournment();
    }
  }, [startTournmentData]);

  const SendInfo = (tourandgamid) => {
    let data = tourandgamid.split("-");

    let gameData = {};
    gameData.TournamentId = parseInt(data[0]);
    gameData.UserOfGameId = parseInt(data[1]);

    // console.log("start", gameData);

    StartTournment(gameData);
  };

  useEffectSkipFirst(() => {
    if (startTournmentData) {
      if (startTournmentData.userError) {
        Swal.fire("Somthing is wrong", "Please check your info", "warning");
      } else {
        setShowMessage(true);
        SetStartTournament(null);
      }
    }
  }, [startTournmentData]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "your tournament has been started",
        timer: 2000,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  const NamePlatformById = (id) => {
    switch (id) {
      case 1:
        return "Pc";
        break;
      case 2:
        return "Playstation";
        break;
      case 3:
        return "Xbox";
        break;

      default:
        break;
    }
  };

  const CountTime = () => {};

  return (
    <div className="ActiveTour">
      <div className="title">
        <h4>Active Tournaments</h4>
        <h6>Tournaments i'm playing now</h6>
      </div>

      {registerForThisGameData ? (
        registerForThisGameData.length > 0 ? (
          registerForThisGameData.map((item) => (
            <div className="AcceptedTour">
              <div className="photoGame">
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
                  alt="game"
                />
              </div>
              <div className="itemGame">
                <h4>{item.Title}</h4>
                <h6>
                  <span className="spanStyle">{item.TournamentId}</span> |{" "}
                  <span className="spanStyle">
                    {" "}
                    {NamePlatformById(item.ModeId)}
                  </span>
                </h6>
              </div>
              <div className="btnStart">
                {!item.IsStarted ? (
                  <button
                    id={item.TournamentId + "-" + item.UserOfGameId}
                    onClick={(e) => {
                      SendInfo(e.target.id);
                    }}
                  >
                    START
                  </button>
                ) : (
                  <>
                    <h4 className="Start">STARTED</h4>
                    {/* <h4 className="remind">
                      <Countdown date={Date.now() + 10000000} /> Reminded
                    </h4>{" "} */}
                  </>
                )}
                {/* <h4 className="Start">STARTED</h4>
            <h4 className="remind">110 Min Reminded</h4> */}
              </div>
              <div className="prize">
                <h4>Prize Pool</h4>
                <h4>{item.Prize}$</h4>
              </div>
              <div className="prize">
                <h4>End Time</h4>
                <h4>{item.EndDate}</h4>
              </div>
            </div>
          ))
        ) : null
      ) : (
        <div className="AboutInfo">
          <img src={Trophi} alt="" />
          <h4>No Current Tournaments</h4>
          <h6>You Currently dont't have any Tournaments</h6>
        </div>
      )}
    </div>
  );
};

export default ActiveTour;
