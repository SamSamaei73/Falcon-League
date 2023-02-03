import React, { useContext, useRef, useEffect, useState } from "react";
import Coin from "../../../Images/coins.png";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import Discord from '../../../Images/22.png';

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

const OverView = ({ Id }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;

  const [IdGame, setIdGame] = useState(null);
  const {
    GetActiveTournaments,
    activeTournamentData,
    registerGameUserData,
    RegisterUserForGame,
    SetRegisterTournament,
    GetTournamentById,
    tournamentByIdData,
    err,
  } = testContext;
  const [GameId, setGameId] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [TournamentData, setTournamentData] = useState([]);

  useEffect(() => {
    setIdGame(Id);
    GetTournamentById(Id);
  }, []);

  const SendInfo = (id) => {
    let gameData = {};
    gameData.GameId = TournamentData[0].GameId;
    gameData.TournamentId = parseInt(id);

    RegisterUserForGame(gameData);
    // console.log("Test", gameData);
  };

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
        Swal.fire({ title: "your KD is lower than the tournament", icon: "warning" });
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

  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      let Data = [];
      Data.push(tournamentByIdData);
      let newData = Data.map((item) => {
        let newItem = {};
        newItem.Title = item.Title;
        newItem.id = item.id;
        newItem.StartDate = item.StartDate;
        newItem.EndDate = item.EndDate;
        newItem.Prize = item.Prize;
        newItem.EntryFee = item.EntryFee;
        newItem.Minutes = item.Minutes;
        newItem.About = item.About;
        newItem.GameId = item.GameId;
        newItem.ModeId = GameMode(item.ModeId);

        return newItem;
      });
      setTournamentData(newData);
    }
  }, [tournamentByIdData]);

  const GameMode = (id) => {
    switch (id) {
      case 1:
        return "SOLO";
        break;
      case 2:
        return "Team";
        break;

      default:
        break;
    }
  };
  return (
    <div className="OverView">
      <div className="boxDetailes">
        <h3>Tournament Details</h3>
        {TournamentData.map((item, id) => (
          <table key={item.id}>
            <tr>
              <th>
                <div className="box">
                  <h5>Mode</h5>
                  <h5>{item.ModeId}</h5>
                </div>
              </th>
              <th>
                <div className="box">
                  <h5>Date</h5>
                  <h5>
                    {item.StartDate} - {item.EndDate}
                  </h5>
                </div>
              </th>
              <th>
                <div className="box">
                  <h5>Entry Fee</h5>
                  <h5>
                    {item.EntryFee} <img src={Coin} alt="coin" />
                  </h5>
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div className="box">
                  <h5>Duration (Per Hour)</h5>
                  <h5>{item.Minutes}</h5>
                </div>
              </td>
              <td>
                <div className="box">
                  <h5 className="prize">Prize</h5>
                  <h5 className="prize">{item.Prize} $</h5>
                </div>
              </td>
              <td>
                <div className="box">
                  <h5></h5>
                  <h5></h5>
                </div>
              </td>
            </tr>
          </table>
        ))}
      </div>
      {TournamentData.map((item) => (
        <button
          className="btnJoin"
          id={item.id}
          onClick={(e) => {
            SendInfo(e.target.id);
          }}
        >
          JOIN TOURNAMENT
        </button>
      ))}
      <h5 className="note">Note</h5>
      <div className="boxNote">
        {TournamentData.map((item, id) => (
          <textarea
            value={item.About}
            name=""
            id=""
            cols="30"
            rows="10"
            readOnly
          ></textarea>
        ))}
        <button className="BtnDis">JOIN FLC DISCORD <img src={Discord} alt="DISCORD"/></button>
      </div>
    </div>
  );
};

export default OverView;
