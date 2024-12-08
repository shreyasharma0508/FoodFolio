import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    goals: [],
    weeklyGoal: "",
    activityLevel: "",
    dob: "",
    zipCode: "",
    heightFeet: "",
    heightInches: "",
    currentWeight: "",
    goalWeight: "",
    agree: false,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing user data
export const useUser = () => useContext(UserContext);
