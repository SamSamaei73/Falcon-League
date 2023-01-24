import React, { useEffect, useRef, useContext, useState } from "react";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import "../../../Scss/Manage.scss";
import Allert from "../../../Images/Attention.png";

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
const EditSolo = ({ Id }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { SetSwitchUsers, GetTournamentById, tournamentByIdData } = testContext;
  const [data, setData] = useState(null);

  useEffect(() => {

    console.log("tourid", Id);
    // setShow(false);
    GetTournamentById(Id);
    // setTimeout(() => {
    //   setShow(true);

    // }, 2);
  }, []);

  
  useEffectSkipFirst(() => {
    if (tournamentByIdData) {
      // console.log("tourdata111:", tournamentByIdData);
      setData(tournamentByIdData);
      if (data) {

        setTitle(data.Title);
        setSelectedMode(data.ModeId);
        setMinutes(data.Minutes);
        setEntryFee(data.EntryFee);
        setPrize(data.Prize);
        setAbout(data.About);
        let fromData = {};
        let toData = {};
        if (data.StartDate) {
          let dateStr = data.StartDate.split("-");
          let year = dateStr[0];
          let month = dateStr[1];
          let day = dateStr[2];
          // console.log("startdate", year, month, day);
          fromData.year = year;
          fromData.month = month;
          fromData.day = day;
        }
        if (data.EndDate) {
          let dateStr = data.EndDate.split("-");
          let year = dateStr[0];
          let month = dateStr[1];
          let day = dateStr[2];
          toData.year = year;
          toData.month = month;
          toData.day = day;
        }
        setSelectedDayRange({
          from: fromData,
          to: toData,
        });

      }
    }
  }, [tournamentByIdData]);
  useEffectSkipFirst(() => {
    if (data) {

      setTitle(data.Title);
      setSelectedMode(data.ModeId);
      setMinutes(data.Minutes);
      setEntryFee(data.EntryFee);
      setPrize(data.Prize);
      setAbout(data.About);
      let fromData = {};
      let toData = {};
      if (data.StartDate) {
        let dateStr = data.StartDate.split("-");
        let year = dateStr[0];
        let month = dateStr[1];
        let day = dateStr[2];
        // console.log("startdate", year, month, day);
        fromData.year = year;
        fromData.month = month;
        fromData.day = day;
      }
      if (data.EndDate) {
        let dateStr = data.EndDate.split("-");
        let year = dateStr[0];
        let month = dateStr[1];
        let day = dateStr[2];
        toData.year = year;
        toData.month = month;
        toData.day = day;
      }
      setSelectedDayRange({
        from: fromData,
        to: toData,
      });

    }
  }, [data]);
  const [Title, setTitle] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [Minutes, setMinutes] = useState(null);
  const [entryFee, setEntryFee] = useState(null);
  const [prize, setPrize] = useState(null);
  const [About, setAbout] = useState(null);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });


  return (
    <div className="EditSolo">
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
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </div>
          <div className="item">
            <h5>Mode</h5>
            <select
              value={selectedMode}
              onChange={(e) => {
                if (e.target.value > 0) {
                  setSelectedMode(e.target.value);
                }
              }}
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
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              inputPlaceholder="Select a day range"
              shouldHighlightWeekends
              minimumDate={utils().getToday()}
            />
          </div>
          <div className="item">
            <h5>Time (per hour)</h5>
            <input
              type="number"
              value={Minutes}
              onChange={(e) => setMinutes(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="item">
            <h5>Entry Fee</h5>
            <div className="inputWsymbol">
              <input
                value={entryFee}
                onChange={(e) => setEntryFee(e.target.value)}
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
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
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
              value={About}
              onChange={(e) => setAbout(e.target.value)}
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
        <h3>Solo Score Tournament System</h3>
        <div className="boxSolo">
          <div className="rowScore">
            <h3>Kills</h3>
            <div className="showData Posetive">
              <h5>+ 4 Point</h5>
            </div>
          </div>
          <div className="rowScore">
            <h3>Deaths</h3>
            <div className="showData Negative">
              <h5 className="ColorRed">- 4 Point</h5>
            </div>
          </div>
          <div className="rowScore">
            <h3>Assists</h3>
            <div className="showData Posetive">
              <h5>+ 4 Point</h5>
            </div>
          </div>
          <div className="rowScore">
            <h3>Last Hits</h3>
            <div className="showData Posetive">
              <h5>+ 4 Point</h5>
            </div>
          </div>
          <div className="rowScore">
            <h3>Hero Damage</h3>
            <div className="showData Posetive">
              <h5>+ 4 Point</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSolo;
