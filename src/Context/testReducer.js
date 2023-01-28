/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE_ITEM_IN_USER_SUCCESS,
  CREATE_ITEM_IN_USER_FAIL,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  LOGEDDIN_USER_SUCCESS,
  LOGEDDIN_USER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_POPUP,
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_SUCCESS,
  UPDATE_VERIFICATION_SUCCESS,
  UPDATE_VERIFICATION_FAIL,
  SEND_EMAIL_FOR_CHANGE_PASSWORD_SUCCESS,
  SEND_EMAIL_FOR_CHANGE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SPECIFIC_USER_SUCCESS,
  UPDATE_PASSWORD_SPECIFIC_USER_FAIL,
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
  PREVIOUS_TOURNAMENT_FAIL,
  PREVIOUS_TOURNAMENT_SUCCESS,
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
  GET_OTHER_STATISTIC_SUCCESS,
  GET_OTHER_STATISTIC_FAIL,
} from "./types";
export default (state, action) => {
  switch (action.type) {

    case GET_OTHER_STATISTIC_SUCCESS:
      return {
        ...state,
        otherDataStatistic: action.payload,
      };
    case GET_OTHER_STATISTIC_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_PREVIOUS_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        perviousDataTournamentsUser: action.payload,
      };
    case GET_PREVIOUS_TOURNAMENTS_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_RANK_POINT_TOURNAMENT_SUCCESS:
      return {
        ...state,
        rankAndPoinOfTournaments: action.payload,
      };
    case GET_RANK_POINT_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_TOURNAMENT_BY_ID_SUCCESS:
      return {
        ...state,
        tournamentByIdData: action.payload,
      };
    case GET_TOURNAMENT_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };


    case UPDATE_PASSWORD_BY_ADMIN_SUCCESS:
      return {
        ...state,
        passwordEditByAdmin: action.payload,
      };
    case UPDATE_PASSWORD_BY_ADMIN_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case SET_EDIT_USER_PASS_SETTING:
      return {
        ...state,
        passwordEditByAdmin: action.payload,
      };

    case UPDATE_USERS_BY_ADMIN_SUCCESS:
      return {
        ...state,
        usersEditByAdmin: action.payload,
      };
    case UPDATE_USERS_BY_ADMIN_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case SET_EDIT_USER_SETTING:
      return {
        ...state,
        usersEditByAdmin: action.payload,
      };

    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalInfoData: action.payload,
      };

    case SET_SWITCH_USERS:
      return {
        ...state,
        switchBetweenUserAndPersonalInfo: action.payload,
      };

    case GET_ALL_USER_FALCON_SUCCESS:
      return {
        ...state,
        allUserFalconData: action.payload,
      };
    case GET_ALL_USER_FALCON_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        updateUserPasswordData: action.payload,
      };
    case UPDATE_USER_PASSWORD_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case UPDATE_USER_LOCATION_SUCCESS:
      return {
        ...state,
        updateUserLocationData: action.payload,
      };
    case UPDATE_USER_LOCATIONO_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        updateUserData: action.payload,
      };
    case UPDATE_USER_INFO_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfoData: action.payload,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case SET_USER_PASSWORD:
      return {
        ...state,
        updateUserPasswordData: null,
      };

    case SET_CREATE_TOURNAMENT:
      return {
        ...state,
        createTournamentData: null,
      };

    case SET_USER_LOCATIN_TOURNAMENT:
      return {
        ...state,
        updateUserLocationData: null,
      };

    case SET_GAME_ID_DELETED_TOURNAMENT:
      return {
        ...state,
        deleteGameIdData: null,
      };

    case SET_USER_SETTING:
      return {
        ...state,
        updateUserData: null,
      };

    case SET_REGISTER_TOURNAMENT:
      return {
        ...state,
        registerGameUserData: null,
      };

    case SET_START_TOURNAMENT:
      return {
        ...state,
        startTournmentData: null,
      };

    case START_TOURNAMENT_SUCCESS:
      return {
        ...state,
        startTournmentData: action.payload,
      };
    case START_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_REGISTER_USER_TOURNAMENT_SUCCESS:
      return {
        ...state,
        registerForThisGameData: action.payload,
      };
    case GET_REGISTER_USER_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CREATE_REGISTER_GAME_SUCCESS:
      return {
        ...state,
        registerGameUserData: action.payload,
      };
    case CREATE_REGISTER_GAME_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case DELETE_TOURNAMENT_SUCCESS:
      return {
        ...state,
        deletedTournamentData: action.payload,
      };
    case DELETE_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case PREVIOUS_TOURNAMENT_SUCCESS:
      return {
        ...state,
        previousTournamentData: action.payload,
      };
    case PREVIOUS_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case ACTIVE_TOURNAMENT_SUCCESS:
      return {
        ...state,
        activeTournamentData: action.payload,
      };
    case ACTIVE_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_TOURNAMENT_SUCCESS:
      return {
        ...state,
        createTournamentData: action.payload,
      };
    case CREATE_TOURNAMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_USERNAMEGAME:
      return {
        ...state,
        usernameGameData: action.payload,
      };
    case SET_SHOW_GAME_ITEMS_SUCCESS:
      return {
        ...state,
        ShowGameItem: action.payload,
      };
    case DELETE_GAME_ID_SUCCESS:
      return {
        ...state,
        deleteGameIdData: action.payload,
      };
    case DELETE_GAME_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_GAME_ID_INFO_SUCCESS:
      return {
        ...state,
        gameIdInfoData: action.payload,
      };
    case GET_GAME_ID_INFO_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_DISPLAY_RFP_SUCCESS:
      return {
        ...state,
        createOrUpdateSurveyData: action.payload,
      };

    case CREATE_DATA_USER_SUCCESS:
      return {
        ...state,
        checkUserData: action.payload,
      };
    case CREATE_DATA_USER_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case UPDATE_PASSWORD_SPECIFIC_USER_SUCCESS:
      return {
        ...state,
        updatePasswordSpecificUserData: action.payload,
      };
    case UPDATE_PASSWORD_SPECIFIC_USER_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SEND_EMAIL_FOR_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        sendEmailForChangePasswordData: action.payload,
      };
    case SEND_EMAIL_FOR_CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case UPDATE_VERIFICATION_SUCCESS:
      return {
        ...state,
        updateVerificationData: action.payload,
      };
    case UPDATE_VERIFICATION_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countriesData: action.payload,
      };
    case GET_COUNTRIES_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_POPUP:
      return {
        ...state,
        popupAlertData: action.payload,
        createdItemInUserData: null,
      };
    case LOGEDDIN_USER_SUCCESS:
      return {
        ...state,
        logedinUserData: action.payload,
      };
    case LOGEDDIN_USER_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_ITEM_IN_USER_SUCCESS:
      return {
        ...state,
        createdItemInUserData: action.payload,
      };
    case CREATE_ITEM_IN_USER_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userByIdData: action.payload,
      };
    case GET_USER_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    //authentication and authorization
    case USER_LOADED:
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      localStorage.user = JSON.stringify(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      //localStorage.setItem(`token`, `'` + action.payload.token + `'`);
      localStorage.accessToken = action.payload.accessToken;
      localStorage.refreshToken = action.payload.refreshToken;
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        //token: action.payload.token,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loading");
      localStorage.removeItem("user");
      localStorage.removeItem("error");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        err: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        err: null,
      };

    default:
      return state;
  }
};
