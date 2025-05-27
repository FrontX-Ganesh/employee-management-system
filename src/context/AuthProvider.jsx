import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
setLocalStorage();

const AuthProvider = ({ children }) => {
  const { employees, admin } = getLocalStorage();
  const userData = {
    employees ,
    admin
  }

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
