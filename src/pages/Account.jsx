import AccountContext from "../context/AccountContext";
import { useContext, useEffect } from "react";
import "../Styles/Account.css";
import { useState } from "react";
import LogItem from "../components/LogItem";

const Account = () => {
  const { user, setUser, handleCallbackResponse } = useContext(AccountContext);
  const [isPending, setIsPending] = useState(false);
  const [logs, setLogs] = useState([]);
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

    if (Object.keys(user).length > 0) {
      setIsPending(true);
      fetch(`http://localhost:5000/api/logs/?email=${user.email}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLogs(data);
        });
      setIsPending(false);
    }
  }, [user, handleCallbackResponse]);

  if (Object.keys(user).length > 0) {
    return (
      <div id="account">
        <div id="account-info">
          <h1>Account</h1>
          <img
            src={user.picture}
            alt="Profile"
            style={{ marginBottom: "10px" }}
          />
          <h2 style={{ marginBottom: "10px" }}>{user.name}</h2>
          <h2 style={{ marginBottom: "10px" }}>{user.email}</h2>
          <button className="btn-white" onClick={() => Logout()}>
            Log out
          </button>
        </div>
        {!isPending && (
          <div id="transactions">
            <h1>Orders:</h1>
            {logs.map((log) => (
              <LogItem log={log} key={log.time} />
            ))}
          </div>
        )}
        {isPending && <div id="transactions">Loading...</div>}
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
