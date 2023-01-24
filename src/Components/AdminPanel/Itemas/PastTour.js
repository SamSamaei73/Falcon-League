import React, { useContext, useRef, useEffect, useState } from "react";
import Warzone from "../../../Images/icon-wz-white.png";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";

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

const PastTour = ({ Logo, logoStyle }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { GetPreviousTournamentsById, perviousDataTournamentsUser, err } =
    testContext;
  const { user, login, isAuthenticated, logout } = authContext;

  const [PastDataTour, setPastDataTour] = useState([]);

  useEffect(() => {
    GetPreviousTournamentsById(user.id);
    console.log("use",user);
  }, []);

  useEffectSkipFirst(() => {
    if (perviousDataTournamentsUser) {
      let newData = perviousDataTournamentsUser.map((item) => {
        let newItem = {};
        newItem.Id = item.Id;
        newItem.Title = item.Title;
        newItem.Prize = item.Prize;
        newItem.Rank = item.Rank;
        newItem.type = NamePlatformById(item.type);

        return newItem;
      });
      setPastDataTour(newData);
    }
  }, [perviousDataTournamentsUser]);

  const NamePlatformById = (id) => {
    switch (id) {
      case 1:
        return "Pc";
        break;
      case 2:
        return "Playstation";
        break;
      case 3:
        return "Xbox";
        break;

      default:
        break;
    }
  };

  return (
    <div className="PastTour">
      <div className="title">
        <h4>Past Tournaments</h4>
        <h6>Tournaments i've played before</h6>
      </div>
      {PastDataTour.map((item, id) => (
        <section>
          <div className="photo">
            <img src={Logo} alt="Warzone" style={logoStyle} />
          </div>
          <div className="info">
            <h5>{item.Title}</h5>
            <h6>{item.Id} | {item.type}</h6>
          </div>
          <div className="sitotion">
            <h5>Finished</h5>
          </div>
          <div className="Prize">
            <h5>Prize Pool</h5>
            <h5>{item.Prize} $</h5>
          </div>
          <div className="Rank">
            <h5>Rank</h5>
            <h5>{item.Rank}#</h5>
          </div>
        </section>
      ))}

      <div className="Seemore">
        <h4>View More</h4>
      </div>
    </div>
  );
};

export default PastTour;
