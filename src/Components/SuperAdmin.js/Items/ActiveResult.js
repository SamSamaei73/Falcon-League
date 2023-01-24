import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';


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

const ActiveResult = () => {


    useEffect(() => {
        GetActiveTournaments(0);
      }, []);
      const testContext = useContext(TestContext);
      const {
        GetActiveTournaments,
        activeTournamentData,
        deletedTournamentData,
        GetPreviousTournaments,
        DeleteTournament,
        err,
      } = testContext;
    
      useEffectSkipFirst(() => {
        if (deletedTournamentData) {
          GetActiveTournaments();
        }
      }, [deletedTournamentData]);
    
    
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
          GetActiveTournaments();
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
        
          default:
            break;
        }
      }
    



  return (
    <div className="ActiveTpurnament">
      <div className="HeadCreate">
        <h4>Active Tournament</h4>
      </div>
      {activeTournamentData
        ? activeTournamentData.map((item) => (
            <div key={item.id} className="ActiveAdd">
              <h5>{item.Title}</h5>
              <div className="boxAdd">
                <h6>{NameGameById(item.GameId)}</h6>
                <h6 className="larghx">
                  {item.StartDate} - {item.EndDate}
                </h6>
                <h6 className="largh">{item.KDLimit}</h6>

                <h6>{item.Prize}$</h6>
                <h6>{item.EntryFee}FLC</h6>
                <div className="buttonsDiv">
                  <button className="eDitActive">Edit</button>
                </div>
              </div>
            </div>
          ))
        : null}

        <div className="resultsPlace">
            <div className="boxResult">
                <h3 className="placeH3">Place</h3>
                <h3 className="Kill">Kill</h3>
                <h3 className="Kill">K/D</h3>
                <h3 className="Kill">Point</h3>
            </div>
            <div className="RankPlayer">
                <div className="nameRank">
                    <h1 className="Numbers First">1</h1>
                    <div className="NameId">
                        <h4>Alireza Samaei</h4>
                        <h6>@samsamaei</h6>
                    </div>
                </div>
                <h3 className="Kill">25</h3>
                <h3 className="Kill">3,25</h3>
                <h3 className="Kill">356</h3>
            </div>
            <div className="RankPlayer">
                <div className="nameRank">
                    <h1 className="Numbers second">2</h1>
                    <div className="NameId">
                        <h4>Alireza Samaei</h4>
                        <h6>@samsamaei</h6>
                    </div>
                </div>
                <h3 className="Kill">25</h3>
                <h3 className="Kill">3,25</h3>
                <h3 className="Kill">356</h3>
            </div>
            <div className="RankPlayer">
                <div className="nameRank">
                    <h1 className="Numbers second">3</h1>
                    <div className="NameId">
                        <h4>Alireza Samaei</h4>
                        <h6>@samsamaei</h6>
                    </div>
                </div>
                <h3 className="Kill">25</h3>
                <h3 className="Kill">3,25</h3>
                <h3 className="Kill">356</h3>
            </div>
            <div className="RankPlayer">
                <div className="nameRank">
                    <h1 className="Numbers">4</h1>
                    <div className="NameId">
                        <h4>Alireza Samaei</h4>
                        <h6>@samsamaei</h6>
                    </div>
                </div>
                <h3 className="Kill">25</h3>
                <h3 className="Kill">3,25</h3>
                <h3 className="Kill">356</h3>
            </div>
        </div>
     
    </div>
  );
};

export default ActiveResult;
