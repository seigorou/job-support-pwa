import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">進捗</Link>
      {" | "}
      <Link to="/job">職種探索</Link>
      {" | "}
      <Link to="/profile">プロフィール</Link>
      {" | "}
      <Link to="/calendar">カレンダー</Link>
      {" | "}
      <Link to="/login">ログイン</Link>
    </nav>
  );
}

export default Navbar;
