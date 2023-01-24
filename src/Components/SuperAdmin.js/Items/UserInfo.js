import React, { useContext, useRef, useEffect, useState } from "react";
import Search from "../../../Images/icons8-search-24.png";
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

const UserInfo = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, login, isAuthenticated, logout } = authContext;
  const [showorhide, setShoworhide] = useState(null);
  const [userData, setUserData] = useState(null);
  const [searchStr, setSearchStr] = useState(null);

  const {
    allUserFalconData,
    GetAllUserFalcon,
    switchBetweenUserAndPersonalInfo,
    SetSwitchUsers,
    SetPersonalInfo,
    err,
  } = testContext;

  useEffect(() => {
    GetAllUserFalcon();
    //setShoworhide(true);
  }, []);

  useEffectSkipFirst(() => {
    if (allUserFalconData) {
      setUserData(allUserFalconData.data);
      //let newItem = {};
      //console.log(allUserFalconData);
    }
  }, [allUserFalconData]);
  useEffectSkipFirst(() => {
    if (searchStr) {
      let datainfo = userData.map((item) => {
        if (item.Username.toLowerCase().includes(searchStr)) {
          return item;
        } else {
          return null;
        }
        //return item
      });
      datainfo = datainfo.filter((item) => item != null);
      setUserData(datainfo);
    }
  }, [searchStr]);
  const SearchUser = (valueStr) => {
    setSearchStr(valueStr);
    setUserData(allUserFalconData.data);
    //console.log(userData);
  };
  return (
    <>
      {switchBetweenUserAndPersonalInfo ? (
        <div className="UserInfo">
          <>
            {" "}
            <div className="SearchTitle">
              <h3>Users</h3>
              <div className="search">
                <img src={Search} alt="Search" />
                <input
                  type="search"
                  value={searchStr}
                  onChange={(e) => SearchUser(e.target.value)}
                />
              </div>
            </div>
            {userData
              ? userData
                ? userData.map((item) => {
                    return (
                      <div className="userData">
                        <h4>{item.Username}</h4>
                        <a
                          id={item.id}
                          onClick={(e) => {
                            SetSwitchUsers(false);
                            SetPersonalInfo(item);
                          }}
                        >
                          Show / Edit
                        </a>
                      </div>
                    );
                  })
                : null
              : null}
          </>
        </div>
      ) : null}
    </>
  );
};

export default UserInfo;
