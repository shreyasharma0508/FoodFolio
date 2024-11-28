import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Foodfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#to-do-list">To-Do List</a>
          <a href="#notes">Notes</a>
          <a href="#waste-insights">Waste Insights</a>
        </nav>
        <div className="user-info">
          <span>Hi, John D.</span> | <a href="#settings">Settings</a> |{" "}
          <a href="#logout">Logout</a>
        </div>
      </header>
      <main className="content">
        <section className="tasks">
          <h2>Tasks for the day</h2>
          <ul>
            <li>Make breakfast</li>
            <li>Prep lunch</li>
          </ul>
        </section>
        <section className="food-waste">
          <h2>Global Food Waste</h2>
          <div className="chart-placeholder">
            {/* Replace with actual chart */}
            <div className="pie-chart"></div>
            <div className="chart-info"></div>
          </div>
        </section>
        <section className="today">
          <h2>Today</h2>
          <div className="clock-placeholder">
            <div className="clock-icon"></div>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
          <div className="calendar-placeholder">
            {/* Replace with actual calendar */}
            <div className="calendar-grid"></div>
          </div>
        </section>
      </main>
      <footer>
        <p>All rights reserved. Aung Myat, Shreya Sharma</p>
      </footer>
    </div>
  );
}

export default Dashboard;
