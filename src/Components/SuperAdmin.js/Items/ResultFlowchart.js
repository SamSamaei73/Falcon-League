import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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

const ResultFlowchart = () => {
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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteTournament(itemId);
      }
    });
  };

  useEffectSkipFirst(() => {
    if (deletedTournamentData) {
      Swal.fire({
        text: " Your file has been deleted.",
        icon: "success",
      }).then((result) => {});
      GetActiveTournaments();
    }
  }, [deletedTournamentData]);

  const NameGameById = (id) => {
    switch (id) {
      case 1:
        return "WARZON";
        break;
      case 2:
        return "DOTA2";
        break;

      default:
        break;
    }
  };

  return (
    <div className="ResultChart">
     
     

      <div class="chartPlace">
        <div id="wrapper">
          <div class="branch lv1">
            <div class="entry">
              <span class="label">
                <select>
                  <option>Hasan</option>
                  <option>Alireza</option>
                  <option>Mehrdad</option>
                </select>
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select>
                      <option>Hasan</option>
                      <option>Alireza</option>
                      <option>Mehrdad</option>
                    </select>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select>
                      <option>Hasan</option>
                      <option>Alireza</option>
                      <option>Mehrdad</option>
                    </select>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="entry">
              <span class="label">
                <select>
                  <option>Hasan</option>
                  <option>Alireza</option>
                  <option>Mehrdad</option>
                </select>
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select>
                      <option>Hasan</option>
                      <option>Alireza</option>
                      <option>Mehrdad</option>
                    </select>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select>
                      <option>Hasan</option>
                      <option>Alireza</option>
                      <option>Mehrdad</option>
                    </select>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select>
                          <option>Hasan</option>
                          <option>Alireza</option>
                          <option>Mehrdad</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="entry"><span class="label">Entry-5</span></div> */}
          </div>
          <span class="label">
            <select>
              <option>Hasan</option>
              <option>Alireza</option>
              <option>Mehrdad</option>
            </select>
          </span>
        </div>
      </div>
      <div className="btnChart">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ResultFlowchart;
