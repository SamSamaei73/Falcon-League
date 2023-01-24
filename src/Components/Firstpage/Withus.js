import React from 'react';
import '../../Scss/Firstpage.scss';
import Gameover from '../../Images/123.png';
import Focus from '../../Images/eyes.png';
import Hit from '../../Images/rocket.png';
import Qutation from '../../Images/qutation.png';


const Withus = () => {
  return (
    <div id='Withus'>
        <div className="titleWith">
            <h1>WHEN YOU ARE WITH US REMEMBER TO</h1>
        </div>
        <div className="boxReasone">
            <div className="boxR">
                <div className="imgbox">
                    <img src={Gameover} alt="Gameover" />
                </div>
                <h3>DON'T BE AFRAID<br/> TO LOSE</h3>
            </div>
            <div className="boxR">
                <div className="imgbox">
                    <img src={Focus} alt="Focus" />
                </div>
                <h3>FOCUS ON TARGET</h3>
            </div>
            <div className="boxR">
                <div className="imgbox">
                    <img src={Hit} alt="Hit" />
                </div>
                <h3>HIT THE TARGET</h3>
            </div>
        </div>
        <div className='TextAdver'>
            <div className='itemTex'>
                <div className='Akolad'>
                    <img src={Qutation} alt='Qutation'/>
                </div>
                <h1>YOU WILL WIN THE <br/>NEXT GAME</h1>
            </div>
        </div>
    </div>
  )
}

export default Withus