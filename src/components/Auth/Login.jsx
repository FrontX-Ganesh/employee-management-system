/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { ToastContainer } from "react-toastify";

const Login = ({ handleLogin, user, loggedInUserData }) => {
  const formData = useRef({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.current[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData.current;
    handleLogin(email, password);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen w-screen items-center justify-center px-4">
        <div className="border-2 rounded-xl border-emerald-600 p-6 sm:p-10 md:p-16 lg:p-20 w-full max-w-sm sm:max-w-md">
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              required
              className="w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
            />
            <input
              required
              className="w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full mt-3 placeholder:text-gray-400"
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleInputChange}
            />
            <button className="mt-6 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-base sm:text-lg py-2 px-6 sm:px-8 w-full rounded-full">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
