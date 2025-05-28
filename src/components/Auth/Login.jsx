import { useContext, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const formData = useRef({
    email: "admin@example.com",
    password: "123",
  });
  const userData = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.current[name] = value;
  };

  const handleLogin = (email, password) => {
    if (!userData) {
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

    if (adminData) {
      localStorage.setItem("role", "admin");
      localStorage.setItem("userData", JSON.stringify(adminData));
      navigate("/admin", { state: { employees } });
    } else if (employeeData) {
      localStorage.setItem("role", "employee");
      localStorage.setItem("userData", JSON.stringify(employeeData));
      navigate("/employee", { state: { employeeData } });
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData.current;
    handleLogin(email, password);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-md border border-indigo-200 p-6 sm:p-10 md:p-16 lg:p-20 w-full max-w-sm sm:max-w-md">
          <form
            className="flex flex-col items-center justify-center w-full gap-4"
            onSubmit={handleSubmit}
          >
            <input
              required
              className="w-full outline-none border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full placeholder:text-gray-500 transition-all"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
              defaultValue="admin@example.com"
            />
            <input
              required
              className="w-full outline-none border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full placeholder:text-gray-500 transition-all"
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleInputChange}
              defaultValue="123"
            />
            <button className="mt-4 text-white bg-indigo-600 hover:bg-indigo-700 transition-all font-semibold text-base sm:text-lg py-2 px-6 sm:px-8 w-full rounded-full">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
