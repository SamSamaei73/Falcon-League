import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
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
const PreviousTournament = () => {
  const navigate = useNavigate();
  
  const testContext = useContext(TestContext);
  const {
    createTournamentData,
    gameIdTabData,
    GetActiveTournaments,
    previousTournamentData,
    GetPreviousTournaments,
    deletedTournamentData,
    DeleteTournament,
    err,
  } = testContext;

  useEffect(() => {
    if (gameIdTabData) {
    GetPreviousTournaments(gameIdTabData);
    } else {
    GetPreviousTournaments(1);

    }
  }, []);

  useEffectSkipFirst(() => {
    if (gameIdTabData) {
      GetPreviousTournaments(gameIdTabData);
    }
  }, [gameIdTabData]);


  const delteItem = (itemId) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteTournament(itemId);
      }
    })

   
  };

  useEffectSkipFirst(() => {
    if (deletedTournamentData) {
      Swal.fire({
        text: " Your file has been deleted.",
        icon: "success",
      }).then((result) => {
        
      });
      GetPreviousTournaments();
    }
  }, [deletedTournamentData]);


  const NameGameById =(id)=>{
    switch (id) {
      case 1:
        return "WARZON"
        break;
      case 2:
        return "DOTA2"
        break;
      case 3:
        return "FIFA"
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
    <div className="ActiveTpurnament">
      <div className="HeadCreate">
        <h4>Previous Tournament</h4>
      </div>
      {previousTournamentData
        ? previousTournamentData.map((item) => (
            <div key={item.id} className="ActiveAdd">
              <h5>{item.Title}</h5>
              <div className="boxAdd">
                <h6>{NameGameById(item.GameId)}</h6>
                <h6 className="larghx">
                  {" "}
                  {item.StartDate} - {item.EndDate}
                </h6>
                <h6 className="largh">{item.KDLimit}</h6>
                <h6>{item.Prize}$</h6>
                <h6>{item.EntryFee ? item.EntryFee : FreeCost(item.EntryFee)} FLC</h6>
                <div className="buttonsDiv">
                  <button onClick={(e) => {
                      navigateToSpecificPage(item, item.ModeId , item.id);
                      
                      console.log("ModeId:", item.id);
                    }}>See result</button>
                  <button
                    onClick={(e) => {
                      delteItem({ Id: item.id });
                      
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}

    </div>
  );
};

export default PreviousTournament;
