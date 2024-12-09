import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || {});
  const [newTask, setNewTask] = useState("");
  const [image, setImage] = useState(null); // State to hold the uploaded image
  const [groceryList, setGroceryList] = useState([]); // Placeholder state for grocery list

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    // Simulate generating a grocery list (this will be dynamic in the future)
    setGroceryList(["Tomatoes", "Milk", "Bread"]);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const dateKey = selectedDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = {
      ...tasks,
      [dateKey]: [...dateTasks, { text: newTask, completed: false }],
    };

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (taskIndex) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = dateTasks.filter((_, index) => index !== taskIndex);

    setTasks({ ...tasks, [dateKey]: updatedTasks });
  };

  const toggleTaskCompletion = (taskIndex) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = dateTasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );

    setTasks({ ...tasks, [dateKey]: updatedTasks });
  };

  const hasTasks = (date) => {
    const dateKey = date.toISOString().split("T")[0];
    return tasks[dateKey] && tasks[dateKey].length > 0;
  };

  const dateKey = selectedDate.toISOString().split("T")[0];
  const dateTasks = tasks[dateKey] || [];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage tasks for specific dates using the calendar and to-do list.</p>
      </div>
      <div className="dashboard-content">
        {/* Photo Upload Section */}
        <div className="photo-upload-section">
          <input type="file" id="file" onChange={handleImageChange} style={{ display: 'none' }} />
          <label htmlFor="file">Upload Photo</label> {/* Styled label for file input */}
          {image && <span className="file-name">{image.name}</span>} {/* Display selected file name */}

          {image && (
            <div className="grocery-list">
              <h3>Grocery List</h3>
              <ul>
                {groceryList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Existing UI Components */}
        <div className="dashboard-left">
          <section className="dashboard-section calendar">
            <h3>Your Calendar</h3>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="dashboard-calendar"
              tileClassName={({ date, view }) =>
                view === "month" && hasTasks(date) ? "task-indicator" : null
              }
            />
            <p>
              Selected Date: <strong>{selectedDate.toDateString()}</strong>
            </p>
          </section>
        </div>
        <div className="dashboard-right">
          <section className="dashboard-section tasks">
            <h3>Tasks for {selectedDate.toDateString()}</h3>
            <div className="task-input">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
              {dateTasks.map((task, index) => (
                <li key={index} className={task.completed ? "completed" : ""}>
                  <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                  <button className="delete-task" onClick={() => deleteTask(index)}>
                    &times;
                  </button>
                </li>
              ))}
              {dateTasks.length === 0 && <p>No tasks for this date.</p>}
            </ul>
          </section>
        </div>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Foodfolio. All rights reserved. Created by Aung Myat & Shreya Sharma.</p>
      </footer>
    </div>
  );

}

export default Dashboard;
