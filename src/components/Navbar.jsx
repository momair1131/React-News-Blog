import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>
        <Link to="/React-News-Blog/">MyNews</Link>
      </h1>

      <ul>
        <li>
          <Link to="/React-News-Blog/">Home</Link>
        </li>
        <li>
          <Link to="/React-News-Blog/science">Science</Link>
        </li>
        <li>
          <Link to="/React-News-Blog/sports">Sports</Link>
        </li>
        <li>
          <Link to="/React-News-Blog/technology">Technology</Link>
        </li>
      </ul>
    </div>
  );
}
