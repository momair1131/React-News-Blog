import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>
        <Link to="/">MyNews</Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/general">General</Link>
        </li> */}
        <li>
          <Link to="/science">Science</Link>
        </li>
        <li>
          <Link to="sports">Sports</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  );
}
