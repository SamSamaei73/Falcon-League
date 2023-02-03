import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import Loadingspiner from "../../../Images/Spinner.gif";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import Call from "../../../Images/wz_logogold.png";
import Dota2 from "../../../Images/dotalogo.png";
import Fifa from "../../../Images/whiteFifa.png";
import Valorant from "../../../Images/valorant.png";
import Apex from "../../../Images/Apex.png";

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

const CreateTournamentAd = () => {
  const testContext = useContext(TestContext);
  const [showMessage, setShowMessage] = useState(null);
  // const [selectedGame, setSelectedGame] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedKD, setSelectedKD] = useState(null);
  const [entryFee, setEntryFee] = useState(null);
  const [prize, setPrize] = useState(null);
  const [title, setTitle] = useState(null);
  const [Minutes, setMinutes] = useState(null);
  const [About, setAbout] = useState(null);
  const [Winning, setWinning] = useState(null);
  const [EmptyInput, setEmptyInput] = useState(null);
  const [SelectGame, setSelectGame] = useState(1);
  const [MaxTeamPlayer, setMaxTeamPlayer] = useState(0);

  const [Loading, setLoading] = useState(false);
  const {
    createTournamentData,
    CreateTournament,
    GetActiveTournaments,
    activeTournamentData,
    previousTournamentData,
    deletedTournamentData,
    GetPreviousTournaments,
    SetCreateTournmant,
    err,
  } = testContext;

  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const sendDataToCreateTournament = (e) => {
    if (
      selectedDayRange.from &&
      selectedDayRange.to &&
      SelectGame > 0 &&
      selectedMode > 0 &&
      Minutes.length > 0 &&
      prize &&
      title.length > 0
    ) {
      let newTournament = {};
      newTournament.StartDate =
        selectedDayRange.from.year +
        "-" +
        selectedDayRange.from.month +
        "-" +
        selectedDayRange.from.day;
      newTournament.EndDate =
        selectedDayRange.to.year +
        "-" +
        selectedDayRange.to.month +
        "-" +
        selectedDayRange.to.day;
      newTournament.GameId = SelectGame;
      newTournament.ModeId = selectedMode;
      newTournament.EntryFee = entryFee;
      newTournament.Prize = prize;
      newTournament.Title = title;
      newTournament.Minutes = Minutes;
      newTournament.About = About;
      newTournament.Winning = Winning;
      if (SelectGame == 1) {
        if (selectedKD > 0 && Winning > 0) {
          if (SelectGame == 1) {
            newTournament.KDLimit = selectedKD;
          }
          // newTournament.selectedKD = selectedKD;
          // console.log(newTournament);
          CreateTournament(newTournament);
          setLoading(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You should entry all of inputs",
          });
        }
      } else if (SelectGame == 2) {
        newTournament.MaxTeamPlayer = MaxTeamPlayer;
        //console.log(newTournament);
        CreateTournament(newTournament);
        setLoading(true);
      }
      else if (SelectGame == 3) {
        CreateTournament(newTournament);
        setLoading(true);

      } else {
        console.log(
          selectedDayRange.from,
          selectedDayRange.to,
          SelectGame,
          selectedMode,
          selectedKD,
          Minutes,
          prize,
          title
        );
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You should entry all of inputs",
        });
      }
    }
  };

  useEffectSkipFirst(() => {
    if (createTournamentData) {
      GetActiveTournaments();
      setLoading(false);
      setShowMessage(true);
      SetCreateTournmant(null);
    }
  }, [createTournamentData]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        text: " Tournament has been created.",
        icon: "success",
      });
      setShowMessage(false);
      clearInputsForm();
      setLoading(false);
      GetActiveTournaments();
    }
  }, [showMessage]);

  const clearInputsForm = () => {
    setSelectGame(0);
    setTitle("");
    setSelectedMode(0);
    setMaxTeamPlayer(0);
    setSelectedKD("");
    setMinutes("");
    setWinning("");
    setEntryFee("");
    setPrize("");
    setAbout("");
  };

  const EditTournamentData = (data) => {
    setSelectGame(data.GameId);
    setTitle("");
    setSelectedMode(0);
    setMaxTeamPlayer(0);
    setSelectedKD("");
    setMinutes("");
    setWinning("");
    setEntryFee("");
    setPrize("");
    setAbout("");
  };

  return (
    <div className="TournamentAd">
      <div className="Tab-select">
        <div
          className={SelectGame == 1 ? "item active2" : "item"}
          onClick={(e) => setSelectGame(1)}
        >
          <img src={Call} alt="Call of duty" />
        </div>
        <div
          className={SelectGame == 2 ? "item active2" : "item"}
          onClick={(e) => setSelectGame(2)}
        >
          <img className="Dota2" src={Dota2} alt="Dota2" />
        </div>
        <div
          className={SelectGame == 3 ? "item active2" : "item"}
          onClick={(e) => setSelectGame(3)}
        >
          <img className="Fifa" src={Fifa} alt="Fifa" />
        </div>
        <div
          className={SelectGame == 4 ? "item active2" : "item"}
          onClick={(e) => setSelectGame(4)}
        >
          <img className="Valorant" src={Valorant} alt="Valorant" />
        </div>
        <div
          className={SelectGame == 5 ? "item active2" : "item"}
          onClick={(e) => setSelectGame(5)}
        >
          <img className="Apex" src={Apex} alt="Apex" />
        </div>
      </div>
      <div className={Loading ? "loadingPage" : "loadingPageH"}>
        <img src={Loadingspiner} alt="Loading" />
      </div>

      {SelectGame == 1 ? (
        <div className="MainCreateCall">
          <div className="infoSimple">
            {/* <div className="item">
              <h5>Game</h5>
              <select
                value={selectedGame}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setSelectedGame(e.target.value);
                  }
                }}
              >
                <option value={0}>Select Game</option>
                <option value={1}>Warzone</option>
                <option value={2}>Dota</option>
                <option value={3}>Fifa</option>
                <option value={4}>Valorant</option>
                <option value={5}>Apex</option>
              </select>
            </div> */}
            <div className="item">
              <h5>Tournament Title</h5>
              <input
                value={title}
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
              <h5>KD Limit</h5>
              <input
                type="number"
                value={selectedKD}
                onChange={(e) => setSelectedKD(e.target.value)}
                min="0"
                max="6"
                maxLength="1"
                onWheel={(e) => e.target.blur()}
              />
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
              <h5>Winning Condition</h5>
              <input
                type="number"
                value={Winning}
                onChange={(e) => setWinning(e.target.value)}
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
          <div className="item">
            <button
              className="btnCreate"
              onClick={(e) => {
                sendDataToCreateTournament();
              }}
            >
              Create
            </button>
          </div>
        </div>
      ) : null}
      {SelectGame == 2 ? (
        <div className="MainCreateCall">
          <div className="infoSimple">
            <div className="item">
              <h5>Tournament Title</h5>
              <input
                value={title}
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
            <div className="item">
              <h5>Max Number of Teams/Player</h5>
              <input
                value={MaxTeamPlayer}
                onChange={(e) => setMaxTeamPlayer(e.target.value)}
                type="number"
                onWheel={(e) => e.target.blur()}
              />
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
          <div className="item">
            <button
              className="btnCreate"
              onClick={(e) => {
                sendDataToCreateTournament();
              }}
            >
              Create
            </button>
          </div>
        </div>
      ) : null}
      {SelectGame == 3 ? (
        <div className="MainCreateCall">
          <div className="infoSimple">
            <div className="item">
              <h5>Tournament Title</h5>
              <input
                value={title}
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
                {/* <option value={2}>Duos</option>
                <option value={3}>Trios</option>
                <option value={4}>Quad</option> */}
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
              <h5>Winning Condition</h5>
              <input
                type="number"
                value={Winning}
                onChange={(e) => setWinning(e.target.value)}
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
          <div className="item">
            <button
              className="btnCreate"
              onClick={(e) => {
                sendDataToCreateTournament();
              }}
            >
              Create
            </button>
          </div>
        </div>
      ) : null}
      {SelectGame == 4 ? (
        <div className="MainCreateCall">
          <div className="infoSimple">
            <div className="item">
              <h5>Game2</h5>
              <select
                value={SelectGame}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setSelectGame(e.target.value);
                  }
                }}
              >
                <option value={0}>Select Game</option>
                <option value={1}>Warzone</option>
                <option value={2}>Dota</option>
                <option value={3}>Fifa</option>
                <option value={4}>Valorant</option>
                <option value={5}>Apex</option>
              </select>
            </div>
            <div className="item">
              <h5>Tournament Title</h5>
              <input
                value={title}
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
              <h5>KD Limit</h5>
              <input
                type="number"
                value={selectedKD}
                onChange={(e) => setSelectedKD(e.target.value)}
                min="0"
                max="6"
                maxLength="1"
                onWheel={(e) => e.target.blur()}
              />
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
              <h5>Winning Condition</h5>
              <input
                type="number"
                value={Winning}
                onChange={(e) => setWinning(e.target.value)}
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
          <div className="item">
            <button
              className="btnCreate"
              onClick={(e) => {
                sendDataToCreateTournament();
              }}
            >
              Create
            </button>
          </div>
        </div>
      ) : null}
      {SelectGame == 5 ? (
        <div className="MainCreateCall">
          <div className="infoSimple">
            <div className="item">
              <h5>Game2</h5>
              <select
                value={SelectGame}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setSelectGame(e.target.value);
                  }
                }}
              >
                <option value={0}>Select Game</option>
                <option value={1}>Warzone</option>
                <option value={2}>Dota</option>
                <option value={3}>Fifa</option>
                <option value={4}>Valorant</option>
                <option value={5}>Apex</option>
              </select>
            </div>
            <div className="item">
              <h5>Tournament Title</h5>
              <input
                value={title}
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
              <h5>KD Limit</h5>
              <input
                type="number"
                value={selectedKD}
                onChange={(e) => setSelectedKD(e.target.value)}
                min="0"
                max="6"
                maxLength="1"
                onWheel={(e) => e.target.blur()}
              />
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
              <h5>Winning Condition</h5>
              <input
                type="number"
                value={Winning}
                onChange={(e) => setWinning(e.target.value)}
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
          <div className="item">
            <button
              className="btnCreate"
              onClick={(e) => {
                sendDataToCreateTournament();
              }}
            >
              Create
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreateTournamentAd;
