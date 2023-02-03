import React, { useContext, useRef, useEffect, useState } from "react";
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
const ResultScore = ({Id}) => {
    const testContext = useContext(TestContext);
    const authContext = useContext(AuthContext);
    const { GetRankAndPointOfTournament, rankAndPoinOfTournaments, err } =
      testContext;
    const [TournamentScore, setTournamentScore] = useState([]);
    const [TournId, setTornId] = useState({});
  
    useEffect(() => {
      GetRankAndPointOfTournament(Id);
    }, []);

    useEffectSkipFirst(() => {
        if (rankAndPoinOfTournaments) {
          let newData = rankAndPoinOfTournaments.map((item) => {
            let newItem = {};
            newItem.id = item.id;
            newItem.FinalPoint = item.FinalPoint;
            newItem.User = item.User;
            newItem.TournamentId = item.TournamentId;
            setTornId(item.TournamentId);
    
            return newItem;
          });
          setTournamentScore(newData);
        }
      }, [rankAndPoinOfTournaments]);

  return (
    <div className='ResultScore'>
    <div className="title">
        <h4>Placement</h4>
        <h4>ID</h4>
        <h4></h4>
        <h4>Score</h4>
        <h4>View Details</h4>
    </div>
    {TournamentScore.map((item, id) => (
        <div className="Row">
          <h4>{id + 1}</h4>
          <h4>{item.User}</h4>
          <h4></h4>
          <h4>{item.FinalPoint}</h4>
          <h4>View Details</h4>
        </div>
      ))}

    <button>See the full Results</button>
</div>
  )
}

export default ResultScore