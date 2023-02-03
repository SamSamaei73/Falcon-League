import "./App.css";
import "./Scss/Firstpage.scss";
import Firstpage from "./Components/Firstpage";
import "./Fonts/Shabnam-Bold.ttf";
import "./Fonts/Montserrat.ttf";
import "./Fonts/Orbitron.ttf";
import "./Fonts/MontserratBlack.ttf";
import "./Fonts/Shabnam-Bold.ttf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Warzone from "./Components/Games/Warzone";
import Dota from "./Components/Games/Dota";
import Fifa from "./Components/Games/Fifa";
import UserAdmin from "./Components/AdminPanel/UserAdmin";
import TestState from "./Context/testState";
import AuthState from "./Context/Auth/authState";
import ConfirmEmail from "./Components/Items/ConfirmEmail";
import ForgetPass from "./Components/Items/ForgetPass";
import ConfirmForget from "./Components/Items/ConfirmForget";
import SuccessEmail from "./Components/Items/SuccessEmail";
import AdminGame from "./Components/SuperAdmin.js/AdminGame";
import UserEdit from "./Components/UserEdit/UserEdit";
import FaqPage from "./Components/AdminPanel/FAQ/FaqPage";
import SoloGame from "./Components/Manage/SoloGame";
import TeamGame from "./Components/Manage/TeamGame";
import Results from "./Components/ResultGames/Results";
import ScrollToTop from "./Components/Tools/ScrollTop";
import SoloFifa from "./Components/Manage/SoloFifa";
import ResultsTeam from './Components/ResultGames/ResultsTeam';

function App() {
  return (
    <AuthState>
      <TestState>
        <div className="App">
          <div className="container">
            <Router>
              <Routes>
                <Route exact path="/" element={<Firstpage />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Warzone" element={<Warzone />} />
                <Route exact path="/Dota" element={<Dota />} />
                <Route exact path="/Fifa" element={<Fifa />} />
                <Route exact path="/UserAdmin" element={<UserAdmin />} />
                <Route exact path="/Results/:Id" element={<Results />} />
                <Route exact path="/ResultsTeam" element={<ResultsTeam />} />
                <Route exact path="/ForgetPass" element={<ForgetPass />} />
                <Route exact path="/SoloFifa/:Id" element={<SoloFifa />} />
                <Route
                  exact
                  path="/ConfirmForget/:Id"
                  element={<ConfirmForget />}
                />
                <Route exact path="/SuccessEmail" element={<SuccessEmail />} />
                <Route exact path="/AdminGame" element={<AdminGame />} />
                <Route exact path="/UserEdit" element={<UserEdit />} />
                <Route exact path="/FAQ" element={<FaqPage />} />
                <Route exact path="/SoloGame/:Id" element={<SoloGame />} />
                <Route exact path="/TeamGame/:Id" element={<TeamGame />} />
                <Route exact path="/TeamGame" element={<TeamGame />} />
                <Route
                  exact
                  path="/ConfirmEmail/:Id"
                  element={<ConfirmEmail />}
                />
              </Routes>
              <ScrollToTop />
            </Router>
          </div>
        </div>
      </TestState>
    </AuthState>
  );
}

export default App;
