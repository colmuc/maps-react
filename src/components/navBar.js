import React from "react";

import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <Link className="navbar-brand " to="/">
        Map Creator
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/map">
            Map
          </NavLink>
          <NavLink className="nav-item nav-link" to="/history">
            History
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
