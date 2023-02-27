import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";
import "../../Scss/Firstpage.scss";
import Coin from "../../Images/coins.png";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";

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

const BoxIvonet = ({ gameId }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;
  const navigate = useNavigate();
  const [IdGame, setIdGame] = useState(null);
  const {
    GetActiveTournaments,
    activeTournamentData,
    registerGameUserData,
    RegisterUserForGame,
    SetRegisterTournament,
    err,
  } = testContext;
  const [gameUserdata, setgameUserdata] = useState(null);
  const [GameId, setGameId] = useState(null);
  const [TournamentId, setTournamentId] = useState(null);
  const [showMessage, setShowMessage] = useState(null);

  useEffect(() => {
    setIdGame(gameId);
    GetActiveTournaments(gameId);
  }, []);

  useEffectSkipFirst(() => {
    if (gameId) {
      GetActiveTournaments(gameId);
    }
  }, [gameId]);

  useEffectSkipFirst(() => {
    if (registerGameUserData) {
      console.log("registerdata", registerGameUserData);
      if (registerGameUserData.userError) {
        Swal.fire(
          "you dont have userId",
          "you must Add your Game id in My profile page",
          "warning"
        );
        SetRegisterTournament(null);
      } else if (registerGameUserData.registeredError) {
        Swal.fire({ title: "your user has been registered", icon: "warning" });
        SetRegisterTournament(null);
      } else {
        setShowMessage(true);
        SetRegisterTournament(null);
      }
    }
  }, [registerGameUserData]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "your tournment has been added",
        timer: 2000,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  const SendInfo = (id) => {
    let gameData = {};
    gameData.GameId = gameId;
    gameData.TournamentId = parseInt(id);

    RegisterUserForGame(gameData);
  };

  const FreeCost = (value) => {
    if (value == 0 || !value) {
      return "Free";
    } else {
      return value;
    }
  };

  const navigateToSpecificPage = (itemData, ModeId) => {
    if (ModeId == 1) {
      navigate("/Results/" + itemData.id);
    } else if (ModeId > 1) {
      navigate("/ResultsTeam/" + itemData.id);
    }
  };

  return (
    <div className="ItemMatch">
      {activeTournamentData
        ? activeTournamentData.map((item) => (
          <div id="BoxIvonet" key={item.id}>
            <div className="titleIvonet">
              <h4>{item.Title}</h4>
            </div>
            <div className="itemMatch">
              <label>
                {" "}
                {item.StartDate} - {item.EndDate}
              </label>
            </div>
            <div className="itemMatch">
              <label>PRIZE</label>
              <label className="primary">{item.Prize}$</label>
            </div>
            <div className="itemMatch">
              <label>SCORING</label>
              <label className="primary">BEST OF {item.Winning} GAME</label>
            </div>
            <div className="itemMatch">
              <label>DIVISIONS</label>
              <label className="primary">{item.KDLimit}</label>
            </div>
            <div className="itemMatch">
              <div className="priceCoin">
                <div className="coinImg">
                  <img src={Coin} alt="Coin" />
                </div>
                <label>
                  {item.EntryFee ? item.EntryFee : FreeCost(item.EntryFee)}
                </label>
              </div>
              {user ? (
                <button
                  onClick={(e) => {
                    navigateToSpecificPage(item, item.ModeId);
                    // console.log("ModeId:", item.ModeId);
                  }}
                >
                  REGISTER
                </button>
              ) : (
                <NavLink to="/Login">
                  <button> REGISTER</button>
                </NavLink>
              )}
            </div>
          </div>
        ))
        : null}
    </div>
  );
};

export default BoxIvonet;
