import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./src/components/Auth/Login";
import AdminDashboard from "./src/components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./src/components/Dashboard/EmployeeDashboard";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/employee",
      element: <EmployeeDashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
