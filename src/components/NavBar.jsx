import React from "react";
import { NavLink } from "react-router";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}
      <NavLink to="/">All Tasks</NavLink>
      <NavLink to="/complete">Completed Tasks</NavLink>
      <NavLink to="/incomplete">Incomplete Tasks</NavLink>
      <NavLink to="/add-task">Add Task</NavLink>
    </nav>
  );
};

export default NavBar;
