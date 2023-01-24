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

const ChangePass = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;

  const { UpdateUserPassword, updateUserPasswordData, SetUserPassword, err } =
    testContext;

  const [Current, setCurrent] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showMessage, setShowMessage] = useState(null);
  const [showMessage2, setShowMessage2] = useState(null);
  const [ErrorInput, setErrorInput] = useState();
  const [ErrorLength, setErrorLength] = useState(false);
  const [ErrorEpty, setErrorEpty] = useState(false);

  const sendUserData = () => {
    let newUser = {};
    newUser.CurrentPassword = Current;
    newUser.Password = Password;
    if(Current.length<1 && Password.length <1){
      setErrorEpty(true);
    } else if (Password.length < 8) {
      setErrorLength(true);
    } else {
      UpdateUserPassword(newUser);
      console.log("pass", newUser);
      
    }

  };

  useEffectSkipFirst(() => {
    if (updateUserPasswordData) {
      if(updateUserPasswordData.status ==true)
      {

        setShowMessage(true);
        SetUserPassword(null);
      }
      else{
        setShowMessage2(true);
        SetUserPassword(null);
      }
      
      
    }
  }, [updateUserPasswordData]);

  useEffectSkipFirst(() => {
    if (showMessage2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your current password is wrong",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage2(false);
    }
  }, [showMessage2]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Password has been changed",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  useEffectSkipFirst(() => {
    setErrorEpty(false);
    if (ConfirmPassword != Password) {
      setErrorInput("ErorrInput");
    } else {
      setErrorInput();
    }
  }, [ConfirmPassword]);

  useEffectSkipFirst(() => {
    if (Password) {
      setErrorEpty(false);
      if (Password.length < 8) {
        setErrorLength(true);
      } else {
        setErrorLength(false);
      }
    }
  }, [Password]);
  useEffectSkipFirst(() => {
    if (Current) {
      setErrorEpty(false);
      
    }
  }, [Current]);
  
  return (
    <div className="Setiings">
      <div className="Title">
        <h4>Your Password</h4>
      </div>
      <div className="PersonalEdit">
        <div className="item">
          <h5>Current Password</h5>
          <input
            type="password"
            value={Current}
            onChange={(e) => {
              setCurrent(e.target.value);
            }}
          />
        </div>
        <div className="item">
          <h5>New Password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="item">
          <h5>Confirm New Password</h5>
          <input
            className={ErrorInput}
            type="password"
            value={ConfirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="buttonSetting2">
        {ErrorLength ? (
          <h4>Your Password should more than 8 characters</h4>
        ) : null}
        {ErrorEpty ? (
          <h4>Password and New Password is required</h4>
        ) : null}
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

export default ChangePass;
