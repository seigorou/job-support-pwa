import { NavLink } from "react-router-dom";
import { House, Search, Calendar, Settings } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <House size={24} />
        <span>進捗</span>
      </NavLink>

      <NavLink
        to="/job"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <Search size={24} />
        <span>職種探索</span>
      </NavLink>

      <NavLink
        to="/calendar"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <Calendar size={24} />
        <span>カレンダー</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <Settings size={24} />
        <span>設定</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
