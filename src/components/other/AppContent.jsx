import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Login from "../Auth/Login";
import { ToastContainer, toast } from "react-toastify";

const AppContent = () => {
  const [user, setUser] = useState(null); // user role i.e employee or admin
  const [loggedInUserData, setLoggedInUserData] = useState(null); // user role and data
  const userData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (!userData) {
      console.warn("userData is not loaded yet");
      toast.error("User data is not loaded yet.");
      return;
    }

    const employees = userData.employees || [];
    const admin = userData.admin || [];

    const employeeData = employees.find(
      (user) => user?.email === email && user?.password === password
    );

    const adminData = admin.find(
      (user) => user?.email === email && user?.password === password
    );

    console.log("employeeData:", employeeData);
    console.log("adminData:", adminData);

    if (adminData) {
      setLoggedInUserData(adminData);
      setUser("admin");
    } else if (employeeData) {
      setLoggedInUserData(employeeData);
      setUser("employee");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <Login
      handleLogin={handleLogin}
      user={user}
      loggedInUserData={loggedInUserData}
    />
  );
};

export default AppContent;
