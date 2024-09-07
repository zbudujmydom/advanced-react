import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const logIn = () => {
    setUser({ name: "Adam" });
  };

  const logOut = () => {
    setUser(null);
  };

  const value = {
    user,
    logOut,
    logIn,
  };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};
