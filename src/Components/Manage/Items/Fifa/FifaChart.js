import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../../Context/testContext";
import AuthContext from "../../../../Context/Auth/authContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "../../../../Scss/FifaChart.scss";

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

const ResultFlowchart = ({ Id }) => {

  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { GetFifaUsersByTournamentId, fifaUsersByTournamentIdData, CreateItemInFifaResult, GetFifaResultByTournamentId, fifaResultByTournamentIdData } = testContext;
  //GetFifaUsersByTournamentId
  const [fifaUsers, setFifaUsers] = useState([]);
  const [resultGame, setResultGame] = useState([]);
  const [FUsersL2, setFUserL2] = useState([]);
  const [FUsersL3, setFUserL3] = useState([]);
  const [FUsersL4, setFUserL4] = useState([]);
  const [FUsersL5, setFUserL5] = useState({});
  const [FinalPoint, setFinalPoint] = useState(null);
  //const [rowNumber, setRowNumber] = useState(1);
  // const FUsers = [
  //   { Id: 0, UserName: 'Select Person', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 1, UserName: 'Hasan', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 2, UserName: 'Ali', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 3, UserName: 'Naghi', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 4, UserName: 'Mehrdad', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 5, UserName: 'Nafas', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 6, UserName: 'Nemat', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 7, UserName: 'Naji', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },
  //   { Id: 8, UserName: 'Mazyar', TournamentId: 51, OrderId: null, TeamId: null, levelId: null },



  // ];


  useEffect(() => {
    GetFifaUsersByTournamentId(Id);
    GetFifaResultByTournamentId(Id);
    //setFifaUsers(FUsers);
    let f2user = [{ Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null, levelId: null }];
    setFUserL2(f2user);
    setFUserL3(f2user);
    setFUserL4(f2user);
    setFUserL5(f2user);
  }, []);


  useEffectSkipFirst(() => {
    if (fifaUsersByTournamentIdData) {
      if (fifaUsersByTournamentIdData.length > 0) {

        console.log("tourdata111user:", fifaUsersByTournamentIdData);
        let tempdata = fifaUsersByTournamentIdData;
        let fuser = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null, levelId: null };
        tempdata.push(fuser);
        tempdata = tempdata.sort((a, b) => a.Id - b.Id);
        setFifaUsers(tempdata);
      }
    }
  }, [fifaUsersByTournamentIdData]);
  useEffectSkipFirst(() => {
    if (fifaResultByTournamentIdData) {
      if (fifaResultByTournamentIdData.length > 0) {

        console.log("tourdata111:", fifaResultByTournamentIdData);
        let tempdata = fifaResultByTournamentIdData;
        let fuser = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null, levelId: null };
        tempdata.push(fuser);
        tempdata = tempdata.sort((a, b) => a.Id - b.Id);

        let obj = {};
        tempdata.map((item) => {
          // handleChange({target:{id:item.Id}},0)
          switch (item.levelId) {
            case 0:
              obj["0-" + item.OrderId] = item.Point;
              break;
            case 1:
              obj["1-" + item.TeamId] = item.Point;
              console.log('item', item.OrderId, item.Point, item);
              break;
            case 2:
              obj["2-" + item.TeamId] = item.Point;
              break;

            default:
              break;
          }


        })
        setResultGame(obj);
        const tempdataL0 = tempdata.filter((item) => item.levelId == 0 || item.Id == 0)
        setFifaUsers(tempdataL0);
        const tempL1 = tempdata.filter((item) => item.levelId = 1 && (item.TeamId == 2 || item.TeamId == 3 || item.TeamId == 4 || item.TeamId == 5));
        if (tempL1) {
          if (tempL1.length > 0) {
            let tl11 = tempL1;
            // tl11.push(fuser);
            tl11 = tl11.sort((a, b) => a.TeamId - b.TeamId)

            setFUserL2(tl11);
          } else {
            let tl11 = [];
            tl11.push(fuser);
            setFUserL2(tl11);
          }
        }
        const tempL2 = tempdata.filter((item) => item.levelId = 2 && (item.TeamId == 3 || item.TeamId == 6));
        if (tempL2) {
          if (tempL2.length > 0) {
            let tl12 = tempL2;
            // tl12.push(fuser);
            tl12 = tempL2.sort((a, b) => a.TeamId - b.TeamId)
            setFUserL3(tl12);
          }
          else {
            let tl12 = tempL2;
            tl12.push(fuser);
            setFUserL3(tl12);
          }
        }

        //console.log(tempL2);
      }
    }
  }, [fifaResultByTournamentIdData]);


  const SelectionChanged = (rowNumber, rank, SelectedId, levelId) => {
    if (levelId == null) {

      console.log('data', rowNumber, rank, SelectedId);
      let OrderId = 0;
      OrderId = rowNumber;// Math.pow(rank - 1, 2) + (index + 1)
      console.log('orderid:', OrderId);
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
      // console.log('changeuser:', fifaUserChanged);
      //console.log('fifauser:', fifaUserChanged);
      let FUsersL2Data = fifaUserChanged.filter(item => item.TeamId != null);

      if (FUsersL2Data.length > 0) {
        let firstRow = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null };

        let temp = [];
        let isSelectPersonAvailable = FUsersL2Data.filter((item) => item.Id == 0);
        if (isSelectPersonAvailable.length > 0) {
          temp.push(firstRow);


        }
        else {
          temp.push(firstRow);
          FUsersL2Data.map((item, index) => {
            item.levelId = 2
            temp.push(item);
          });

        }
        setFUserL2(temp);
      }
      setFifaUsers(fifaUserChanged);
    }
    if (levelId == 2) { // 
      let f3user = FUsersL2.filter((item) => item.Id == SelectedId);
      f3user.levelId = 3;
      f3user.TeamId = Math.floor((rowNumber - 1) / 2) + 1;
      console.log('f3user', SelectedId, FUsersL3);
      let FUsersL3Data = FUsersL3.filter((item) => item.TeamId != f3user[0].TeamId);
      if (FUsersL3.length > 0) {
        let temp = [];
        if (f3user.length > 0) {

          temp.push(f3user[0]);
        }
        FUsersL3Data.map((item) => {
          temp.push(item);
        })
        temp = temp.sort((a, b) => a.Id - b.Id);

        setFUserL3(temp);
      } else {
        let firstRow = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null };

        let temp = [];
        temp.push(firstRow);
        if (f3user.length > 0) {

          temp.push(f3user[0]);
        }
        FUsersL3Data.map((item) => {
          temp.push(item);
        })
        setFUserL3(temp);
      }
    }
    if (levelId == 3) { // 
      let f4user = FUsersL3.filter((item) => item.Id == SelectedId);
      f4user.TeamId = Math.floor((rowNumber - 1) / 2) + 1;
      f4user.levelId = 4;
      console.log('f3user', SelectedId, FUsersL4);
      let FUsersL4Data = FUsersL4.filter((item) => item.TeamId != f4user[0].TeamId);
      if (FUsersL4.length > 0) {
        let temp = [];
        if (f4user.length > 0) {
          temp.push(f4user[0]);
        }
        FUsersL4Data.map((item) => {
          temp.push(item);
        })
        temp = temp.sort((a, b) => a.Id - b.Id);

        setFUserL4(temp);
      } else {
        let firstRow = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null };

        let temp = [];
        temp.push(firstRow);
        if (f4user.length > 0) {

          temp.push(f4user[0]);
        }
        FUsersL4Data.map((item) => {
          temp.push(item);
        })
        setFUserL4(temp);
      }
    }
    if (levelId == 4) { // 
      let f5user = FUsersL5.filter((item) => item.Id == SelectedId);
      f5user.levelId = 5;
      console.log('f5user', SelectedId, FUsersL5);
      let FUsersL5Data = FUsersL5.filter((item) => item.TeamId != f5user[0].TeamId);
      if (FUsersL5.length > 0) {
        let temp = [];
        if (f5user.length > 0) {

          temp.push(f5user[0]);
        }
        FUsersL5Data.map((item) => {
          temp.push(item);
        })
        temp = temp.sort((a, b) => a.Id - b.Id);

        setFUserL5(temp);
      } else {
        let firstRow = { Id: 0, UserName: 'Select Person', TournamentId: null, OrderId: null, TeamId: null };

        let temp = [];
        temp.push(firstRow);
        if (f5user.length > 0) {

          temp.push(f5user[0]);
        }
        FUsersL5Data.map((item) => {
          temp.push(item);
        })
        setFUserL5(temp);
      }
    }

  }//{ Id: e.target.id, value: e.target.value }
  const handleChange = (event, levelId) => {
    setResultGame((curr) => ({
      ...curr,
      [event.target.id]: event.target.value,

    }));
  };
  const handleChange4 = (finalpoint) => {
    setFinalPoint(finalpoint);
    let obj = FUsersL5;
    obj.Point = finalpoint;
    setFUserL5(obj);
  };
  const SelectionChanged4 = (userid, username) => {
    let newUser = {};
    newUser.UserName = username;
    newUser.Id = userid;
    newUser.TournamentId = Id;
    newUser.OrderId = 1;
    newUser.TeamId = 1;
    newUser.levelId = 3;
    newUser.Point = FinalPoint;
    setFUserL5(newUser)
  }

  const InsertResultFifaData1 = (event) => {
    const f1users = fifaUsers;
    const f3users = FUsersL3;
    const f4users = FUsersL4;
    // f4users = f4users.sort((a, b) => a.TeamId - b.TeamId);

    const finalresult = [];
    const final2result = [];
    const final3result = [];


    for (var key in resultGame) {
      if (resultGame.hasOwnProperty(key)) {
        const f1user = f1users.filter((item) => "0-" + item.OrderId == key);
        if (f1user.length > 0) {
          // console.log('key', key, resultGame[key], f1user);

          f1user[0].Point = parseInt(resultGame[key]);
          f1user[0].levelId = 0
          //finalresult.push(f1user[0]);
        }

      }
    }
    let frmData = f1users.filter((item) => item.Id > 0);
    CreateItemInFifaResult({ fifaData: frmData, levelId: 0 });
    // InsertResultFifaData2(event);
    // InsertResultFifaData3(event);
    console.log('f1users', f1users);

  };
  const InsertResultFifaData2 = (event) => {

    const f3users = FUsersL3;
    if (f3users) {
      if (f3users.length > 0) {
        const final2result = [];
        for (var key in resultGame) {
          if (resultGame.hasOwnProperty(key)) {
            const f3user = f3users.filter((item) => "1-" + item.TeamId == key);
            if (f3user.length > 0) {
              //console.log('key', key, resultGame[key], f3user);
              f3user[0].Point = parseInt(resultGame[key]);
              f3user[0].levelId = 1;
              final2result.push(f3user[0]);
            }


          }
        }


        let frmData = f3users.filter((item) => item.Id > 0 && item.Point != null);
        if (frmData) {
          if (frmData.length > 0) {

            CreateItemInFifaResult({ fifaData: frmData, levelId: 1 });
          }
        }
        console.log('f3users', f3users);

      }
    }


  };
  const InsertResultFifaData3 = (event) => {

    //const f4users = FUsersL4;
    const f4users = FUsersL4.sort((a, b) => a.TeamId - b.TeamId);
    if (f4users) {
      if (f4users.length > 0) {
        for (let index = 0; index < f4users.length; index++) {
          f4users[1].TeamId = 3;
          f4users[2].TeamId = 6;
        }

        const final3result = [];


        for (var key in resultGame) {
          if (resultGame.hasOwnProperty(key)) {
            const f4user = f4users.filter((item) => ("2-" + item.TeamId == key));
            if (f4user.length > 0) {
              console.log('key', key, resultGame[key], f4user);
              f4user[0].Point = parseInt(resultGame[key]);
              f4user[0].levelId = 2;
              final3result.push(f4user[0]);
            }

          }
        }
        let frmData = f4users.filter((item) => item.Id > 0 && item.Point != null);
        if (frmData) {
          if (frmData.length > 0) {

            CreateItemInFifaResult({ fifaData: frmData, levelId: 2 })
          }
        }

        console.log('FUsersL4', f4users);
      }
    }

  };
  const InsertResultFifaData4 = (event) => {
    let test = [];
    test.push(FUsersL5);
    CreateItemInFifaResult({ fifaData: test, levelId: 3 })


  };
  const CreateChartContent = (PlayerCount) => {
    let retContent = [];
    let rowNumber = 1;
    if (PlayerCount == 2) {
      for (let index = 0; index < PlayerCount; index++) {
        const element = <div className="entry">
          <span class="label">
            <select>
              {
                FUsersL4.map((item) => {

                  return <option value={item.Id}>{item.UserName}</option>

                })
              }
            </select>
            <input type="text" value={15} maxLength={2} />
          </span>
        </div>;
        retContent.push(element);
      }
      return retContent;
    } else {
      let retChild = [];
      let rank = Math.log2(PlayerCount);
      for (let index = 0; index < 2; index++) {
        let copyrowNumber = rowNumber;
        switch (rowNumber) {
          case 1:
            copyrowNumber = 3
            break;
          case 5:
            copyrowNumber = 6
            break;


          default:
            break;
        }
        let element = <div className="entry">
          <span class="label">
            <select onChange={(e) => SelectionChanged(copyrowNumber, rank, e.target.value, 3)}>
              {
                FUsersL3.map((item) => {
                  //return <option value={item.Id}>{item.UserName}</option>
                  if (copyrowNumber == 3) {

                    if (item.TeamId <= copyrowNumber || item.Id == 0) {
                      return <option value={item.Id}>{item.UserName}</option>
                    }
                  } else if (copyrowNumber == 6) {

                    if (item.TeamId > 3 && item.TeamId <= copyrowNumber || item.Id == 0) {
                      return <option value={item.Id}>{item.UserName}</option>
                    }
                  }
                })
              }

            </select>
            <input type="text" id={"2-" + copyrowNumber} value={resultGame["2-" + copyrowNumber]} onChange={(e) => handleChange(e, 2)} maxLength={2} />
          </span>

          <div className="branch">
            {CreateBranch(rowNumber, PlayerCount, rank)}
          </div>
        </div>;
        // setRowNumber(rowNumber + 1);
        rowNumber = 5;
        console.log('chartContent', rowNumber);
        retContent.push(element);
      }
      return retContent;
    }

  }

  const CreateBranch = (rowNumber, PlayerCount, rank) => {
    let retContent = [];
    for (let index = 0; index < 2; index++) {
      //setRowNumber(rowNumber + 1);
      rowNumber = SumByOne(rowNumber);
      let copyrowNumber = rowNumber;
      switch (rowNumber) {
        case 2:
          copyrowNumber = 2
          break;
        case 4:
          copyrowNumber = 3
          break;
        case 6:
          copyrowNumber = 4
          break;
        case 8:
          copyrowNumber = 5
          break;

        default:
          break;
      }
      console.log('CreateBranch', rowNumber);
      let child =
        <div className="entry">
          <span class="label">
            <select onChange={(e) => SelectionChanged(copyrowNumber, rank, e.target.value, 2)}>
              {
                FUsersL2.map((item) => {
                  if (item.TeamId == copyrowNumber || item.Id == 0) {
                    return <option value={item.Id}>{item.UserName}</option>
                  }
                })
              }
            </select>
            <input type="text" id={"1-" + copyrowNumber} value={resultGame["1-" + copyrowNumber]} onChange={(e) => handleChange(e, 1)} maxLength={2} />
          </span>
          {
            (rank > 2) ?
              <div className="branch">
                {thirdLevleChild(rowNumber, PlayerCount, rank)}
              </div> : null
          }
        </div>
      rowNumber = SumByOne(rowNumber);
      retContent.push(child);
    }
    return retContent;

  }
  const thirdLevleChild = (rowNumber, PlayerCount, rank) => {
    let third = [];
    // rowNumber = rowNumber + 1;
    for (let index = 0; index < 2; index++) {
      rowNumber = SumByOne(rowNumber);
      let copyrowNumber = rowNumber;
      // switch (rowNumber) {
      //   case 3:
      //     copyrowNumber = 1
      //     break;
      //   case 6:
      //     copyrowNumber = 2
      //     break;

      //   default:
      //     break;
      // }
      console.log('third', rowNumber);
      let ThirdChild =
        <div className="entry">
          <span class="label">
            <select onChange={(e) => SelectionChanged(copyrowNumber, rank, e.target.value)}>

              {
                fifaUsers.map((item) => {
                  if (item.OrderId == null) {
                    //console.log('fifauser isnull', item.OrderId);
                    return <option value={item.Id}>{item.UserName}</option>
                  } else {
                    if (copyrowNumber == item.OrderId)
                      return <option selected={true} value={item.Id}>{item.UserName}</option>
                  }
                })

              }

            </select>
            <input type="text" id={"0-" + copyrowNumber} value={resultGame["0-" + copyrowNumber]} onChange={(e) => handleChange(e, 0)} maxLength={2} />
          </span>
          {
            (rank > 3) ?
              <div className="branch">
                {fourthLevleChild(rowNumber, PlayerCount, rank)}
              </div> : null
          }

        </div>;
      // rowNumber = rowNumber;
      third.push(ThirdChild);
    }
    return third;
  }
  const fourthLevleChild = (rowNumber, PlayerCount, rank) => {
    let fourth = [];
    for (let index = 0; index < 2; index++) {
      let FourthChild =
        <div className="entry">
          <span class="label">
            <select onChange={(e) => SelectionChanged(rowNumber, rank, e.target.value)}>
              {/* {
                // fifaUsers.map((item) => {
                //   return <option value={item.Id}>{item.UserName}</option>
                // })
                
              } */}
              <option>Hasan11</option>
              <option>Alireza11</option>
              <option>Mehrdad11</option>
            </select>
            <input type="text" value={15} maxLength={2} />
          </span>
        </div>;
      rowNumber = SumByOne(rowNumber);
      fourth.push(FourthChild);
    }
    return fourth;
  }
  function SumByOne(x) {

    x = x + 1;

    return x;

  }
  return (
    <div className="FifaChart">

      <div class="chartPlace">
        <div id="wrapperFifa">
          <div class="branch">
            {CreateChartContent(8)}
          </div>
          <span class="label">
            <select onChange={(e) => SelectionChanged4(e.target.value, e.target.id)}>
              {
                FUsersL4.map((item) => {

                  return <option id={item.UserName} value={item.Id}>{item.UserName}</option>

                })
              }
            </select>
            <input type="text" id={"3-1"} value={FinalPoint} onChange={(e) => handleChange4(e.target.value)} maxLength={2} />
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
        <button onClick={(e) => InsertResultFifaData1(e)}>EditLevel0</button>
        <button onClick={(e) => InsertResultFifaData2(e)}>EditLevel1</button>
        <button onClick={(e) => InsertResultFifaData3(e)}>EditLevel2</button>
        <button onClick={(e) => InsertResultFifaData4(e)}>EditLevel3</button>
      </div>
    </div>
  );
};

