import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../../../Context/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

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

const Location = () => {
  const testContext = useContext(TestContext);
  const [country, setCountry] = useState(null);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;

  const {
    GetCountries,
    countriesData,
    userInfoData,
    GetUserInfo,
    updateUserData,
    UpdateUserLocation,
    SetUserlocation,
    updateUserLocationData,
  } = testContext;

  const [DataUser, setDataUser] = useState(null);
  const [CountryId, setCountryId] = useState(null);
  const [City, setCity] = useState(null);
  const [showMessage, setShowMessage] = useState(null);

  useEffect(() => {
    GetCountries();
    GetUserInfo();
  }, []);

  useEffectSkipFirst(() => {
    if (userInfoData) {
      let newItem = {};
      setCountryId(userInfoData.CountryId);
      setCity(userInfoData.City);

      // return newItem;
      setDataUser(newItem);
    }
  }, [userInfoData]);

  const sendUserData = () => {
    let newUser = {};
    newUser.CountryId = parseInt(CountryId);
    newUser.City = City;

    UpdateUserLocation(newUser);
  };
  useEffectSkipFirst(() => {
    if (updateUserLocationData) {
      {
        setShowMessage(true);
        SetUserlocation(null);
      }
    }
  }, [updateUserLocationData]);

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Location has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  return (
    <div className="Setiings">
      <div className="Title">
        <h4>Your Location</h4>
      </div>
      <div className="PersonalEdit">
        <div className="item">
          <h5>Country</h5>
          <select
            value={CountryId}
            onChange={(e) => {
              setCountryId(e.target.value);
            }}
          >
            {countriesData
              ? countriesData.map((item) => {
                  return <option value={item.id}>{item.Country}</option>;
                })
              : []}
          </select>
        </div>
        <div className="item">
          <h5>City</h5>
          <input
            type="Text"
            value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="itemEtra">
          <button
            onClick={(e) => {
              sendUserData();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
