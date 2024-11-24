import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <h1>FoodFolio</h1>
      <ul>
        <li onClick={() => setCurrentPage("Dashboard")}>Dashboard</li>
        <li onClick={() => setCurrentPage("TodoList")}>To-Do List</li>
        <li onClick={() => setCurrentPage("Notes")}>Notes</li>
        <li onClick={() => setCurrentPage("Profile")}>Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
