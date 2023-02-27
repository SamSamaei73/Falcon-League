import React, { useEffect, useRef, useContext, useState } from "react";
import Coin from "../../../Images/coins.png";
import "../../../Scss/Admins.scss";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";

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

const GameScore = ({ NameGame, Trophi, Gun, GameImg, NumColor ,GameId,data}) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser, otherDataStatistic, GetOtherStatisticByUserId } =
    testContext;
  const { user, login, isAuthenticated, err } = authContext;
  const [StatisticGames, setStatisticGamesa] = useState([]);

  useEffect(() => {
    // GetOtherStatisticByUserId(user.id ,GameId );
    getOtherStaticsByuserIdandGameId();
  }, []);

  useEffectSkipFirst(() => {
    getOtherStaticsByuserIdandGameId();

   
  }, [otherDataStatistic]);
  function getOtherStaticsByuserIdandGameId() {
    if (otherDataStatistic) {
      console.log('otherstatics:', otherDataStatistic);
      let Data = [];
      Data.push(otherDataStatistic);
      let newData = Data.map((item) => {
        let newItem = {};
        newItem.TournamentEntered = item.TournamentEntered;
        newItem.AvgFinishRank = item.AvgFinishRank;
        newItem.KillCount = item.KillCount;
        newItem.TotalGamePlayed = item.TotalGamePlayed;
        newItem.TournamentPlayed = item.TournamentPlayed;
        newItem.TotalGameWon = item.TotalGameWon;
        newItem.Earning = item.Earning;

        return newItem;
      });
      setStatisticGamesa(newData);
    }
  }
  return (
    <div className="GameScore">
      <div className={GameImg}>
        <div className="Username">
          {user ? <h4>{user.Username}</h4> : null}
          <h6>
            My <span className="primaryText">{NameGame}</span> Stastistics
          </h6>
        </div>
      </div>
      {StatisticGames.map((item, id) => (

      <>
        <div className="item">
          <div className="photoIcon">
            <img src={Trophi} alt="trophi" />
          </div>
          <h4>
            Tournaments
            <br />
            Entered
          </h4>
          <h1 className={NumColor}>{item.TournamentPlayed}</h1>
        </div>
        <div className="item">
          <div className="photoIcon">
            <img src={Gun} alt="trophi" />
          </div>
          <h4>
            Kills Per Game
            <br />
            (Average)
          </h4>
          <h1 className={NumColor}>{item.KillCount ? item.KillCount.toFixed(1) : 0}</h1>
        </div>
        <div className="item">
          <div className="photoIcon">
            <img src={Coin} alt="trophi" />
          </div>
          <h4>
            Earnings
            <br />
            (Per tournament)
          </h4>
          <h1 className={NumColor}>{item.Earning ? item.Earning.toFixed(1) : 0} $</h1>
        </div>
      </>
      ))}
    </div>
  );
};

export default GameScore;
