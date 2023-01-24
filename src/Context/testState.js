import React, { useReducer } from "react";
import axios from "axios";
import TestContext from "./testContext";
import TestReducer from "./testReducer";
import { SERVER_URL } from "./constant";
import interceptorForAxios from "../Components/Tools/setAuthToken";
import {
  CREATE_ITEM_IN_USER_SUCCESS,
  CREATE_ITEM_IN_USER_FAIL,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  SET_POPUP,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  UPDATE_VERIFICATION_SUCCESS,
  UPDATE_VERIFICATION_FAIL,
  SEND_EMAIL_FOR_CHANGE_PASSWORD_SUCCESS,
  SEND_EMAIL_FOR_CHANGE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SPECIFIC_USER_FAIL,
  UPDATE_PASSWORD_SPECIFIC_USER_SUCCESS,
  SET_SHOW_GAME_ITEMS_SUCCESS,
  SET_DISPLAY_RFP_SUCCESS,
  CREATE_DATA_USER_SUCCESS,
  CREATE_DATA_USER_FAIL,
  SET_USERNAMEGAME,
  GET_GAME_ID_INFO_SUCCESS,
  GET_GAME_ID_INFO_FAIL,
  DELETE_GAME_ID_SUCCESS,
  DELETE_GAME_ID_FAIL,
  CREATE_TOURNAMENT_SUCCESS,
  CREATE_TOURNAMENT_FAIL,
  ACTIVE_TOURNAMENT_SUCCESS,
  ACTIVE_TOURNAMENT_FAIL,
  PREVIOUS_TOURNAMENT_SUCCESS,
  PREVIOUS_TOURNAMENT_FAIL,
  DELETE_TOURNAMENT_SUCCESS,
  DELETE_TOURNAMENT_FAIL,
  CREATE_REGISTER_GAME_SUCCESS,
  CREATE_REGISTER_GAME_FAIL,
  GET_REGISTER_USER_TOURNAMENT_SUCCESS,
  GET_REGISTER_USER_TOURNAMENT_FAIL,
  START_TOURNAMENT_SUCCESS,
  START_TOURNAMENT_FAIL,
  SET_START_TOURNAMENT,
  SET_REGISTER_TOURNAMENT,
  SET_CREATE_TOURNAMENT,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAIL,
  SET_USER_SETTING,
  SET_GAME_ID_DELETED_TOURNAMENT,
  SET_USER_LOCATIN_TOURNAMENT,
  UPDATE_USER_LOCATION_SUCCESS,
  UPDATE_USER_LOCATIONO_FAIL,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
  SET_USER_PASSWORD,
  GET_ALL_USER_FALCON_SUCCESS,
  GET_ALL_USER_FALCON_FAIL,
  SET_SWITCH_USERS,
  SET_PERSONAL_INFO,
  UPDATE_USERS_BY_ADMIN_SUCCESS,
  UPDATE_USERS_BY_ADMIN_FAIL,
  SET_EDIT_USER_SETTING,
  UPDATE_PASSWORD_BY_ADMIN_SUCCESS,
  UPDATE_PASSWORD_BY_ADMIN_FAIL,
  SET_EDIT_USER_PASS_SETTING,
  GET_TOURNAMENT_BY_ID_SUCCESS,
  GET_TOURNAMENT_BY_ID_FAIL,
  GET_RANK_POINT_TOURNAMENT_SUCCESS,
  GET_RANK_POINT_TOURNAMENT_FAIL,
  GET_PREVIOUS_TOURNAMENTS_SUCCESS,
  GET_PREVIOUS_TOURNAMENTS_FAIL,
} from "./types";

