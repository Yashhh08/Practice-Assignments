import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Users"}>Users</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
};

export default Navbar;
