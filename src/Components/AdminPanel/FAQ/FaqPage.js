import React, { useEffect, useRef, useContext, useState } from "react";
import "../../../Scss/Faq.scss";
import Head from "../../Items/HeaderGame";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../Firstpage/Footer.js";
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

const FaqPage = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { CreateItemInUser } = testContext;
  const { user, login, isAuthenticated, err, logout } = authContext;
  const [active, setActive] = useState(1);

  return (
    <div className="FaqPage">
      <Head />
      <div className="secondHead">
        <h1>Frequently Asked Question</h1>
      </div>
      <div className="MainControl">
        <Tabs>
          <TabList
            onClick={(e) => setActive(e.target.value)}
            className="header"
          >
            <Tab value={1} className={active == 1 ? "activeTab tab" : "tab"}>
              General
            </Tab>
            <Tab value={2} className={active == 2 ? "activeTab tab" : "tab"}>
              Warzone
            </Tab>
            <Tab value={3} className={active == 3 ? "activeTab tab" : "tab"}>
              Dota 2
            </Tab>
            <Tab value={4} className={active == 4 ? "activeTab tab" : "tab"}>
              Valorant
            </Tab>
            <Tab value={5} className={active == 5 ? "activeTab tab" : "tab"}>
              FIFA
            </Tab>
            <Tab value={6} className={active == 6 ? "activeTab tab" : "tab"}>
              Apex
            </Tab>
          </TabList>

          <TabPanel>
            <div className="Creater">
              <div className="CloseTicket">
                <div className="MassageOpen">
                  <details>
                    <summary>
                      <div className="itemMas">
                        <div className="LongpartInfo">
                          <h5>How to register in website?</h5>
                        </div>
                        <div className="partInfo partInfox">
                          <h2>▼</h2>
                        </div>
                      </div>
                    </summary>
                    <div className="InfoTicket">
                      <div className="FAQInfo">
                        <h5>1. Go to Signup/Sign in page.</h5>
                        <h5>2. Insert the required information .</h5>
                        <h5>3. Click th Sign up Button .</h5>
                        <h5>
                          4. An confirm email will send to your email address .
                        </h5>
                        <h5>
                          5. Check your inbox or spam folder in your mail box .
                        </h5>
                        <h5>6. Click activate link .</h5>
                        <h5>
                          7. You can login with your username and password .
                        </h5>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>
                      <div className="itemMas">
                        <div className="LongpartInfo">
                          <h5>
                            How to edit my profile and changeing my password ?
                          </h5>
                        </div>
                        <div className="partInfo partInfox">
                          <h2>▼</h2>
                        </div>
                      </div>
                    </summary>
                    <div className="InfoTicket">
                      <div className="FAQInfo">
                        <h5>1. sign in go to your Account .</h5>
                        <h5>
                          2. Go to your name on top right and then click on
                          Account setting .
                        </h5>
                        <h5>
                          3. Now you can see your information and edit them .
                        </h5>
                      </div>
                    </div>
                  </details>
                  {/* 
                  <details>
                    <summary>
                      <div className="itemMas">
                        <div className="LongpartInfo">
                          <h5>How to edit my profile?</h5>
                        </div>
                        <div className="partInfo partInfox">
                          <h2>▼</h2>
                        </div>
                      </div>
                    </summary>
                    <div className="InfoTicket">
                      <div className="FAQInfo"></div>
                    </div>
                  </details> */}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Creater">
              <div className="CloseTicket">
                <div className="MassageOpen">
                  <details>
                    <summary>
                      <div className="itemMas">
                        <div className="LongpartInfo">
                          <h5>Warzone TOURNMENTS rules</h5>
                        </div>
                        <div className="partInfo partInfox">
                          <h2>▼</h2>
                        </div>
                      </div>
                    </summary>
                    <div className="InfoTicket">
                      <div className="FAQInfo">
                        <h5 className="weightFont">STANDARD POINT SCORING IN TOURNAMENTS:</h5>
                        <h5>
                          Teams earn points for kills and position places in
                          Warzone games. Final scores are a combination of your
                          highest scoring games (Tournament registration card
                          will outline how many, for example best 3).
                        </h5>
                        <h5>1 point per kill.</h5>
                        <h5>
                          1st place 15 points, 2nd place 10 points, 3rd place 9
                          points, 4th place 7 points, 5th place 6 points, 6th
                          place 5 points, 7th place 4 points, 8th place 3
                          points, 9th place 2 points, 10th place 1 point.
                        </h5>
                        <h5>
                          For Headshot Challenge games normal points rule apply,
                          plus 1 point per headshot!
                        </h5>
                        <h5>
                          {" "}
                          In the event of a tie points situation the following
                          will be the deciding tie break factor and in this
                          order:
                        </h5>
                        <h5>
                          {" "}
                          kill points, whichever team has the most kills will be
                          elevated above the other. placement points, whichever
                          team has the most placement points will be elevated
                          above the other.{" "}
                        </h5>
                        <h5>
                          if teams have the same kills and same placement points
                          the prize (if applicable) will be split between the
                          tied teams.
                        </h5>
                        <h5 className="weightFont">CAPTAIN SPECIAL TOURNAMENTS:</h5>
                        <h5>
                          {" "}
                          In addition to the Standard Point Scoring, your
                          Captain's kills are doubled.
                        </h5>
                        <h5>
                          Your captain is the person who 'registers' your team
                          for the tournament and therefore is the person
                          responsible for 'inviting' the other team members.
                        </h5>
                        <h5>
                          {" "}
                          If it is a flexi-start tournament your captain will
                          also be the person who has to press the 'start' button
                          in order to 'start' your entry into the tournament.
                        </h5>
                        <h5 className="weightFont"> DATA COLLECTION:</h5>
                        <h5>
                          {" "}
                          We do everything possible to collect all game data, if
                          any is missing via the game developers API, sadly we
                          cannot take responsibility. In order to combat this
                          rare occurrence we encourage you to stream (ensure
                          settings save your stream afterwards) and post your
                          stream into our Discord’s (https://discord.gg/)
                          #now-streaming channel at your tournament start time.
                          This will then act as a back-up to show any missing
                          game data. Alternatively you can email info@FLC.gg
                        </h5>
                        <h5 className="weightFont">GENERAL RULES:</h5>
                        <h5>
                          {" "}
                          The registered players must have at least 200 BR games
                          played on their record to be eligible. FLC reserves
                          the right to change this limit on a tournament by
                          tournament basis.
                        </h5>
                        <h5>
                          {" "}
                          FLC tournaments are for players on Playstation, Xbox
                          and PC.
                        </h5>
                        <h5>
                          Flexi-start tournaments require the person, who
                          entered the team into the tournament, to check-in by
                          clicking your 'Start Button' in the 'My Tournament'
                          page. Fixed time tournaments require no check-in.
                        </h5>
                        <h5>
                          Jump into a lobby with your registered team and play
                          the game mode that matches the tournament game mode.
                        </h5>
                        <h5>
                          {" "}
                          Teams are allowed to back out of games and can play as
                          many games as they can fit into their tournament
                          window.
                        </h5>
                        <h5>
                          Final games can be started before the time is up. For
                          example if your tournament window is 06:00 - 09:00
                          your last game can start at 08:59 and you can continue
                          playing until that game ends.
                        </h5>
                        <h5>
                          {" "}
                          You can enter a tournament with a team with ‘less
                          players’ than the game mode we are currently running a
                          tournament on (duo’s, trios, quads), however, you must
                          still play in the tournament specific game mode. For
                          example a duo or trio can enter our ‘BR Quad
                          tournament’ but you must play in ‘BR Quads’ with
                          ‘squad fill’ turned off. Another example a solo or duo
                          can enter our trio competition but must play ‘BR
                          Trios’ with ‘squad fill’ turned off.
                        </h5>
                        <h5>
                          {" "}
                          No Reverse Boosting. No Aimbots. No Hacks. No Alt
                          Accounts. No cheating. If you are found cheating you
                          risk forfeiting your prize and being banned from
                          future events.
                        </h5>
                        <h5>
                          All players Activision accounts, under 'game data and
                          profile privacy' must have 'game play data' set to
                          'ALL'. If we cannot verify your KD your score will be
                          null & void.{" "}
                        </h5>
                        <h5>
                          {" "}
                          All results will be verified by our platform processor
                          before final confirmation. Another manual verification
                          will be done during beta testing before any payments
                          are made.
                        </h5>
                        <h5>
                          We will take every measure to ensure cheaters in our
                          tournament are caught and banned, however, we cannot
                          do anything about in-lobby cheaters during your games,
                          so we encourage you to report the player using the
                          in-game functions.
                        </h5>
                        <h5>
                          Should you believe you have encountered someone
                          cheating in FLC please contact us on hello@FLC.gg
                          along with sending us (either attached or in a hosting
                          folder) the in-game footage and we will review this.
                          If we believe the person to be cheating their whole
                          squad could be disqualified and/or banned from future
                          FLC tournaments.
                        </h5>
                        <h5>
                          {" "}
                          Cash prizes become active per division upon their
                          being 1 additional team to the number of pay-out
                          places. For example, should pay-outs be for 1st and
                          2nd, we require 3 teams in a division for that
                          division's pay-out to become active. FLC reserves the
                          right to move teams into a different division under
                          these circumstances and / or withhold prize money on
                          this basis.
                        </h5>
                        <h5>
                          FLC reserves the right modify or update these rules at
                          any point in time.
                        </h5>
                        <h5>
                          All decisions by W Banter Tournaments (FLC) are final.
                        </h5>
                        <h5>
                          By submitting a squad and paying to enter you accept
                          the terms above.{" "}
                        </h5>
                        <h5 className="weightFont"> RESTRICTED REGIONS:</h5>
                        <h5>
                          {" "}
                          As per our legal obligations, FLC uses the UK
                          Governments sanctioned nations list for regions that
                          are not able to deposit or withdraw money at FLC (or
                          associated companies under the All Star Gaming
                          umbrella). Our payment partner will decline all
                          attempted deposits from a sanctioned nation.
                        </h5>
                        <h5>
                          {" "}
                          Players from Russia or Belarus are not permitted to
                          participate in FLC Tournaments at this time.
                        </h5>
                        <h5>
                          {" "}
                          If players from a restricted region play a free game
                          at FLC and finish in a paid place, they will forfeit
                          their winnings either at tournament end or at
                          withdrawal. FLC is not allowed to send or receive
                          money from a sanctioned nation, however, if you are a
                          sanctioned nation national and reside in a
                          non-sanctioned nation and have a non-sanction nation
                          payment platform (bank, Paypal etc) then you will be
                          able to deposit and withdraw at FLC.
                        </h5>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
