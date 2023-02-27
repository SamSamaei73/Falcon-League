import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import Swal from "sweetalert2/dist/sweetalert2.js";


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

const InputFifa = ({ Id }) => {
    const testContext = useContext(TestContext);
    const authContext = useContext(AuthContext);
    const { GetFifaUsersByTournamentId, fifaUsersByTournamentIdData, CreateItemInFifaResult, GetFifaResultByTournamentId, createItemInFifaResultData } = testContext;
    const [fifaUsers, setFifaUsers] = useState([]);


    const [FUsersL1, setFUserL1] = useState([]);
    const [FUsersL2, setFUserL2] = useState([]);
    const [FUsersL3, setFUserL3] = useState([]);
    const [Match1Player1Score, setMatch1Player1Score] = useState(null);
    const [Match1Player2Score, setMatch1Player2Score] = useState(null);
    const [Match2Player1Score, setMatch2Player1Score] = useState(null);
    const [Match2Player2Score, setMatch2Player2Score] = useState(null);
    const [Match3Player1Score, setMatch3Player1Score] = useState(null);
    const [Match3Player2Score, setMatch3Player2Score] = useState(null);
    const [Match4Player1Score, setMatch4Player1Score] = useState(null);
    const [Match4Player2Score, setMatch4Player2Score] = useState(null);
    const [Match5Player1Score, setMatch5Player1Score] = useState(null);
    const [Match5Player2Score, setMatch5Player2Score] = useState(null);
    const [Match6Player1Score, setMatch6Player1Score] = useState(null);
    const [Match6Player2Score, setMatch6Player2Score] = useState(null);
    const [Match7Player1Score, setMatch7Player1Score] = useState(null);
    const [Match7Player2Score, setMatch7Player2Score] = useState(null);



    useEffect(() => {
        GetFifaUsersByTournamentId(Id);
        GetFifaResultByTournamentId(Id);
    }, []);


    useEffectSkipFirst(() => {
        if (fifaUsersByTournamentIdData) {
            if (fifaUsersByTournamentIdData.length > 0) {

                console.log("tourdata111user:", fifaUsersByTournamentIdData);
                let tempdata = fifaUsersByTournamentIdData;
                tempdata = tempdata.sort((a, b) => a.Id - b.Id);
                setFifaUsers(tempdata);
            }
        }
    }, [fifaUsersByTournamentIdData]);

    useEffectSkipFirst(() => {
        if (createItemInFifaResultData) {
            Swal.fire({
                text: "Game has been added",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload(true);

                }
              })
        }
    }, [createItemInFifaResultData]);

    const SelectionChanged = (rowNumber, userIdandName, levelId, TeamId, matchplayer) => {
        let newUser = {};
        let userId = userIdandName.split("-")[0];
        let username = userIdandName.split("-")[1]
        newUser.UserName = username;
        newUser.Id = userId;
        newUser.TournamentId = Id;
        newUser.OrderId = rowNumber;
        newUser.TeamId = TeamId;
        newUser.levelId = levelId;
        newUser.Point = 0;
        newUser.matchplayer = matchplayer;
        //console.log(newUser);        
        let temp = [];
        //temp.push
        let isadded = FUsersL1.filter((item) => item.matchplayer == matchplayer);
        if (isadded) {
            if (isadded.length > 0) {
                FUsersL1.map((item) => {
                    if (item.matchplayer == matchplayer) {
                        item.UserName = username;
                        item.Id = userId;
                        item.TournamentId = Id;
                        item.OrderId = rowNumber;
                        item.TeamId = TeamId;
                        item.levelId = levelId;
                        item.Point = 0;
                        item.matchplayer = matchplayer;
                    }
                })
            }
            else {
                temp = FUsersL1;
                temp.push(newUser);
                setFUserL1(temp);
            }
        } else {
            temp = FUsersL1;
            temp.push(newUser);
            setFUserL1(temp);
        }

        console.log('fuserl1', FUsersL1);
    }
    // CreateItemInFifaResult({ fifaData: frmData, levelId: 1 });
    const insertInDb = (matchid) => {
        if (matchid == 1) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 11 || item.matchplayer == 12) {
                    switch (item.matchplayer) {
                        case 11:
                            item.Point = Match1Player1Score;
                            break;
                        case 12:
                            item.Point = Match1Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 11 || item.matchplayer == 12);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 0 });
        }
        if (matchid == 2) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 21 || item.matchplayer == 22) {
                    switch (item.matchplayer) {
                        case 21:
                            item.Point = Match2Player1Score;
                            break;
                        case 22:
                            item.Point = Match2Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 21 || item.matchplayer == 22);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 0 });
        }
        if (matchid == 3) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 31 || item.matchplayer == 32) {
                    switch (item.matchplayer) {
                        case 31:
                            item.Point = Match3Player1Score;
                            break;
                        case 32:
                            item.Point = Match3Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 31 || item.matchplayer == 32);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 0 });
        }
        if (matchid == 4) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 41 || item.matchplayer == 42) {
                    switch (item.matchplayer) {
                        case 41:
                            item.Point = Match4Player1Score;
                            break;
                        case 42:
                            item.Point = Match4Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 41 || item.matchplayer == 42);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 0 });
        }
        if (matchid == 5) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 51 || item.matchplayer == 52) {
                    switch (item.matchplayer) {
                        case 51:
                            item.Point = Match5Player1Score;
                            break;
                        case 52:
                            item.Point = Match5Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 51 || item.matchplayer == 52);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 1 });
        }
        if (matchid == 6) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 61 || item.matchplayer == 62) {
                    switch (item.matchplayer) {
                        case 61:
                            item.Point = Match6Player1Score;
                            break;
                        case 62:
                            item.Point = Match6Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 61 || item.matchplayer == 62);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 1 });
        }
        if (matchid == 7) {
            FUsersL1.map((item) => {
                if (item.matchplayer == 71 || item.matchplayer == 72) {
                    switch (item.matchplayer) {
                        case 71:
                            item.Point = Match7Player1Score;
                            break;
                        case 72:
                            item.Point = Match7Player2Score;
                            break;

                        default:
                            break;
                    }
                }
            });
            let frmData = FUsersL1.filter((item) => item.matchplayer == 71 || item.matchplayer == 72);
            CreateItemInFifaResult({ fifaData: frmData, levelId: 2 });
            let winner=frmData.sort((a,b)=>b.Point-a.Point);
            if(winner){
                if(winner[0].Point){
                    let t1=winner[0];                                        
                    t1.levelId=3                    
                    let temp1=[];
                    temp1.push(t1);
                    CreateItemInFifaResult({ fifaData: temp1, levelId: 3 });
                    //frmData.push(t1);
                }
            }
            //console.log({frmData});
        }
    }


    return (
        <div className='InputFifa'>
            <div className='match'>
                <select>
                    <option>Match 1</option>
                </select>
                <select>
                    <option>Level 1</option>
                </select>
                {/* <select onChange={(e) => SelectionChanged(copyrowNumber, rank, e.target.value, 3)}> */}
                <select onChange={(e) => SelectionChanged(3, e.target.value, 0, 2, 11)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(4, e.target.value, 0, 2, 12)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>
                        })
                    }

                </select>
                <input maxLength={2} type='text' placeholder='score 1' value={Match1Player1Score} onChange={(e) => setMatch1Player1Score(e.target.value)} />
                <input maxLength={2} type='text' placeholder='score 2' value={Match1Player2Score} onChange={(e) => setMatch1Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(1) }}>EditMatch1</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 2</option>
                </select>
                <select>

                    <option>Level 1</option>

                </select>
                <select onChange={(e) => SelectionChanged(5, e.target.value, 0, 3, 21)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(6, e.target.value, 0, 3, 22)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>
                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match2Player1Score} onChange={(e) => setMatch2Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match2Player2Score} onChange={(e) => setMatch2Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(2) }}>EditMatch2</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 3</option>
                </select>
                <select>

                    <option>Level 1</option>

                </select>
                <select onChange={(e) => SelectionChanged(7, e.target.value, 0, 4, 31)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(8, e.target.value, 0, 4, 32)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match3Player1Score} onChange={(e) => setMatch3Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match3Player2Score} onChange={(e) => setMatch3Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(3) }}>EditMatch3</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 4</option>
                </select>
                <select>

                    <option>Level 1</option>

                </select>
                <select onChange={(e) => SelectionChanged(9, e.target.value, 0, 5, 41)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(10, e.target.value, 0, 5, 42)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match4Player1Score} onChange={(e) => setMatch4Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match4Player2Score} onChange={(e) => setMatch4Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(4) }}>EditMatch4</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 5</option>
                </select>
                <select>

                    <option>Level 2</option>

                </select>
                <select onChange={(e) => SelectionChanged(3, e.target.value, 0, 2, 51)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(4, e.target.value, 0, 3, 52)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match5Player1Score} onChange={(e) => setMatch5Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match5Player2Score} onChange={(e) => setMatch5Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(5) }}>EditMatch5</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 6</option>
                </select>
                <select>

                    <option>Level 2</option>

                </select>
                <select onChange={(e) => SelectionChanged(5, e.target.value, 0, 4, 61)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(6, e.target.value, 0, 5, 62)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match6Player1Score} onChange={(e) => setMatch6Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match6Player2Score} onChange={(e) => setMatch6Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(6) }}>EditMatch6</button>
                </div>
            </div>
            <div className='match'>
                <select>
                    <option>Match 7</option>
                </select>
                <select>

                    <option>Level 3</option>

                </select>
                <select onChange={(e) => SelectionChanged(1, e.target.value, 0, 3, 71)}>
                    <option>Player1</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }
                </select>
                <select onChange={(e) => SelectionChanged(2, e.target.value, 0, 6, 72)}>
                    <option>Player2</option>
                    {
                        fifaUsers.map((item) => {
                            return <option value={item.Id + "-" + item.UserName}>{item.UserName}</option>

                        })
                    }

                </select>
                <input type='text' placeholder='score 1' value={Match7Player1Score} onChange={(e) => setMatch7Player1Score(e.target.value)} />
                <input type='text' placeholder='score 2' value={Match7Player2Score} onChange={(e) => setMatch7Player2Score(e.target.value)} />
                <div className="btnChart">
                    <button onClick={(e) => { insertInDb(7) }}>EditMatch7</button>
                </div>
            </div>

        </div>
    )
}

export default InputFifa