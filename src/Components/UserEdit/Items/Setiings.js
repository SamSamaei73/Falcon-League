import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import Swal from "sweetalert2";
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

const Setiings = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;

  const {
    userInfoData,
    GetUserInfo,
    updateUserData,
    UpdateUserInfo,
    SetUserSetting,
    err,
  } = testContext;
  const [DataUser, setDataUser] = useState(null);
  const [Firstname, setFirstname] = useState(null);
  const [Username, setUsername] = useState(null);
  const [Birthdate, setBirthdate] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [showMessage2, setShowMessage2] = useState(null);

  useEffect(() => {
    GetUserInfo();
  }, []);

  useEffectSkipFirst(() => {
    if (userInfoData) {
    }
  }, [userInfoData]);

  useEffectSkipFirst(() => {
    if (userInfoData) {
      let newItem = {};
      setFirstname(userInfoData.Firstname);
      setBirthdate(userInfoData.Birthdate);
      setUsername(userInfoData.Username);
    }
  }, [userInfoData]);

  const sendUserData = () => {
    let newUser = {};
    if(Firstname.length > 3 && Username.length > 3){

    newUser.FirstName = Firstname;
    newUser.Birthdate = Birthdate;
    newUser.Username = Username;

    UpdateUserInfo(newUser);
    }else {
      console.log("empty");
    }

  };



  useEffectSkipFirst(() => {
    if (updateUserData) {
        if(updateUserData.status == true){

          setShowMessage(true);
          SetUserSetting(null);
        } else {
          setShowMessage2(true);
          SetUserSetting(null);
        }
      
    }
  }, [updateUserData]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Information has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  useEffectSkipFirst(() => {
    if (showMessage2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your new Username has been selected before",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage2(false);
    }
  }, [showMessage2]);

  return (
    <div className="Setiings">
      <div className="Title">
        <h4>Personal Information</h4>
      </div>
      <div className="PersonalEdit">
        <div className="item">
          <h5>Full Name</h5>
          <input
            type="text"
            value={Firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="item">
          <h5>Date of Birth</h5>
          <input
            type="date"
            value={Birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="item">
          <h5>FLC ID (Username)</h5>
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div className="buttonSetting">
        <button
          onClick={(e) => {
            sendUserData();
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Setiings;
