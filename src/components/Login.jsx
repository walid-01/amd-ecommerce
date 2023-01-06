import { Link } from "react-router-dom";
import AccountContext from "../context/AccountContext";
import { useContext, useEffect } from "react";
import "./Login.css";
import CartContext from "../context/CartContext";

const Login = () => {
  const { user, handleCallbackResponse } = useContext(AccountContext);
  const { openCart } = useContext(CartContext);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "413293266690-78rcc8u2aik1q4n9ihqvl3j9ais1oktc.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signin"), {
      theme: "outline",
      size: "large",
    });
  }, [user, handleCallbackResponse]);

  if (Object.keys(user).length > 0) {
    return (
      <ul className="user-options">
        <li className="user-option">
          <Link to="/search" className="user-link">
            Search
          </Link>
        </li>
        <li className="user-option">
          <Link to="/account" className="user-link">
            Account
          </Link>
        </li>
        <li className="user-option">
          <button id="btn-cart" onClick={() => openCart()}>
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
          </button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="user-options">
        <li className="user-option" style={{ marginRight: "20px" }}>
          <div id="signin"></div>
        </li>
        <li className="user-option">
          <button id="btn-cart" onClick={() => openCart()}>
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
          </button>
        </li>
      </ul>
    );
  }
};

export default Login;
