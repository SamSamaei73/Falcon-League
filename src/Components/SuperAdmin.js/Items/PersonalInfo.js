import React, { useContext, useRef, useEffect, useState } from "react";
import Coin from "../../../Images/coins.png";
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

const PersonalInfo = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const {
    personalInfoData,
    switchBetweenUserAndPersonalInfo,
    SetSwitchUsers,
    usersEditByAdmin,
    UpdateUsersByAdmin,
    SetEditUserByAdmin,
    passwordEditByAdmin,
    UpdatePasswordByAdmin,
    SetEditUserPassByAdmin,
    err,
  } = testContext;

  const [Firstname, setFirstname] = useState(null);
  const [Username, setUsername] = useState(null);
  const [Birthdate, setBirthdate] = useState(null);
  const [IDUser, setIDUser] = useState(null);
  const [Password, setPassword] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [showMessage2, setShowMessage2] = useState(null);
  const [showMessage3, setShowMessage3] = useState(null);

  const [City, setCity] = useState(null);

  useEffectSkipFirst(() => {
    if (personalInfoData) {
      let newItem = {};
      setFirstname(personalInfoData.Firstname);
      setBirthdate(personalInfoData.Birthdate);
      setUsername(personalInfoData.Username);
      setCity(personalInfoData.City);
      setIDUser(personalInfoData.id);
    }
  }, [personalInfoData]);

  const sendUserDataPassword = () => {
    let newUser = {};
    if (Password.length > 7 ) {
      newUser.Password = Password;
      newUser.id = IDUser;

      UpdatePasswordByAdmin(newUser);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password should be more than 7 character",
        showConfirmButton: false,
        timer: 1500,
      });
    }

  };
  const sendUserData = () => {
    let newUser = {};
    if (Firstname.length <1 && Username.length < 1) {
      newUser.FirstName = Firstname;
      newUser.Birthdate = Birthdate;
      newUser.Username = Username;
      newUser.City = City;
      newUser.id = IDUser;

      UpdateUsersByAdmin(newUser);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'complete all inputs',
      })
    }
  };

  useEffectSkipFirst(() => {
    if (showMessage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: " Information has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage(false);
    }
  }, [showMessage]);

  useEffectSkipFirst(() => {
    if (usersEditByAdmin) {
      if (usersEditByAdmin.status == true) {
        setShowMessage(true);
        SetEditUserByAdmin(null);
      } else {
        setShowMessage2(true);
        SetEditUserByAdmin(null);
      }
    }
  }, [usersEditByAdmin]);

  useEffectSkipFirst(() => {
    if (showMessage2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: " new Username has been selected before",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage2(false);
    }
  }, [showMessage2]);

  useEffectSkipFirst(() => {
    if (showMessage3) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "new Password has been changed",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowMessage2(false);
    }
  }, [showMessage3]);

  useEffectSkipFirst(() => {
    if (passwordEditByAdmin) {
      if (passwordEditByAdmin.status == true) {
        setShowMessage3(true);
        SetEditUserPassByAdmin(null);
      } 
    }
  }, [passwordEditByAdmin]);

  return (
    <>
      {switchBetweenUserAndPersonalInfo ? null : (
        <div className="PersonalInfo">
          <div className="back">
            <h2>{personalInfoData.Username}</h2>
            <h2
              className="backStyle"
              onClick={(e) => {
                SetSwitchUsers(true);
              }}
            >
              Back
            </h2>
          </div>
          <div className="InputInfo">
            <h4>Personal Information</h4>
            <div className="prsData">
              <div className="item">
                <h5>Full Name</h5>
                <input
                  type="text"
                  value={Firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="item">
                <h5>Date of Birth</h5>

                <input
                  type="Date"
                  value={Birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <div className="item">
                <h5>FLC ID (Username)</h5>
                <input
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="prsData">
              <div className="item">
                <h5>City</h5>
                <input
                  type="text"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="item">
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
          <div className="InputInfo">
            <div className="resetPass">
              <div className="itemPass">
                <h5>New Password</h5>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="itemPass2">
                <button
                  onClick={(e) => {
                    sendUserDataPassword();
                  }}
                >
                  Rest Password
                </button>
              </div>
            </div>
          </div>
          <div className="transaction">
            <h2>All Transactions</h2>
            <h5>Keep track of your earning and spending</h5>
          </div>
          <div className="transStyle">
            <div className="costData">
              <div className="NameInfo">
                <h3>First Tornment Bonus</h3>
                <h5>Transaction id : fvskjvshvsj</h5>
              </div>
              <div className="CoinImg">
                <img src={Coin} alt="Coin" />
                <h3>2000</h3>
              </div>
              <div className="sitution">
                {/* <h4 className='accept'>Completed</h4> */}
                <h4 className="ignore">Unsuccessfull</h4>
              </div>
            </div>
            <div className="costData">
              <div className="NameInfo">
                <h3>First Tornment Bonus</h3>
                <h5>Transaction id : fvskjvshvsj</h5>
              </div>
              <div className="CoinImg">
                <img src={Coin} alt="Coin" />
                <h3>2000</h3>
              </div>
              <div className="sitution">
                <h4 className="accept">Completed</h4>
                {/* <h4 className='ignore'>Unsuccessfull</h4> */}
              </div>
            </div>
            <div className="resetPass">
              <div className="itemPass">
                <h4>Add funds to User Account</h4>
                <div className="boxInput">
                  <input type="text" />
                  <img src={Coin} alt="Coin" />
                </div>
              </div>
              <div className="itemPass2">
                <button>Rest Password</button>
              </div>
            </div>
          </div>
          <div className="activeTitle">
            <h2>Active Tournaments</h2>
            <div className="ActiveAdd">
              <h5>name</h5>
              <div className="boxAdd">
                <h6>warzone</h6>
                <h6 className="larghx">2022-11-21 - 2022-11-24</h6>
                <h6 className="largh">1.67</h6>
                <h6>200$</h6>
                <h6>2000FLC</h6>
                <div className="buttonsDiv">
                  <button>See result</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="activeTitle">
            <h2>Previous Tournaments</h2>
            <div className="ActiveAdd">
              <h5>name</h5>
              <div className="boxAdd">
                <h6>warzone</h6>
                <h6 className="larghx">2022-11-21 - 2022-11-24</h6>
                <h6 className="largh">1.67</h6>
                <h6>200$</h6>
                <h6>2000FLC</h6>
                <div className="buttonsDiv2">
                  <button>See result</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
