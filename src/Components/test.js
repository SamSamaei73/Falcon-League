import React, { useState, useEffect, useRef, useContext } from "react";
import HeaderWithOutLink from "./layouts/HeaderWithOutLink";
import { useHistory } from "react-router-dom";
import Message from "./layouts/Message";
// import AlertContext from '../../context/alert/alertContext';
import AuthContext from "../Context/Auth/authContext";
import { SERVER_URL } from "../components/common/constant";
import axios from "axios";

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

const Register = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [isShowFirstNameError, setisShowFirstNameError] = useState(false);
  const [lastName, setlastName] = useState("");
  const [isShowLastNameError, setisShowLastNameError] = useState(false);
  const [nationalID, setnationalID] = useState("");
  const [isShowNationalIDError, setisShowNationalIDError] = useState(false);
  const [mobileNum, setmobileNum] = useState(null);
  const [isShowMobileNumError, setisShowMobileNumError] = useState(false);
  const [userCaptcha, setuserCaptcha] = useState("");
  const [isShowUserCaptcahError, setisShowUserCaptcahError] = useState(false);
  const [Day, setDay] = useState(null);
  const [Month, setMonth] = useState(null);
  const [Year, setYear] = useState(null);
  const [isShowBirthdayError, setisShowBirthdayError] = useState(false);
  const [passWord, setpassWord] = useState("");
  const [isShowPasswordError, setisShowPasswordError] = useState(false);
  const [repeatPassWord, setrepeatPassword] = useState("");
  const [captcha, setcaptcha] = useState("");
  const [isShowCaptcha, setisShowCaptcha] = useState(false);
  const history = useHistory();

  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  // const { setAlert } = alertContext;
  const {
    firstStepId,
    firstStep,
    verifyNum,
    firstStepOfRegister,
    error,
    clearErrors,
    isAuthenticated,
  } = authContext;

  useEffect(() => {
    setCaptchaForShow(setisShowCaptcha, setcaptcha);
    // firstStep(41);
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      // setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  useEffect(() => {}, []);

  useEffectSkipFirst(() => {
    if (repeatPassWord === passWord) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [repeatPassWord]);

  const RepeatPassWordError = "کلمه عبور با تکرار آن یکسان نمی باشد";
  const FirstNameError = "*";
  const LastNameError = "*";
  const NationalIdError = "*";
  const PassworError = "*";
  const UserCaptchaError = "*";
  const BirthdayError = "*";
  const MobileNumError = "*";
  const passWordChanged = (e) => {
    setpassWord(e.target.value);
  };
  const changeCaptcha = () => {
    axios({
      method: "get",
      url: SERVER_URL + "/getcaptcha", //CreateItemInUser
    }).then(function (response) {
      //console.log(response.data.txt);
      setisShowCaptcha(true);
      setcaptcha(response.data.txt);
      document.getElementById("svg1").innerHTML = response.data.data;
    });
  };
  const createItemInUser = async (user) => {
    await firstStepOfRegister(user);
  };
  const validateAndSend = async (e) => {
    e.preventDefault();
    let user = {
      firstName,
      lastName,
      nationalID,
      mobileNum,
      passWord,
      Day,
      Month,
      Year,
    };

    if (
      firstName &&
      lastName &&
      nationalID &&
      mobileNum &&
      Day &&
      Month &&
      Year &&
      passWord &&
      repeatPassWord &&
      userCaptcha &&
      captcha
    ) {
      if (
        firstName.length > 1 &&
        lastName.length > 1 &&
        nationalID.length > 8 &&
        mobileNum.length > 8 &&
        Day.length > 1 &&
        Month.length > 1 &&
        Year.length > 3 &&
        passWord === repeatPassWord &&
        userCaptcha.toLowerCase() === captcha.toLowerCase()
      ) {
        createItemInUser(user);
      }
    } else {
      if (firstName === null || firstName === "") {
        setisShowFirstNameError(true);
      }
      if (lastName === null || lastName === "") {
        setisShowLastNameError(true);
      }
      if (passWord === null || passWord === "") {
        setisShowPasswordError(true);
      }
      if (nationalID === null || userCaptcha === "") {
        setisShowNationalIDError(true);
      }
      if (userCaptcha === null || userCaptcha === "") {
        setisShowUserCaptcahError(true);
      }
      if (mobileNum === null) {
        setisShowMobileNumError(true);
      }
      if (Day === null || Month === null || Year === null) {
        setisShowBirthdayError(true);
      }
    }
  };
  const repeatPassWordChanged = async (e) => {
    setrepeatPassword(e.target.value);
  };
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "Year":
        setisShowPasswordError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setYear(e.target.value);
        break;

      case "Month":
        setisShowPasswordError(false);
        if (e.target.value.length >= maxNum) {
          let Month = parseInt(e.target.value);
          if (Month > 12) e.target.value = 12;
          e.target.value = e.target.value.slice(0, maxNum);
          setMonth(e.target.value);
        }

        break;
      case "Day":
        setisShowBirthdayError(false);
        if (e.target.value.length >= maxNum) {
          let Month = parseInt(e.target.value);
          if (Month > 31) e.target.value = 31;
          e.target.value = e.target.value.slice(0, maxNum);
          setDay(e.target.value);
        }
        break;
      case "NationalID":
        setisShowNationalIDError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setnationalID(e.target.value);
        break;
      case "MobileNum":
        setisShowMobileNumError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setmobileNum(e.target.value);
        break;
      case "FirstName":
        setisShowFirstNameError(false);
        setfirstName(e.target.value);
        break;
      case "LastName":
        setisShowLastNameError(false);
        setlastName(e.target.value);
        break;
      case "UserCaptcha":
        setisShowUserCaptcahError(false);
        setuserCaptcha(e.target.value);
        break;

      default:
        break;
    }
  };
  function navigateToVerifyMobile() {
    if (firstStepId != null) {
      if (parseInt(firstStepId) > 0) {
        history.push("/MobileVerify");
      }
    }
  }
  return (
    // <div className="animate__animated animate__zoomInDown  animate__delay-5">
    <div className="ltr">
      {firstStepId && navigateToVerifyMobile()}
      <HeaderWithOutLink />
      <header id="home-section " className="mt-2 registerBack">
        <div className="light-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card bg-info text-center card-form">
                    <div className="card-body">
                      <h3>فرم عضویت </h3>
                      <p>برای عضو شدن لطفاً این فرم را پرنمایید</p>
                      <form>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control form-control-lg text-center"
                            placeholder="کدملی"
                            value={nationalID}
                            onChange={(e) => {
                              onChanged(e, "NationalID", 10);
                            }}
                          />
                          {isShowNationalIDError && (
                            <label key="9">{NationalIdError}</label>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="نام"
                            value={firstName}
                            onChange={(e) => {
                              onChanged(e, "FirstName", 2);
                            }}
                          />
                          {isShowFirstNameError && (
                            <label key="2">{FirstNameError}</label>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="نام خانوادگی"
                            value={lastName}
                            onChange={(e) => {
                              onChanged(e, "LastName", 2);
                            }}
                          />
                          {isShowLastNameError && (
                            <label key="3">{LastNameError}</label>
                          )}
                        </div>
                        <div>
                          <label>زاد روز</label>
                          <div className="form-group birthday">
                            <input
                              type="number"
                              className="form-control form-control-lg text-center ml-1"
                              placeholder="سال"
                              onChange={(e) => {
                                onChanged(e, "Year", 4);
                              }}
                            />
                            <input
                              type="number"
                              className="form-control form-control-lg text-center ml-1"
                              placeholder="ماه"
                              onChange={(e) => {
                                onChanged(e, "Month", 2);
                              }}
                            />
                            <input
                              type="number"
                              className="form-control form-control-lg text-center ml-1"
                              placeholder="روز"
                              onChange={(e) => {
                                onChanged(e, "Day", 2);
                              }}
                            />
                          </div>
                          {isShowBirthdayError && (
                            <label key="4">{BirthdayError}</label>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control form-control-lg text-center"
                            placeholder="شماره تلفن همراه"
                            onChange={(e) => onChanged(e, "MobileNum", 12)}
                          />
                          {isShowMobileNumError && (
                            <label key="5">{MobileNumError}</label>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg text-center"
                            placeholder="کلمه عبور "
                            value={passWord}
                            onChange={(e) => passWordChanged(e)}
                          />
                          {isShowPasswordError && (
                            <label key="6">{PassworError}</label>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg text-center"
                            placeholder="تکرار کلمه عبور"
                            value={repeatPassWord}
                            onChange={(e) => {
                              repeatPassWordChanged(e);
                            }}
                          />

                          {isShow && (
                            <label key="1">{RepeatPassWordError}</label>
                          )}
                        </div>
                        <div className="form-group" id="uppersvg">
                          {isShowCaptcha && <div id="svg1"></div>}

                          <div className="refresh" onClick={changeCaptcha}>
                            {" "}
                            <i
                              className="fa fa-refresh d-block"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="هر آنچه درتصویرفوق می بینید وارد نمایید"
                            value={userCaptcha}
                            onChange={(e) => {
                              onChanged(e, "UserCaptcha", 2);
                            }}
                          />
                        </div>

                        <div></div>
                        <input
                          type="button"
                          className="btn btn-outline-light btn-block"
                          value="ارسال"
                          onClick={(e) => {
                            validateAndSend(e);
                          }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-none d-lg-block registerContent">
                  <h1 className="display-8   text-center">
                    در سایت کتابخانه ملی
                  </h1>
                  <div className="d-flex flex-row ">
                    <div className="p-4  align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 text-right mx-auto ">
                      عضو شوید تا بتوانید از خدمات الکترونیکی این سازمان استفاده
                      نمایید
                    </div>
                  </div>

                  <div className="d-flex flex-row ">
                    <div className="p-4 white align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 white align-self-end mx-auto ">
                      و از آخرین اخبار این سازمان آگاه شوید
                    </div>
                  </div>

                  <div className="d-flex flex-row ">
                    <div className="p-4 white align-self-middle">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4  whitetext-center mx-auto ">
                      روش های نوین مرمت اسناد را اطلاع پیدا نمایید
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Register;

function setCaptchaForShow(setisShowCaptcha, setcaptcha) {
  setisShowCaptcha(false);
  axios({
    method: "get",
    url: SERVER_URL + "/getcaptcha",
  }).then(function (response) {
    //console.log(response.data.txt);
    setisShowCaptcha(true);
    setcaptcha(response.data.txt);
    if (response.data.data) {
      if (document.getElementById("svg1") != null) {
        document.getElementById("svg1").innerHTML = response.data.data;
      }
    }
  });
}
