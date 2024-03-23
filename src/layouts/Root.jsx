import { Outlet } from "react-router-dom";
import { Nav } from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
