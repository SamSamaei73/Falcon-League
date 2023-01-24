import React, { useContext, useRef, useEffect, useState } from "react";
import TestContext from "../Context/testContext";
import AuthContext from "../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import HeaderGame from "./Items/HeaderGame";
import "../Scss/Login.scss";
import Confirm from "../Images/confirmation.png";
import PopupAlert from "./Items/PopupAlert";
import ForgetPass from "./Items/ForgetPass";
import { NavLink } from "react-router-dom";
import Spinner from "../Images/Spinner.gif";

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

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPasswrod, setConfirmpasswrod] = useState(null);
  const [showErrorForPass, setShowErrorForPass] = useState(null);
  const [showError, setShowError] = useState(null);
  const [Focuse, setFocuse] = useState(false);
  const [Birthdatetype, setBirthdatetype] = useState("text");
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [userid, setUserid] = useState(null);
  const [realPass, setRealPass] = useState(null);
  const [showErrorForEmail, setShowErrorForEmail] = useState(null);
  const [showErrorForLogin, setShowErrorForLogin] = useState(null);
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [prsCode, setPrsCode] = useState(null);
  const [EmptyInput, setEmptyInput] = useState(null);
  const [ConditionInput, setConditionInput] = useState(null);
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const {
    CreateItemInUser,
    createdItemInUserData,
    SetPopup,
    popupAlertData,
    GetCountries,
    countriesData,
  } = testContext;
  const { user, login, isAuthenticated, error } = authContext;
  useEffectSkipFirst(() => {
    if (confirmPasswrod === password) {
      setShowErrorForPass(false);
    } else {
      setShowErrorForPass(true);
    }
  }, [confirmPasswrod]);
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const sendData = () => {
    let newUser = {};
    newUser.Username = username;
    newUser.Password = password;
    newUser.Email = email;
    newUser.Country = country;
    newUser.Birthdate = birthdate;
    if (username && password && email && country && birthdate) {
      if (
        username.length > 1 &&
        isEmail(email) &&
        country.length > 1 &&
        birthdate.length > 9 &&
        password.length > 7 &&
        password === confirmPasswrod
      ) {
        CreateItemInUser(newUser);
      }
    } else {
      if (password !== confirmPasswrod) {
        setShowErrorForPass(true);
      } else if (!isEmail(email)) {
        setShowErrorForEmail(true);
      } else {
        setShowError(true);
      }
    }
  };
  const Signin = () => {
    let newUser = {};
    newUser.Username = userid;
    newUser.Password = realPass;
    if (!userid || !realPass) {
      setEmptyInput(true);
    } else if (userid.length < 1 || realPass.length < 8) {
      setConditionInput(true);
    } else {
      login(newUser);
      setLoading(true);
    }
  };
  useEffect(() => {
    GetCountries();
  }, []);

  useEffectSkipFirst(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    setLoading(false);
  }, [isAuthenticated]);
  useEffectSkipFirst(() => {
    if (error) {
      console.log("error happend in login ");
      setLoading(false);
    }
  }, [error]);

  useEffectSkipFirst(() => {
    if (createdItemInUserData) {
      SetPopup(true);
      setLoading(true);

    }
  }, [createdItemInUserData]);

  useEffectSkipFirst(() => {
    if (email) {
      if (!isEmail(email)) {
        setShowErrorForEmail(true);
      }
    }
  }, [email]);

  useEffectSkipFirst(() => {
    if (error) {
      setShowErrorForLogin(true);
    }
  }, [error]);

  const changefocuse = () => {
    setFocuse(true);
    setBirthdatetype("date");
  };

  const handeleKeyDown = (event) => {
    if (event.key === "Enter") {
      Signin(event);
      setLoading(true);
    }
  };

  return (
    <div id="Login">
      <div className={Loading ? "spineer" : "spineerH"}>
        <img src={Spinner} alt="Spinner" />
      </div>
      {popupAlertData ? <PopupAlert /> : null}
      <HeaderGame />
      <div className="mainLog">
        <div className="block">
          <p className="primaryText">SIGN UP</p>
          <div className="signBox">
            <h4>CREATE NEW ACCOUNT</h4>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => {
                setShowError(false);
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setShowError(false);
                setShowErrorForEmail(false);
                setEmail(e.target.value);
              }}
            />
            <select
              onChange={(e) => {
                setShowError(false);
                setCountry(e.target.value);
              }}
            >
              {countriesData
                ? countriesData.map((item) => {
                    return (
                      <option value={item.id + ":" + item.Country}>
                        {item.Country}
                      </option>
                    );
                  })
                : []}
            </select>
            <input
              type={Birthdatetype}
              onFocus={(e) => changefocuse()}
              placeholder="Birth Date"
              value={birthdate}
              onChange={(e) => {
                setShowError(false);
                setBirthdate(e.target.value);
              }}
              autoSave={false}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setShowErrorForPass(false);
                setPassword(e.target.value);
              }}
              minLength={8}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPasswrod}
              onChange={(e) => {
                setShowErrorForPass(false);
                setConfirmpasswrod(e.target.value);
              }}
              minLength={8}
            />
            <div className="buttonDiv">
              <button
                onClick={(e) => {
                  sendData(e);
                }}
              >
                Sign Up
              </button>
            </div>
            {showError ? (
              <label className="labelError">
                Note: All of the inputs should have value
              </label>
            ) : null}
            {showErrorForPass ? (
              <label className="labelError">
                Note: Your password and confirm password are not equal
              </label>
            ) : null}
            {showErrorForEmail ? (
              <label className="labelError">Note: Wrong Email format</label>
            ) : null}
          </div>
        </div>
        <div className="block">
          <p>SIGN IN</p>
          <div className="signBox">
            <h4>ENTER YOUR USER PANEL</h4>
            <input
              type="username"
              placeholder="User Name"
              value={userid}
              onKeyDown={handeleKeyDown}
              onChange={(e) => {
                setShowErrorForLogin(false);
                setUserid(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={realPass}
              onKeyDown={handeleKeyDown}
              onChange={(e) => {
                setShowErrorForLogin(false);
                setRealPass(e.target.value);
              }}
            />
            {showErrorForLogin ? (
              <label className="labelError">
                Your Username or Password is incorrect
              </label>
            ) : null}
            {EmptyInput ? (
              <label className="labelError">
                Username and Password required
              </label>
            ) : null}
            {ConditionInput ? (
              <label className="labelError">
                Password Should more than 8 character
              </label>
            ) : null}
            <NavLink className="forgetText" to="/ForgetPass">
              Forget Your Password?
            </NavLink>

            <div className="buttonDiv">
              <button
                onClick={(e) => {
                  Signin(e);
                  // findPrsNumbByNationalId(e);
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
