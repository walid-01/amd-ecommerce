import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <img
          src="//cdn.shopify.com/s/files/1/0215/8508/files/ratio-logo-black_140x.png?v=1617041188"
          alt="RATIO Logo"
        />
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/collections/machines" className="nav-link">
            Machines
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/collections/accessories" className="nav-link">
            Accessories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/collections/shop-all" className="nav-link">
            Shop All
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sale" className="nav-link sale">
            Sale
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/journal" className="nav-link">
            Journal
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
      <ul className="user-options">
        {/* Change to icons */}
        <li className="user-option">
          <Link to="/account" className="user-link">
            Account
          </Link>
        </li>
        <li className="user-option">
          <Link to="/search" className="user-link">
            Search
          </Link>
        </li>
        <li className="user-option">
          <Link to="/cart" className="user-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
