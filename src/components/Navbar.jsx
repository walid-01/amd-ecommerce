import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Login from "./Login";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <img
          id="page-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg"
          alt="AMD Logo"
        />
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/all" className="nav-link">
            Processors
          </Link>
        </li>

        <li className="nav-item">
          <a
            href="https://www.amd.com/en/corporate.html"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </li>
      </ul>
      <Login />
    </nav>
  );
};

export default Navbar;
