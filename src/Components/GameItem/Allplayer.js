import React from 'react';
import Khaled from '../../Images/khled.jpeg'

const Allplayer = ({colorGold}) => {
  return (
    <div className='Allplayer' style={colorGold}>
        <div className="imgName">
            <div className="photouser">
                <img src={Khaled} alt="photo" />
            </div>
            <div className="info">
                <h4>Mehrdad Khaledi</h4>
                <h5>@khaledi</h5>
            </div>
        </div>
        <div className="Kd">
            <h4>3,25</h4>
        </div>
        <div className="Win"><h4>100</h4></div>
        <div className="plus">
            <h5>+5%</h5>
        </div>
        
        <div className="Nationality"><h4>IRAN</h4></div>
        <div className="profile">
            <button>Add/View</button>
        </div>
    </div>
  )
}

export default Allplayer