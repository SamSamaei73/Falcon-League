import React, { useEffect, useRef, useContext, useState } from "react";
import Coin from "../../../Images/coins.png";
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


const BoxTeam = ({ Id }) => {
    const testContext = useContext(TestContext);
    const authContext = useContext(AuthContext);
    const { GetAllTeamAndMembers, getAllTeamAndMembersData } = testContext;
    const { user, login, isAuthenticated, err, logout } = authContext;
    const [allTeam, setAllTeam] = useState(null);
    const [showTeams, setShowTeams] = useState(null);
    useEffect(() => {
        GetAllTeamAndMembers(Id);
    }, []);
    useEffectSkipFirst(() => {
        if (getAllTeamAndMembersData) {
            //  console.log('teamandmembers', getAllTeamAndMembersData);
            setAllTeam(getAllTeamAndMembersData);
            setShowTeams(true);
        }
    }, [getAllTeamAndMembersData]);


    return (
        <div className='BoxTeam'>
            {
                showTeams ?
                    <>
                        {allTeam.map((item) => {
                            return <>
                                <div className="MainBox">
                                    <h3>{item.Name}</h3>
                                    {
                                        item.players.map((p) => {
                                            return <input type="text" value={p.UserName} />
                                        })
                                    }

                                </div></>

                        })
                        }
                    </> : null
            }

        </div>
    )
}

export default BoxTeam