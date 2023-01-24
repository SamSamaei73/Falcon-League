import React from 'react';
import '../../Scss/Firstpage.scss';
import Logo from '../../Images/Falcongold-logo.png';
import Facebook from '../../Images/icons8-facebook-f-24.png';
import Twitter from '../../Images/icons8-twitter-30.png';
import Linkedin from '../../Images/icons8-linkedin-2-32.png';





const Footer = () => {
  return (
    <div id='Footer'>
        <div className='mainFooter'>
            <div className='LogoFooter'>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className='DownFooter'>
                <div className='ItemDown'>
                  <div className="boxItem">
                  <div className="boxSocial">
                    <img src={Linkedin} alt="Facebook" />
                  </div>
                  <div className="boxSocial">
                  <img src={Twitter} alt="Twitter" />

                  </div>
                  <div className="boxSocial">
                  <img src={Facebook} alt="Facebook" />

                  </div>
                  </div>
                  <div className="boxItem">
                    <h5>FOLLOW US</h5>
                  </div>
                </div>
                <div className='Copyright ItemDown'>
                  <h5>
                  Copyright © 2022 FALCN. All rights reserved
                  </h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer