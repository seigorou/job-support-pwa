import { Routes, Route } from "react-router-dom";

import Profile from "../pages/Profile";
import Login from "../pages/Login";
import JobSearch from "../pages/JobSearch";
import Progress from "../pages/Progress";
import Calendar from "../pages/Calendar";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Progress />} />

      <Route path="/job" element={<JobSearch />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/calendar" element={<Calendar />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