const TestState = (props) => {
  interceptorForAxios();
  const initialState = {
    // token: localStorage.getItem("token"),

    token: localStorage.getItem("accessToken"),
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    loading: localStorage.getItem("loading"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    err: localStorage.getItem("error"),

    err: null,
    selectedDate: null,
    createdItemInUserData: null,
    userByIdData: null,
    logedinUserData: null,
    popupAlertData: null,
    countriesData: null,
    updateVerificationData: null,
    sendEmailForChangePasswordData: null,
    updatePasswordSpecificUserData: null,
    ShowGameItem: null,
    checkUserData: null,
    usernameGameData: null,
    gameIdInfoData: null,
    // isAuthenticated: null,
    deleteGameIdData: null,
    // loading: false,
    // user: null,
    createTournamentData: null,
    activeTournamentData: [],
    previousTournamentData: [],
    deletedTournamentData: null,
    registerGameUserData: null,
    registerForThisGameData: null,
    startTournmentData: null,
    setCreateTournamennull: null,
    userInfoData: null,
    updateUserData: null,
    updateUserLocationData: null,
    updateUserPasswordData: null,
    allUserFalconData: null,
    personalInfoData: null,
    switchBetweenUserAndPersonalInfo: true,
    usersEditByAdmin: null,
    passwordEditByAdmin: null,
    tournamentByIdData: null,
    rankAndPoinOfTournaments: null,
    perviousDataTournamentsUser: null,
  };

  const [state, dispatch] = useReducer(TestReducer, initialState);
  const SetShowGamelItems = async (showorhide, displayStyle) => {
    dispatch({
      type: SET_SHOW_GAME_ITEMS_SUCCESS,
      payload: showorhide,
    });

    dispatch({
      type: SET_DISPLAY_RFP_SUCCESS,
      payload: displayStyle,
    });
  };
  const SetUsername = async (data) => {
    try {
      await dispatch({
        type: SET_USERNAMEGAME,
        payload: data,
      });
    } catch (err) {}
  };

  const SetPersonalInfo = async (data) => {
    try {
      await dispatch({
        type: SET_PERSONAL_INFO,
        payload: data,
      });
    } catch (err) {}
  };

  const SetSwitchUsers = async (data) => {
    try {
      await dispatch({
        type: SET_SWITCH_USERS,
        payload: data,
      });
    } catch (err) {}
  };
  const SetPopup = async (data) => {
    try {
      await dispatch({
        type: SET_POPUP,
        payload: data,
      });
    } catch (err) {}
  };
  const SetStartTournament = async (data) => {
    try {
      await dispatch({
        type: SET_START_TOURNAMENT,
        payload: null,
      });
    } catch (err) {}
  };
  const SetUserlocation = async (data) => {
    try {
      await dispatch({
        type: SET_USER_LOCATIN_TOURNAMENT,
        payload: null,
      });
    } catch (err) {}
  };

  const SetRegisterTournament = async (data) => {
    try {
      await dispatch({
        type: SET_REGISTER_TOURNAMENT,
        payload: null,
      });
    } catch (err) {}
  };
  const SetGameIdDeletedAlert = async (data) => {
    try {
      await dispatch({
        type: SET_GAME_ID_DELETED_TOURNAMENT,
        payload: null,
      });
    } catch (err) {}
  };

  const SetEditUserPassByAdmin = async (data) => {
    try {
      await dispatch({
        type: SET_EDIT_USER_PASS_SETTING,
        payload: null,
      });
    } catch (err) {}
  };

  const SetEditUserByAdmin = async (data) => {
    try {
      await dispatch({
        type: SET_EDIT_USER_SETTING,
        payload: null,
      });
    } catch (err) {}
  };

  const SetUserSetting = async (data) => {
    try {
      await dispatch({
        type: SET_USER_SETTING,
        payload: null,
      });
    } catch (err) {}
  };

  const SetCreateTournmant = async (data) => {
    try {
      await dispatch({
        type: SET_CREATE_TOURNAMENT,
        payload: null,
      });
    } catch (err) {}
  };
  const SetUserPassword = async (data) => {
    try {
      await dispatch({
        type: SET_USER_PASSWORD,
        payload: null,
      });
    } catch (err) {}
  };

  const loadUser = async () => {
    //  setAuthToken(localStorage.token);

    try {
      const res = await axios.get(SERVER_URL + "/auth");
      console.log("auth data res", res.data);
      await dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  const CheckUserExist = async (frmData) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CheckUserExist/",
        frmData,
        config
      );
      dispatch({
        type: CREATE_DATA_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_DATA_USER_FAIL,
        payload: err,
      });
    }
  };
  const CreateItemInUser = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateItemInUser/",
        frmData,
        config
      );
      dispatch({
        type: CREATE_ITEM_IN_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_ITEM_IN_USER_FAIL,
        payload: err,
      });
    }
  };
  const UpdatePasswordByAdmin = async (frmData) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdatePasswordSpecificUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_PASSWORD_BY_ADMIN_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_PASSWORD_BY_ADMIN_FAIL,
        payload: err,
      });
    }
  };
  const UpdateUsersByAdmin = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUserForAdmin",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_USERS_BY_ADMIN_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_USERS_BY_ADMIN_FAIL,
        payload: err,
      });
    }
  };
  const UpdateUserPassword = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_USER_PASSWORD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_USER_PASSWORD_FAIL,
        payload: err,
      });
    }
  };
  const UpdateUserLocation = async (frmData) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_USER_LOCATION_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_USER_LOCATIONO_FAIL,
        payload: err,
      });
    }
  };
  const UpdateUserInfo = async (frmData) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_USER_INFO_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_USER_INFO_FAIL,
        payload: err,
      });
    }
  };
  const DeleteTournament = async (frmData) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/DeleteTournament/",
        frmData,
        config
      );
      dispatch({
        type: DELETE_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: DELETE_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };

  const GetUserInfo = async () => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetUserInfo/", config);
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_USER_INFO_FAIL,
        payload: err,
      });
    }
  };
  const GetAllUserFalcon = async () => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetAllUsers/", config);
      dispatch({
        type: GET_ALL_USER_FALCON_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_ALL_USER_FALCON_FAIL,
        payload: err,
      });
    }
  };
  const GetRegisterTournment = async () => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/RegisteredTournmentsForThisUser/",
        config
      );
      dispatch({
        type: GET_REGISTER_USER_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_REGISTER_USER_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const GetPreviousTournaments = async (id) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetPreviousTournaments/" + id,
        config
      );
      dispatch({
        type: PREVIOUS_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: PREVIOUS_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const GetPreviousTournamentsById = async (id) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetPreviousTournamentsByUserId/" + id,
        config
      );
      dispatch({
        type: GET_PREVIOUS_TOURNAMENTS_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_PREVIOUS_TOURNAMENTS_FAIL,
        payload: err,
      });
    }
  };
  const GetRankAndPointOfTournament = async (id) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetRankAndPointOfTournament/" + id,
        config
      );
      dispatch({
        type: GET_RANK_POINT_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_RANK_POINT_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const GetActiveTournaments = async (id) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetActiveTournaments/" + id,
        config
      );
      dispatch({
        type: ACTIVE_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: ACTIVE_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const RegisterUserForGame = async (frmData) => {
    //  setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/RegisterTournmentForThisUser/",
        frmData,
        config
      );
      dispatch({
        type: CREATE_REGISTER_GAME_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_REGISTER_GAME_FAIL,
        payload: err,
      });
    }
  };
  const StartTournment = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/StartTournmentForThisUser/",
        frmData,
        config
      );
      dispatch({
        type: START_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: START_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const CreateTournament = async (frmData) => {
    // setAuthToken(localStorage.token);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateTournament/",
        frmData,
        config
      );
      dispatch({
        type: CREATE_TOURNAMENT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_TOURNAMENT_FAIL,
        payload: err,
      });
    }
  };
  const SendEmailForChangePassword = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/SendEmailForChangePassword/",
        frmData,
        config
      );
      dispatch({
        type: SEND_EMAIL_FOR_CHANGE_PASSWORD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: SEND_EMAIL_FOR_CHANGE_PASSWORD_FAIL,
        payload: err,
      });
    }
  };
  const GetAllUserAccounts = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetAllUserAccounts/", config);
      dispatch({
        type: GET_GAME_ID_INFO_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_GAME_ID_INFO_FAIL,
        payload: err,
      });
    }
  };
  const DeleteAccountOfUser = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("delet2", frmData);

    try {
      const res = await axios.post(
        SERVER_URL + "/DeleteAccountOfUser/",
        frmData,
        config
      );
      console.log("delet", res.data);
      dispatch({
        type: DELETE_GAME_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: DELETE_GAME_ID_FAIL,
        payload: err,
      });
    }
  };
  const UpdatePasswordSpecificUser = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdatePasswordSpecificUser/",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_PASSWORD_SPECIFIC_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_PASSWORD_SPECIFIC_USER_FAIL,
        payload: err,
      });
    }
  };
  const GetUserInfoById = async (id) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        id: id,
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetLoggedInUser/", config);
      dispatch({
        type: GET_USER_BY_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_USER_BY_ID_FAIL,
        payload: err,
      });
    }
  };
  const GetTournamentById = async (id) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetTournamentById/" + id,
        config
      );
      dispatch({
        type: GET_TOURNAMENT_BY_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_TOURNAMENT_BY_ID_FAIL,
        payload: err,
      });
    }
  };
  const GetCountries = async () => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetCountries/", config);
      dispatch({
        type: GET_COUNTRIES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_COUNTRIES_FAIL,
        payload: err,
      });
    }
  };
  const UpdateVerification = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateVerification",
        formData,
        config
      );

      dispatch({
        type: UPDATE_VERIFICATION_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: UPDATE_VERIFICATION_FAIL,
        payload: err.response,
      });
    }
  };
  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(SERVER_URL + "/login", formData, config);
      console.log("login:", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      console.log("loginerror:", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response,
      });
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });
  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <TestContext.Provider
      value={{
        token: state.token,
        err: state.err,
        createdItemInUserData: state.createdItemInUserData,
        userByIdData: state.userByIdData,
        logedinUserData: state.logedinUserData,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        popupAlertData: state.popupAlertData,
        countriesData: state.countriesData,
        updateVerificationData: state.updateVerificationData,
        sendEmailForChangePasswordData: state.sendEmailForChangePasswordData,
        updatePasswordSpecificUserData: state.updatePasswordSpecificUserData,
        ShowGameItem: state.ShowGameItem,
        checkUserData: state.checkUserData,
        usernameGameData: state.usernameGameData,
        gameIdInfoData: state.gameIdInfoData,
        deleteGameIdData: state.deleteGameIdData,
        createTournamentData: state.createTournamentData,
        activeTournamentData: state.activeTournamentData,
        previousTournamentData: state.previousTournamentData,
        deletedTournamentData: state.deletedTournamentData,
        registerGameUserData: state.registerGameUserData,
        registerForThisGameData: state.registerForThisGameData,
        startTournmentData: state.startTournmentData,
        setCreateTournamennull: state.setCreateTournamennull,
        userInfoData: state.userInfoData,
        updateUserData: state.updateUserData,
        updateUserLocationData: state.updateUserLocationData,
        updateUserPasswordData: state.updateUserPasswordData,
        allUserFalconData: state.allUserFalconData,
        switchBetweenUserAndPersonalInfo:
          state.switchBetweenUserAndPersonalInfo,
        personalInfoData: state.personalInfoData,
        usersEditByAdmin: state.usersEditByAdmin,
        passwordEditByAdmin: state.passwordEditByAdmin,
        tournamentByIdData: state.tournamentByIdData,
        rankAndPoinOfTournaments: state.rankAndPoinOfTournaments,
        perviousDataTournamentsUser: state.perviousDataTournamentsUser,

        CreateItemInUser,
        GetUserInfoById,
        login,
        loadUser,
        logout,
        clearErrors,
        GetAllUserAccounts,
        SetPopup,
        GetCountries,
        UpdateVerification,
        SendEmailForChangePassword,
        UpdatePasswordSpecificUser,
        SetShowGamelItems,
        CheckUserExist,
        SetUsername,
        DeleteAccountOfUser,
        CreateTournament,
        GetActiveTournaments,
        GetPreviousTournaments,
        DeleteTournament,
        RegisterUserForGame,
        GetRegisterTournment,
        StartTournment,
        SetStartTournament,
        SetRegisterTournament,
        SetCreateTournmant,
        GetUserInfo,
        UpdateUserInfo,
        SetUserSetting,
        SetGameIdDeletedAlert,
        SetUserlocation,
        UpdateUserLocation,
        UpdateUserPassword,
        SetUserPassword,
        GetAllUserFalcon,
        SetSwitchUsers,
        SetPersonalInfo,
        UpdateUsersByAdmin,
        SetEditUserByAdmin,
        UpdatePasswordByAdmin,
        SetEditUserPassByAdmin,
        GetTournamentById,
        GetRankAndPointOfTournament,
        GetPreviousTournamentsById,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
