import React from 'react';
import { Calendar, utils } from "react-modern-calendar-datepicker";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import '../../../Scss/Manage.scss';
import Allert from '../../../Images/Attention.png';

const EditSolo = () => {
  return (
    <div className='EditSolo'>
      {/* <div className="CloseAllert">
        <div className="Allert">
          <img src={Allert} alt="Allert" />
          <h4>Are you sure you want to close the Tournament?</h4>
          <div className="btn">
            <button>Cancel</button>
            <button>Close</button>
          </div>
        </div>
      </div> */}
      <div className="MainCreateCall">
        <div className="infoSimple">

          <div className="item">
            <h5>Tournament Title</h5>
            <input
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </div>
          <div className="item">
            <h5>Mode</h5>
            <select
            // value={selectedMode}
            // onChange={(e) => {
            //   if (e.target.value > 0) {
            //     setSelectedMode(e.target.value);
            //   }
            // }}
            >
              <option value={0}>Select Mode</option>
              <option value={1}>Solo </option>
              <option value={2}>Duos</option>
              <option value={3}>Trios</option>
              <option value={4}>Quad</option>
            </select>
          </div>

          <div className="item">
            <h5>Date</h5>
            <DatePicker
              // value={selectedDayRange}
              // onChange={setSelectedDayRange}
              inputPlaceholder="Select a day range"
              shouldHighlightWeekends
              minimumDate={utils().getToday()}
            />
          </div>
          <div className="item">
            <h5>Time (per hour)</h5>
            <input
              type="number"
            // value={Minutes}
            // onChange={(e) => setMinutes(e.target.value)}
            // onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="item">
            <h5>Entry Fee</h5>
            <div className="inputWsymbol">
              <input
                // value={entryFee}
                // onChange={(e) => setEntryFee(e.target.value)}
                type="number"
                onWheel={(e) => e.target.blur()}
              />
              <h6>FLC Coin</h6>
            </div>
          </div>
          <div className="item">
            <h5>Prize</h5>
            <div className="inputWsymbol">
              <input
                // value={prize}
                // onChange={(e) => setPrize(e.target.value)}
                type="number"
                onWheel={(e) => e.target.blur()}
              />
              <h6>$</h6>
            </div>
          </div>
        </div>
        <div className="TextBoxSection">
          <div className="item">
            <h5>About Tournament</h5>
            <textarea
              className="BoxInfo"
            // value={About}
            // onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="itemBtn">
          <button
            className="btnCreate"
          // onClick={(e) => {
          //   sendDataToCreateTournament();
          // }}
          >
            Close
          </button>
          <button
            className="btnCreate"
          // onClick={(e) => {
          //   sendDataToCreateTournament();
          // }}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="boc-Info">
        <h3>Team Score Tournament System</h3>
        <h4 className="box">
          The Tournament will be as Playout and Knockout System. Admin will create each match of the tournament between both team .<br /> After each matchwill choose the Result (<span> Win </span> / <span> Lose </span>) and continue the tournament until the final match.
        </h4>
      </div>
    </div>
  )
}

export default EditSolo