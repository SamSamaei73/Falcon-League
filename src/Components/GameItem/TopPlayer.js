import React from 'react';
import Khaled from '../../Images/khled.jpeg'

const TopPlayer = ({Top , btn}) => {
  return (
    <div className='TopPlayer'style={Top} >
        <div className='score'>
            <div className="personimg">
                <img src={Khaled} alt="Khaled" />
            </div>
            <div className="name">
                <h4>Mehrdad Khaledi</h4>
                <h5>@khaledi</h5>
            </div>
            <div className="scoreGame">
                <h3>3,05</h3>
                <h5>+5%</h5>
            </div>
        </div>
        <div className="nation">
            <h4>IRAN</h4>
            <button style={btn}>AddView</button>
        </div>
    </div>
  )
}

export default TopPlayer