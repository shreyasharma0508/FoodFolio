import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./SignIn/MultiStepForm";
import Dashboard from "./Dashboard";
import Notes from "./Notes";
import Profile from "./Profile";
import ToDoList from "./ToDoList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
