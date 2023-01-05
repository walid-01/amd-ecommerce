import AccountContext from "../context/AccountContext";
import { useContext, useEffect } from "react";
import "./Account.css";

const Account = () => {
  const { user, setUser, handleCallbackResponse } = useContext(AccountContext);
  const Logout = () => {
    setUser({});
    console.log(user);
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "413293266690-78rcc8u2aik1q4n9ihqvl3j9ais1oktc.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("account-signin"), {
      theme: "outline",
      size: "large",
    });
  }, [user, handleCallbackResponse]);

  if (Object.keys(user).length > 0) {
    return (
      <div id="account">
        <h1>Account</h1>
        <img src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <button className="btn-white" onClick={() => Logout()}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div id="account">
        <h1>Account</h1>
        <div id="account-signin"></div>
      </div>
    );
  }
};

export default Account;
