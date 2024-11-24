import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TodoList from "./components/TodoList";
import Notes from "./components/Notes";
import Profile from "./components/Profile";
import "./styles.css";

function App() {
  const [currentPage, setCurrentPage] = React.useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "TodoList":
        return <TodoList />;
      case "Notes":
        return <Notes />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
