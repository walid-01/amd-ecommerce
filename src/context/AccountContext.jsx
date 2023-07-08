import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
  const handleCallbackResponse = (response) => {
    // console.log("Encoded JWT ID token: " + response.credential);
    // console.log(jwt_decode(response.credential));
    setUser(jwt_decode(response.credential));
  };

  return (
    <AccountContext.Provider value={{ user, setUser, handleCallbackResponse }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
