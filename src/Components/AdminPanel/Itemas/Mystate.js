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

const Mystate = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser, otherDataStatistic, GetOtherStatisticByUserId } =
    testContext;
  const { user, login, isAuthenticated, err } = authContext;
  const [StatisticGames, setStatisticGamesa] = useState([]);

  useEffect(() => {
    GetOtherStatisticByUserId(user.id);
  }, []);

  useEffectSkipFirst(() => {
    if (otherDataStatistic) {
      let Data = [];
      Data.push(otherDataStatistic);
      let newData = Data.map((item) => {
        let newItem = {};
        newItem.TournamentEntered = item.TournamentEntered;
        newItem.AvgFinishRank = item.AvgFinishRank.toFixed(2);
        newItem.KillCount = item.KillCount;
        newItem.TotalGamePlayed = item.TotalGamePlayed;
        newItem.TournamentPlayed = item.TournamentPlayed;
        newItem.TotalGameWon = item.TotalGameWon;

        return newItem;
      });
      setStatisticGamesa(newData);
    }
  }, [otherDataStatistic]);
  return (
    <>
      {StatisticGames.map((item, id) => (
        <div className="Mystate">
          <div className="title">
            <h3>My Statistics</h3>
            <h4>My current progress on Repeat</h4>
          </div>
          <div className="items">
            <h5>Avg.Finish Rank</h5>
            <h2>{item.AvgFinishRank}</h2>
          </div>
          <div className="items">
            <h5>Total Games Played</h5>
            <h2>{item.TotalGamePlayed}</h2>
          </div>
          <div className="items">
            <h5>Tournaments Played</h5>
            <h2>{item.TournamentPlayed}</h2>
          </div>
          <div className="items">
            <h5>Tournaments won</h5>
            <h2>{item.TotalGameWon}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mystate;
