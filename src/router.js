import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Check from "./pages/check";
import Reward from "./pages/reward";
import SurveyOne from "./pages/survey/surveyone"
import SurveyTwo from "./pages/survey/surveytwo";
import SurveyThree from "./pages/survey/surveythree";
import SurveyFour from "./pages/survey/surveyfour";
import RewardModal from "./modals/rewardmodal";
import Result from "./pages/result";
import Info from "./pages/Info";
import Setting from "./setting";

const RouterComponent = () => {
    return (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/check" element={<Check />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/surveyone" element={<SurveyOne />} />
          <Route path="/surveytwo" element={<SurveyTwo />} />
          <Route path="/surveythree" element={<SurveyThree />} />
          <Route path="/surveyfour" element={<SurveyFour />} />
          <Route path="/result" element={<Result />} />
          <Route path="/rewardmodal" element={<RewardModal />} />
          <Route path="/info" element={<Info />} />
        </Routes>
    ); };
    export default RouterComponent;