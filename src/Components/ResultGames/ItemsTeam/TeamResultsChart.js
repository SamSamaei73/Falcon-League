import React, { useContext, useRef, useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "../../../Scss/FifaChart.scss";

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

const TeamResultsChart = () => {
  return (
    <div className="TeamResultChart">
        <h2>Tournament Name</h2>
      <div class="chartPlace">
        <div id="wrapperFifa">
          <div class="branch lv1">
            <div class="entry">
              <span class="label">
                <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>
                <input type="text" maxLength={2} readOnly/>
                
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                  <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                    <input type="text" maxLength={2} readOnly/>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                  <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                    <input type="text" maxLength={2} readOnly/>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="entry">
              <span class="label">
              <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                <input type="text" maxLength={2} readOnly/>
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                  <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                    <input type="text" maxLength={2} readOnly/>
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} readOnly/>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                  <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                    <input type="text" maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                      <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

                        <input type="text" maxLength={2} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="entry"><span class="label">Entry-5</span></div> */}
          </div>
          <span class="label">
          <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

          </span>
        </div>
      </div>
      {/* <div className="extraPlayer">
        <h4>Extra Player</h4>
        <input className="PlayerName" value={"Hasan"} type="text" maxLength={2} readOnly/>

      </div> */}
      <div className="btnChart">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TeamResultsChart;
