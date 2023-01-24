import React, { useContext, useRef, useEffect, useState } from "react";
import HeaderGame from "../Items/HeaderGame";
import Pass from '../../Images/password.png';
import TestContext from "../../Context/testContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import PopupChangePass from '../Items/PopupChangePass';
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
const ConfirmForget = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  const [userId, setUserId] = useState(null);
  const [confirmPasswrod, setConfirmpasswrod] = useState(null);
  const [showErrorForPass, setShowErrorForPass] = useState(null);
  const [showForgetPopup, setShowForgetPopup] = useState(null);
  const [showError, setShowError] = useState(null);
  const [showError8, setShowError8] = useState(null);
  const testContext = useContext(TestContext);
  const { UpdatePasswordSpecificUser, updatePasswordSpecificUserData } = testContext;
  const search = useLocation().search;
  let { Id } = useParams();
  useEffect(() => {
    const userId = new URLSearchParams(search).get("pc");
    setUserId(userId);   
  }, []);
  useEffectSkipFirst(() => {
    if (updatePasswordSpecificUserData) {
      navigate("/Login");
    }
  }, [updatePasswordSpecificUserData]);
  useEffectSkipFirst(() => {
    if (confirmPasswrod === password) {
      setShowErrorForPass(false);
    } else {
      setShowErrorForPass(true);
    }
  }, [confirmPasswrod]);

  const sendData = () => {
    let newUser = {};   
    newUser.Password = password;
    newUser.id = userId;   
    if (
      password
    ) {
      if (
        userId &&
        password.length > 7 &&
        password === confirmPasswrod
      ) {
        UpdatePasswordSpecificUser(newUser);
      }else {
        if ( password !== confirmPasswrod  ) {
         setShowErrorForPass(true);
        }     
        else{
          setShowError8(true);
        }
      }
    } else {
      if ( password !== confirmPasswrod  ) {
       setShowErrorForPass(true);
      }     
      else{
        setShowError(true);
      }
    }
  };
  const showPopup=()=>{
    setShowForgetPopup(false);
  }
  return (
    <div className='ConfirmForget'>
             {showForgetPopup? <PopupChangePass showPopup={showPopup}/>:null}
        <HeaderGame/>
        <div className="forgetBox">
            <div className="forgetImg">
                <img src={Pass} alt="Pass" />
            </div>
            <div className="btnBox">
                <h1>Change your Password</h1>
                <h4>Enter your new password</h4>
                <input vlaue={password} onChange={(e)=>{
                                   setShowError(false); setShowErrorForPass(false);
                                   setPassword(e.target.value);}} type="password" placeholder='New Password' />
                <input vlaue={confirmPasswrod} onChange={(e)=>{
                  setShowError(false); setShowErrorForPass(false);
                  setConfirmpasswrod(e.target.value)}} type="password" placeholder='Confirm Password' />
                <button onClick={sendData}>CHANGE PASSWORD</button>
                {
              showError8?
            <label className="labelError">
              Note: Your password should be more than 8 character
            </label>:null}
                {
              showError?
            <label className="labelError">
              Note: All of the inputs should have value
            </label>:null}
            {
              showErrorForPass? <label className="labelError">
              Note: Your password and confirm password are not equal
            </label>:null}
            </div>
        </div>

    </div>
  )
}

export default ConfirmForget