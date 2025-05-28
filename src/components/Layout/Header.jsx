import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const firstName = userData?.firstName?.toUpperCase() || "User";

  const handleLogoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="max-w-7xl mx-auto px-4 md:px-7 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-md mt-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          👋 Hello, <span className="text-yellow-300">{firstName}</span>
        </h1>
        <button
          className="bg-rose-500 hover:bg-rose-600 transition-all px-5 py-2 rounded-md font-medium shadow-sm cursor-pointer"
          onClick={handleLogoutUser}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
