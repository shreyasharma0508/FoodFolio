import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { userData } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Foodfolio</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/dashboard">Home</Link>
          <Link to="/todolist">To-Do List</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/waste-insights">Waste Insights</Link>
        </nav>
      </div>
      <div className="user-info">
        <span>
          Hi, <Link to="/profile">{userData.firstName || "Guest"} {userData.lastName?.charAt(0) || " "}.</Link>
        </span>{" "}
        | <Link to="/logout">Logout</Link>
      </div>
    </header>
  );
}

export default Navbar;
