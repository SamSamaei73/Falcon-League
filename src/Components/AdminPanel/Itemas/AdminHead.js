import React, { useEffect, useRef, useContext, useState } from "react";
import Khaled from '../../../Images/3554557.png';
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

const AdminHead = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err } = authContext;

  return (
    <div className='AdminHead'>
        <div className="topHead">
          {user ? (<h1>{user.Username}</h1>) : null}
            {/* <h3>Last online 16 minutes ago</h3> */}
        </div>
        <div className="adminImg">
            <img src={Khaled} alt="" />
        </div>
    </div>
  )
}

export default AdminHead