export default ResultFlowchart;


{/* <div class="chartPlace">
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
//         </select>
//         <input type="text" value={13} maxLength={2} />
//       </span>
//       <div class="branch lv2">
//         <div class="entry">
//           <span class="label">
//             <select onChange={(e) => SelectionChanged(1, e.target.value)}>
//               {
//                 fifaUsers.map((item) => {
//                   if (item.TeamId == 1) {

//                     return <option value={item.Id}>{item.UserName}</option>
//                   }
//                 })
//               }
//             </select>
//             <input type="text" value={9} maxLength={2} />
//           </span>
//           <div class="branch lv2">
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(1, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 1) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={1} maxLength={2} />
//               </span>
//             </div>
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(2, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 2) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={2} maxLength={2} />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div class="entry">
//           <span class="label">
//             <select onChange={(e) => SelectionChanged(1, e.target.value)}>
//               {
//                 fifaUsers.map((item) => {
//                   if (item.TeamId == 2) {

//                     return <option value={item.Id}>{item.UserName}</option>
//                   }
//                 })
//               }
//             </select>
//             <input type="text" value={10} maxLength={2} />
//           </span>
//           <div class="branch lv2">
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(3, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 3) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={3} maxLength={2} />
//               </span>
//             </div>
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(4, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 4) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={4} maxLength={2} />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="entry">
//       <span class="label">
//         <select>
//           <option>Hasan</option>
//           <option>Alireza</option>
//           <option>Mehrdad</option>
//         </select>
//         <input type="text" value={14} maxLength={2} />
//       </span>
//       <div class="branch lv2">
//         <div class="entry">
//           <span class="label">
//             <select onChange={(e) => SelectionChanged(1, e.target.value)}>
//               {
//                 fifaUsers.map((item) => {
//                   if (item.TeamId == 3) {

//                     return <option value={item.Id}>{item.UserName}</option>
//                   }
//                 })
//               }
//             </select>
//             <input type="text" value={11} maxLength={2} />
//           </span>
//           <div class="branch lv2">
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(5, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 5) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={5} maxLength={2} />
//               </span>
//             </div>
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(6, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 6) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={6} maxLength={2} />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div class="entry">
//           <span class="label">
//             <select onChange={(e) => SelectionChanged(1, e.target.value)}>
//               {
//                 fifaUsers.map((item) => {
//                   if (item.TeamId == 4) {

//                     return <option value={item.Id}>{item.UserName}</option>
//                   }
//                 })
//               }
//             </select>
//             <input type="text" value={12} maxLength={2} />
//           </span>
//           <div class="branch lv2">
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(7, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 7) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={7} maxLength={2} />
//               </span>
//             </div>
//             <div class="entry">
//               <span class="label">
//                 <select onChange={(e) => SelectionChanged(8, e.target.value)}>
//                   {
//                     fifaUsers.map((item) => {
//                       if (!item.OrderId || item.OrderId == 8) {

//                         return <option value={item.Id}>{item.UserName}</option>
//                       }
//                     })
//                   }
//                 </select>
//                 <input type="text" value={8} maxLength={2} />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <div class="entry"><span class="label">Entry-5</span></div> */}
//   </div>
//   <span class="label">
//     <select>
//       <option>Hasan11</option>
//       <option>Alireza11</option>
//       <option>Mehrdad11</option>
//     </select>
//     <input type="text" value={15} maxLength={2} />
//   </span>
// </div>
//</div> 
