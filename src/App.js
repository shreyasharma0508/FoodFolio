import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MultiStepForm from "./SignIn/MultiStepForm";
import Dashboard from "./components/Dashboard";
import Notes from "./components/Notes";
import Profile from "./components/Profile";
import ToDoList from "./components/ToDoList";
import WasteInsights from './components/WasteInsights/WasteInsights';
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MultiStepForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/waste-insights" element={<WasteInsights />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
