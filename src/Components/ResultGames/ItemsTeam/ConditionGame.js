import React, { useEffect, useRef, useContext, useState } from "react";
import Coin from "../../../Images/coins.png";
import ManagerPhoto from '../../../Images/4_5971824246068874882.png';
import MemberPhoto from '../../../Images/4_5971824246068874881.png';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';


const ConditionGame = () => {
    const [ChooseCond, setChooseCond]=useState(0)
  return (
    <div className='conditionGame'>
        <div className="boxDetailes">
        <h3>Tournament Details</h3>
          <table >
            <tr>
              <th>
                <div className="box">
                  <h5>Mode</h5>
                  <h5>55</h5>
                </div>
              </th>
              <th>
                <div className="box">
                  <h5>Date</h5>
                  <h5>
                    55
                  </h5>
                </div>
              </th>
              <th>
                <div className="box">
                  <h5>Entry Fee</h5>
                  <h5>
                    55 <img src={Coin} alt="coin" />
                  </h5>
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div className="box">
                  <h5>Duration (Per Hour)</h5>
                  <h5>55</h5>
                </div>
              </td>
              <td>
                <div className="box">
                  <h5 className="prize">Prize</h5>
                  <h5 className="prize">55 $</h5>
                </div>
              </td>
              <td>
                <div className="box">
                  <h5></h5>
                  <h5></h5>
                </div>
              </td>
            </tr>
          </table>
      </div>
      <div className="maineControl">
        <div className="btnsCondition">
            
            {ChooseCond == 2 ? null :   <div id={1} onClick={(e)=>setChooseCond(e.target.id)} className="BoxCondition Manager">
                <p>Join as <span className='bolder'>Leader</span></p>
                <img id={1} onClick={(e)=>setChooseCond(e.target.id)} src={ManagerPhoto} alt="ManagerPhoto" />
            </div>}
            {ChooseCond == 1 ? null : 
               <div id={2} onClick={(e)=>setChooseCond(e.target.id)} className="BoxCondition Member">
               <p>Join as <span className='bolder'>Member</span></p>
                   <img id={2} onClick={(e)=>setChooseCond(e.target.id)} src={MemberPhoto} alt="MemberPhoto" />
               </div>
            }

           

           


        </div>
        {ChooseCond == 1 ?<>
            <div className="manage-box">
           <h3>Enter your Team name and Member</h3>
           <h5>you <span className='Danger'>can not change</span> the Team members after save</h5>
           <div className="TeamName">
            <h4>Enter your team name :</h4>
            <input type="text"  />
           </div>
           <div className="members">

           <TextInput trigger='' options={["apple", "apricot", "banana", "carrot"]} />
           <div className="remove"><div className="line"></div></div>
           </div>
           <div className="members">

           <TextInput trigger='' options={["apple", "apricot", "banana", "carrot"]} />
           <div className="remove"><div className="line"></div></div>
           </div>
           <div className="members">

           <TextInput trigger='' options={["apple", "apricot", "banana", "carrot"]} />
           <div className="remove"><div className="line"></div></div>
           </div>
           <div className="btnSave">
            <button>Save</button>
           </div>
        </div>
        <div className="btnCondistion">
            <button onClick={(e)=>setChooseCond(0) }>Back</button>
            <button>Join</button>
        </div>
        </> :null}
        {
            ChooseCond == 2 ? <>
              <div className="manage-box">
           <h3>Enter your Team name </h3>
          
          
        
           <div className="membersSelect">

           <TextInput trigger='' options={["apple", "apricot", "banana", "carrot"]} />
           <div className="remove"><div className="line"></div></div>
           </div>

          
        </div>
        <div className="btnCondistion">
            <button onClick={(e)=>setChooseCond(0) }>Back</button>
            <button>Join</button>
        </div>
            </> : null
        }
        
      
        </div>
    </div>
  )
}

export default ConditionGame