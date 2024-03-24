import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "flex text-lg items-center text-[#FF444A] underline font-bold transition-colors"
              : "flex text-lg items-center hover:text-[#FF444A] transition-colors";
          }}
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/donation"}
          className={({ isActive }) => {
            return isActive
              ? "flex text-lg items-center text-[#FF444A] underline font-bold transition-colors"
              : "flex text-lg items-center hover:text-[#FF444A] transition-colors";
          }}
        >
          Donation
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/statistics"}
          className={({ isActive }) => {
            return isActive
              ? "flex text-lg items-center text-[#FF444A] underline font-bold transition-colors"
              : "flex text-lg items-center hover:text-[#FF444A] transition-colors";
          }}
        >
          Statistics
        </NavLink>
      </Typography>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-7xl shadow-none px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <img className="cursor-pointer" src={Logo} />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
