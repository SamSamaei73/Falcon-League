import React from 'react';
import Coin from '../../../Images/coins.png';

const Transactions = () => {
  return (
    <div className='Transactions'>
        <div className='Title'>
            <h3>All Transactions</h3>
            <h6>Keep track of your earning and spending</h6>
        </div>
        <div className='BoxTrans'>
            <div className="boxInfo">
                <h3>First Tournament Bonus</h3>
                <h6>Transaction Id : abcd12344aa</h6>
            </div>
            <div className="boxCoin">
                <div className="imgCoin">
                    <img src={Coin} alt="" />
                </div>
                <h3>1000</h3>
            </div>
            <div className="StatusBox">
                <h4 className='success'>Completed</h4>
            </div>
        </div>
        <div className='BoxTrans'>
            <div className="boxInfo">
                <h3>First Tournament Bonus</h3>
                <h6>Transaction Id : abcd12344aa</h6>
            </div>
            <div className="boxCoin">
                <div className="imgCoin">
                    <img src={Coin} alt="" />
                </div>
                <h3>1000</h3>
            </div>
            <div className="StatusBox">
                <h4 className='danger'>Unsuccessfull</h4>
            </div>
        </div>
    </div>
  )
}

export default Transactions