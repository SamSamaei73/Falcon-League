import React, { useContext, useRef, useEffect, useState } from "react";
import HeaderGame from "../Items/HeaderGame";
import Pass from '../../Images/password.png';
import ForgetPopup from './ForgetPopup';
import TestContext from "../../Context/testContext";
import AuthContext from "../../Context/Auth/authContext";


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
const isEmail = (email) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const ForgetPass = () => {
  const [email, setEmail] = useState(null);
  const [showForgetPopup, setShowForgetPopup] = useState(null);
  const testContext = useContext(TestContext);
  const {
    SendEmailForChangePassword,
    sendEmailForChangePasswordData,
  } = testContext;
  const sendRecoveryEmail = () => {
    if (isEmail(email)) {
      let emailData = {};
      emailData.Email = email;
      SendEmailForChangePassword(emailData);
    }
  }
  useEffectSkipFirst(() => {
    if (sendEmailForChangePasswordData) {
      if(sendEmailForChangePasswordData.id){
setShowForgetPopup(true);
      }else{

      }
    }
  }, [sendEmailForChangePasswordData]);
  const showPopup=()=>{
    setShowForgetPopup(false);
  }
  return (
    <div className='ForgetPass'>
       {showForgetPopup? <ForgetPopup showPopup={showPopup}/>:null}
        <HeaderGame/>
        <div className="forgetBox">
            <div className="forgetImg">
                <img src={Pass} alt="Pass" />
            </div>
            <div className="btnBox">
                <h1>Recover Password</h1>
                <h4>Enter your Email</h4>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button onClick={sendRecoveryEmail}>SEND RECOVER LINK</button>
            </div>
        </div>

    </div>
  )
}

export default ForgetPass