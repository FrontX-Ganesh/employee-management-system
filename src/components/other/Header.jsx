import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("userData"));

  const handleLogoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-7">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello {userName?.firstName.toUpperCase()}
          <span className="text-3xl font-semibold"></span>
        </h1>
        <button
          className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm cursor-pointer"
          onClick={handleLogoutUser}
        >
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Header;
