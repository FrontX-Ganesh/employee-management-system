import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Login from "../Auth/Login";
import { toast } from "react-toastify";
import AdminDashboard from "../Dashboard/AdminDashboard";
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";

const AppContent = () => {
  const userData = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (email, password) => {
    if (!userData) {
      console.warn("userData is not loaded yet");
      toast.error("User data is not loaded yet.");
      return;
    }

    const employees = userData.employees || [];
    const admin = userData.admin || [];

    const employeeData = employees.find(
      (detail) => detail?.email === email && detail?.password === password
    );

    const adminData = admin.find(
      (detail) => detail?.email === email && detail?.password === password
    );

    console.log("employeeData:", employeeData);
    console.log("adminData:", adminData);

    if (adminData) {
      setUserRole("admin")
      localStorage.setItem("role", "admin");
      localStorage.setItem("userData", JSON.stringify(adminData));
    } else if (employeeData) {
      setUserRole("employee")
      localStorage.setItem("role", "employee");
      localStorage.setItem("userData", JSON.stringify(employeeData));
    } else {
      toast.error("Invalid Credentials");
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role)
  }, [])

  return (
    <>
      {!userRole ? (
        <Login handleLogin={handleLogin} />
      ) : userRole === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default AppContent;
