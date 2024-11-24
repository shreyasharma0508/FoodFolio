import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to FoodFolio</h2>
      <p>Track your tasks, notes, and reduce food waste!</p>
      <div className="widgets">
        <div className="widget">Real-Time Clock: {new Date().toLocaleTimeString()}</div>
        <div className="widget">Food Waste Insights (Coming Soon)</div>
      </div>
    </div>
  );
}

export default Dashboard;
