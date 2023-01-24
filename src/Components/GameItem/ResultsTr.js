import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../Context/testContext";
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

const ResultsTr = () => {
  const navigate = useNavigate();
  useEffect(() => {
    GetPreviousTournaments(0);
  }, []);
  const testContext = useContext(TestContext);
  const {
    createTournamentData,
    CreateTournament,
    GetActiveTournaments,
    previousTournamentData,
    GetPreviousTournaments,
    deletedTournamentData,
    DeleteTournament,
    err,
  } = testContext;


  const NameGameById =(id)=>{
    switch (id) {
      case 1:
        return "WARZON"
        break;
      case 2:
        return "DOTA2"
        break;
    
      default:
        break;
    }
  }

  const FreeCost =(value)=>{
    if(value == 0 || !value){
     return "Free"
    }else {
     return value;
    }
    
   }

   const navigateToSpecificPage = (itemData, ModeId,tournamentId) => {
    if (ModeId == 1) {
      navigate("/SoloGame/" + itemData.id);
    } else if (ModeId == 2) {
      navigate("/TeamGame/" + itemData.id);
    }
  };
  
  return (
    <div className='ResultsTr'>
        <div className="HeadCreate">
        <h4>Previous Tournament</h4>
      </div>
      {previousTournamentData
        ? previousTournamentData.map((item) => (
            <div  className="ActiveAdd">
              <div className="boxAdd">
                <h6>{item.Title}</h6>
                <h6 className="larghx">
                {NameGameById(item.GameId)}
                </h6>
                <h6 className="largh">{item.StartDate} - {item.EndDate}</h6>
                <h6>{item.Prize} $</h6>
                <h6>{item.KDLimit} KD</h6>
                <h6>{item.EntryFee ? item.EntryFee : FreeCost(item.EntryFee)} FLC</h6>
                <div className="buttonsDiv">
                <button onClick={(e) => {
                      navigateToSpecificPage(item, item.ModeId , item.id);
                      
                      console.log("ModeId:", item.id);
                    }}>See result</button>
                 
                </div>
              </div>
            </div>
         ))
         : null}
    </div>
  )
}

export default ResultsTr