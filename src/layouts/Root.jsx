import { Outlet } from "react-router-dom";
import { Nav } from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
