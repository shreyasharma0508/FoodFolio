import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Foodfolio</h1>
        <nav className="nav-links">
          <Link to="/dashboard">Home</Link>
          <Link to="/todolist">To-Do List</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/waste-insights">Waste Insights</Link>
        </nav>
      </div>
      <div className="user-info">
        <span>Hi, John D.</span> | <Link to="/settings">Settings</Link> |{" "}
        <Link to="/logout">Logout</Link>
      </div>
    </header>
  );
}

export default Navbar;
