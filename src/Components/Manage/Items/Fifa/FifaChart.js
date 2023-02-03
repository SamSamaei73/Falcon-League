import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../../Context/testContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "../../../../Scss/FifaChart.scss";
import userEvent from "@testing-library/user-event";

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
  const [fifaUsers, setFifaUsers] = useState([]);
  const FUsers = [
    { Id: 0, UserName: 'Select Person', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 1, UserName: 'Hasan', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 2, UserName: 'Ali', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 3, UserName: 'Naghi', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 4, UserName: 'Mehrdad', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 5, UserName: 'Nafas', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 6, UserName: 'Nemat', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 7, UserName: 'Naji', TournamentId: 51, OrderId: null, TeamId: null },
    { Id: 8, UserName: 'Mazyar', TournamentId: 51, OrderId: null, TeamId: null },



  ];

  useEffect(() => {
    setFifaUsers(FUsers);
  }, [])
  const SelectionChanged = (OrderId, SelectedId) => {
    console.log('id', SelectedId);
    // console.log('value:', value);
    let fifaUserChanged = fifaUsers.map((fuser) => {
      if (fuser.OrderId == OrderId) {
        fuser.OrderId = null;
      }
      if (fuser.Id == SelectedId) {
        fuser.OrderId = OrderId;
        fuser.TeamId = Math.floor((OrderId - 1) / 2) + 1;
      }
      return fuser;
    });
    console.log('changeuser:', fifaUserChanged);
    console.log('fifauser:', fifaUserChanged);
    setFifaUsers(fifaUserChanged);

  }


  return (
    <div className="FifaChart">
      <div class="chartPlace">
        <div id="wrapperFifa">
          <div class="branch lv1">
            <div class="entry">
              <span class="label">
                <select>
                  {
                    fifaUsers.map((item) => {
                      return <option>{item.UserName}</option>
                    })
                  }

                  {/* <option>Alireza</option>
                  <option>Mehrdad</option> */}
                </select>
                <input type="text" value={13} maxLength={2} />
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 1) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={9} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 1) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={1} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(2, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 2) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={2} maxLength={2} />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 2) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={10} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(3, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 3) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={3} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(4, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 4) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={4} maxLength={2} />
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
                <input type="text" value={14} maxLength={2} />
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 3) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={11} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(5, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 5) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={5} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(6, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 6) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={6} maxLength={2} />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 4) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={12} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(7, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 7) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={7} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(8, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 8) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={8} maxLength={2} />
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
              <option>Hasan11</option>
              <option>Alireza11</option>
              <option>Mehrdad11</option>
            </select>
            <input type="text" value={15} maxLength={2} />
          </span>
        </div>
      </div>
      <div class="chartPlace">
        <div id="wrapperFifa">
          <div class="branch ">
            <div class="entry">
              <span class="label">
                <select>
                  {
                    fifaUsers.map((item) => {
                      return <option>{item.UserName}</option>
                    })
                  }

                  {/* <option>Alireza</option>
                  <option>Mehrdad</option> */}
                </select>
                <input type="text" value={13} maxLength={2} />
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 1) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={9} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 1) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={1} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(2, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 2) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={2} maxLength={2} />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 2) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={10} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(3, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 3) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={3} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(4, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 4) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={4} maxLength={2} />
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
                <input type="text" value={14} maxLength={2} />
              </span>
              <div class="branch lv2">
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 3) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={11} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(5, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 5) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={5} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(6, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 6) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={6} maxLength={2} />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="entry">
                  <span class="label">
                    <select onChange={(e) => SelectionChanged(1, e.target.value)}>
                      {
                        fifaUsers.map((item) => {
                          if (item.TeamId == 4) {

                            return <option value={item.Id}>{item.UserName}</option>
                          }
                        })
                      }
                    </select>
                    <input type="text" value={12} maxLength={2} />
                  </span>
                  <div class="branch lv2">
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(7, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 7) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={7} maxLength={2} />
                      </span>
                    </div>
                    <div class="entry">
                      <span class="label">
                        <select onChange={(e) => SelectionChanged(8, e.target.value)}>
                          {
                            fifaUsers.map((item) => {
                              if (!item.OrderId || item.OrderId == 8) {

                                return <option value={item.Id}>{item.UserName}</option>
                              }
                            })
                          }
                        </select>
                        <input type="text" value={8} maxLength={2} />
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
              <option>Hasan11</option>
              <option>Alireza11</option>
              <option>Mehrdad11</option>
            </select>
            <input type="text" value={15} maxLength={2} />
          </span>
        </div>
      </div>
      {/* <div className="extraPlayer">
        <h4>Extra Player</h4>
         <select>
            <option>None</option>
            <option>Ali</option>
            <option>Hasan</option>
         </select>
      </div> */}
      <div className="btnChart">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ResultFlowchart;
