import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#614476"
};

function Nav() {
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/users">
        Users
      </NavLink>
    </nav>
  );
}

export default Nav;
