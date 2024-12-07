import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ToDoList.css";

function TodoList() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || {});
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const dateKey = selectedDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = {
      ...tasks,
      [dateKey]: [...dateTasks, { text: newTask, priority, completed: false }],
    };

    setTasks(updatedTasks);
    setNewTask("");
  };

  const toggleComplete = (taskIndex) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = dateTasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );

    setTasks({ ...tasks, [dateKey]: updatedTasks });
  };

  const deleteTask = (taskIndex) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const dateTasks = tasks[dateKey] || [];
    const updatedTasks = dateTasks.filter((_, index) => index !== taskIndex);

    setTasks({ ...tasks, [dateKey]: updatedTasks });
  };

  const dateKey = selectedDate.toISOString().split("T")[0];
  const dateTasks = tasks[dateKey] || [];

  // Determine if a date has tasks
  const hasTasks = (date) => {
    const dateKey = date.toISOString().split("T")[0];
    return tasks[dateKey] && tasks[dateKey].length > 0;
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="calendar-section">
        <h3>Select a Date</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="todo-calendar"
          tileClassName={({ date, view }) =>
            view === "month" && hasTasks(date) ? "task-indicator" : null
          }
        />
        <p>
          Selected Date: <strong>{selectedDate.toDateString()}</strong>
        </p>
      </div>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <h3>Tasks for {selectedDate.toDateString()}</h3>
      <ul className="task-list">
        {dateTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span>
              {task.text} - <em>({task.priority})</em>
            </span>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
        {dateTasks.length === 0 && <p>No tasks for this date.</p>}
      </ul>
    </div>
  );
}

export default TodoList;
