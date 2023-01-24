import React from 'react';
import '../../Scss/Login.scss';
import Confirm from '../../Images/password.png';

const ForgetPopup = (prop) => {
  return (
    <div className='ForgetPopup'>
        <div className='BoxAlert'>
            <div className="photo">
                <img src={Confirm} alt="PhotoEmail" />
            </div>
            <h5>Recover Password</h5>
            <h6>An Email has been sent</h6>
            <p>Please check your inbox for an Email titled:</p>
            <p>"Recover password"</p>
            <p>And click on the link</p>
            <button onClick={(e)=>prop.showPopup(false)} >OK</button>
        </div>
    </div>
  )
}

export default ForgetPopup