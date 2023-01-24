import React, { useContext, useRef, useEffect, useState } from "react";
import '../../Scss/Login.scss';
import Confirm from '../../Images/confirmation.png';
import TestContext from "../../Context/testContext";


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


const PopupAlert = ( ) => {
  const testContext = useContext(TestContext);
  const {  SetPopup , popupAlertData } = testContext;


 





  return (
    <div className={popupAlertData ?'PopupAlert' : 'PopupAlertH'}>
        <div className='BoxAlert'>
            <div className="photo">
                <img src={Confirm} alt="PhotoEmail" />
            </div>
            <h5>A Confirmation Email has been sent to you</h5>
            <p>Please check your inbox for an email titled:</p>
            <p>Action Required: Please Confirm Your Email.</p>
            <p>Don't forget to check your Promotions/Junk tab.</p>
            <button onClick={(e)=>SetPopup(false)}>OK</button>
        </div>

    </div>
  )
}

export default PopupAlert