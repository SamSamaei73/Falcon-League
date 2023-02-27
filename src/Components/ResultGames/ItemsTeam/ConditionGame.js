import React, { useEffect, useRef, useContext, useState } from "react";
import Coin from "../../../Images/coins.png";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import ManagerPhoto from "../../../Images/4_5971824246068874882.png";
import MemberPhoto from "../../../Images/4_5971824246068874881.png";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
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

const ConditionGame = ({ Id }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const {
    SetSwitchUsers,
    GetAllTeamUsers,
    allTeamUserData,
    tournamentByIdData,
    registerForThisTeamData,
    RegisterTournmentForThisTeam,
    usersOfSpecificTeamData,
    GetUsersOfSpecificTeam,
    ConfirmTournmentByUser,
    confirmTournmentByUserData,
  } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [tourData, setTourData] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState({});
  const [teamName, setTeamName] = useState("");
  const [showSavebtn, setShowSaveBtn] = useState(true);
  const [isleader, setisleader] = useState(null);
  const [isMember, setIsMember] = useState(null);
  const [ChooseCond, setChooseCond] = useState(0);


  useEffectSkipFirst(() => {
    if (confirmTournmentByUserData) {
      Swal.fire({
        text: " Tournament has been created.",
        icon: "success",
      });
      setTimeout(function(){
        window.location.reload();
     }, 2000);
    }
  }, [confirmTournmentByUserData]);

  useEffectSkipFirst(() => {
    if (registerForThisTeamData) {
      Swal.fire({
        text: " Your Team has been created.",
        icon: "success",
      });
      setTimeout(function(){
        window.location.reload();
     }, 2000);
    }
  }, [registerForThisTeamData]);





  useEffect(() => {
    setisleader(true);
    setIsMember(true);
    if (tournamentByIdData) {
      let data = tournamentByIdData;
      data.ModeIdStr = GetModeStr(tournamentByIdData.ModeId);
      setTourData(data);
    }
    if (usersOfSpecificTeamData) {
      if (usersOfSpecificTeamData.IsLeader) {
        setTeamName(usersOfSpecificTeamData.TeamName);
        setSelectedUsers(usersOfSpecificTeamData.players);
        // setShowSaveBtn(false);
        setisleader(true);
        setIsMember(false);
      } else {
        setIsMember(true);
        setisleader(false);
        setTeamName(usersOfSpecificTeamData.TeamName);
      }
    } else {
      // setisleader(true);
      // setIsMember(true);
    }
  }, []);

  useEffectSkipFirst(() => {
    setisleader(true);
    setIsMember(true);
    if (usersOfSpecificTeamData) {
      setisleader(true);
      setIsMember(true);
      if (usersOfSpecificTeamData.IsLeader) {
        setTeamName(usersOfSpecificTeamData.TeamName);
        setSelectedUsers(usersOfSpecificTeamData.players);
        setShowSaveBtn(false);
        setisleader(true);
        setIsMember(false);
      } else {
        setIsMember(true);
        setisleader(false);
        setTeamName(usersOfSpecificTeamData.TeamName);
      }
    }
  }, [usersOfSpecificTeamData]);
  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      let data = tournamentByIdData;
      data.ModeIdStr = GetModeStr(tournamentByIdData.ModeId);
      setTourData(data);
      // setisleader(true);
      // setIsMember(true);
      // setSelectedUsers({});
      // setTeamName('');
    }
  }, [tournamentByIdData]);
  useEffectSkipFirst(() => {
    if (allTeamUserData) {
      //console.log('usersofwarzone', allTeamUserData);
      setAllUsers(allTeamUserData);
    }
  }, [allTeamUserData]);
  const handleChange = (e, Index) => {
    //console.log('changed:', e);

    switch (Index) {
      case 0:
        setSelectedUsers((prevState) => ({
          ...prevState,
          player1: e.trim(),
        }));
        // console.log('SelectedUsers[0]:', selectedUsers);
        break;
      case 1:
        setSelectedUsers((prevState) => ({
          ...prevState,
          player2: e.trim(),
        }));
        // console.log('SelectedUsers[1]:', selectedUsers);
        break;
      case 2:
        setSelectedUsers((prevState) => ({
          ...prevState,
          player3: e.trim(),
        }));
        //  console.log('SelectedUsers[2]:', selectedUsers);
        break;
      case 6: //for team name
        setTeamName(e.target.value);
        break;
      default:
        break;
    }
  };
  const sendDataToBack = () => {
    let newItem = {};
    newItem.TeamName = teamName;
    newItem.TournamentId = tourData.id;
    newItem.GameId = tourData.GameId;
    if (selectedUsers["player1"]) {
      newItem.Player1 = selectedUsers["player1"];
      let player = allUsers.filter(
        (item) => item.UserName == selectedUsers["player1"].trim()
      );
      if (player.length > 0) {
        newItem.Player1Id = player[0].id;
      }
    }
    if (selectedUsers["player2"]) {
      newItem.Player2 = selectedUsers["player2"];
      let player = allUsers.filter(
        (item) => item.UserName == selectedUsers["player2"].trim()
      );
      if (player.length > 0) {
        newItem.Player2Id = player[0].id;
      }
    }
    if (selectedUsers["player3"]) {
      newItem.Player3 = selectedUsers["player3"];
      let player = allUsers.filter(
        (item) => item.UserName == selectedUsers["player3"].trim()
      );
      if (player.length > 0) {
        newItem.Player3Id = player[0].id;
      }
    }
    RegisterTournmentForThisTeam(newItem);
    console.log(newItem);
  };
  const confirmTournmentByUser = () => {
    let newItem = {};

    newItem.TournamentId = tourData.id;
    ConfirmTournmentByUser(newItem);
    console.log(newItem);
  };

  const GetModeStr = (ModeId) => {
    //Solo,Duos,Trios,Quad
    switch (ModeId) {
      case 1:
        return "Solo";
        break;
      case 2:
        return "Duos";
        break;
      case 3:
        return "Trios";
        break;
      case 4:
        return "Quad";
        break;

      default:
        break;
    }
  };

  return (
    <div className="conditionGame">
      <div className="boxDetailes">
        <h3>Tournament Details</h3>
        <table>
          <tr>
            <th>
              <div className="box">
                <h5>Mode</h5>
                <h5>{tourData ? tourData.ModeIdStr : null}</h5>
              </div>
            </th>
            <th>
              <div className="box">
                <h5>Date</h5>
                <h5>{tourData ? tourData.StartDate : null}</h5>
              </div>
            </th>
            <th>
              <div className="box">
                <h5>Entry Fee</h5>
                <h5>
                  {tourData ? tourData.EntryFee : null}{" "}
                  <img src={Coin} alt="coin" />
                </h5>
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <div className="box">
                <h5>Duration (Per Hour)</h5>
                <h5> {tourData ? tourData.Minutes : null} </h5>
              </div>
            </td>
            <td>
              <div className="box">
                <h5 className="prize">Prize</h5>
                <h5 className="prize"> {tourData ? tourData.Prize : null} $</h5>
              </div>
            </td>
            <td>
              <div className="box">
                <h5></h5>
                <h5></h5>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="maineControl">
        <div className="btnsCondition">
          {ChooseCond == 2 ? null : isleader ? (
            <div
              id={1}
              onClick={(e) => setChooseCond(e.target.id)}
              className="BoxCondition Manager"
            >
              <p>
                Join as <span className="bolder">Leader</span>
              </p>
              <img
                id={1}
                onClick={(e) => setChooseCond(e.target.id)}
                src={ManagerPhoto}
                alt="ManagerPhoto"
              />
            </div>
          ) : null}
          {ChooseCond == 1 ? null : isMember ? (
            <div
              id={2}
              onClick={(e) => setChooseCond(e.target.id)}
              className="BoxCondition Member"
            >
              <p>
                Join as <span className="bolder">Member</span>
              </p>
              <img
                id={2}
                onClick={(e) => setChooseCond(e.target.id)}
                src={MemberPhoto}
                alt="MemberPhoto"
              />
            </div>
          ) : null}
        </div>
        {ChooseCond == 1 ? (
          <>
            <div className="manage-box">
              <h3>Enter your Team name and Member</h3>
              <h5>
                you <span className="Danger">can not change</span> the Team
                members after save
              </h5>
              <div className="TeamName">
                <h4>Enter your team name :</h4>
                <input
                  value={teamName}
                  onChange={(e) => handleChange(e, 6)}
                  type="text"
                />
              </div>
              {tourData.ModeId == 2 ? (
                <>
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[0] : ""}
                      onChange={(e) => handleChange(e, 0)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                    <div className="btnSave">
                      {showSavebtn && (
                        <button onClick={sendDataToBack}>Save</button>
                      )}
                    </div>
                  </div>{" "}
                </>
              ) : tourData.ModeId == 3 ? (
                <>
                  {" "}
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[0] : ""}
                      onChange={(e) => handleChange(e, 0)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[1] : ""}
                      onChange={(e) => handleChange(e, 1)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="btnSave">
                    {showSavebtn && (
                      <button onClick={sendDataToBack}>Save</button>
                    )}
                  </div>
                </>
              ) : tourData.ModeId == 4 ? (
                <>
                  {" "}
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[0] : ""}
                      onChange={(e) => handleChange(e, 0)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[1] : ""}
                      onChange={(e) => handleChange(e, 1)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="members">
                    <TextInput
                      value={selectedUsers ? selectedUsers[2] : ""}
                      onChange={(e) => handleChange(e, 2)}
                      trigger=""
                      options={allUsers.map((item) => item.UserName)}
                    />
                    <div className="remove">
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="btnSave">
                    {showSavebtn && (
                      <button onClick={sendDataToBack}>Save</button>
                    )}
                  </div>
                </>
              ) : null}
            </div>
            <div className="btnCondistion">
              <button onClick={(e) => setChooseCond(0)}>Back</button>
              <button onClick={(e) => confirmTournmentByUser()}>Join</button>
            </div>
          </>
        ) : null}

        {ChooseCond == 2 ? (
          <>
            <div className="manage-box">
              <h3>Enter your Team name </h3>
              <div className="membersSelect">
                <TextInput trigger="" value={teamName} onChange={(e) => {}} />
                <div className="remove">
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="btnCondistion">
              <button onClick={(e) => setChooseCond(0)}>Back</button>
              <button onClick={(e) => confirmTournmentByUser()}>Join</button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ConditionGame;
