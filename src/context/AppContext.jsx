import React, { createContext, useState } from "react";
import { doctors as initialDoctors } from "../assets/asset";

// Create the context
export const AppContext = createContext();

// AppContextProvider component
const AppContextProvider = ({ children }) => {
  // State for doctors list (can be updated later, e.g., from API)
  const [doctors, setDoctors] = useState(initialDoctors);

  // You can add more global states here later (e.g., currentUser, appointments)
  const [currentUser, setCurrentUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const value = {
    doctors,
    setDoctors,
    currentUser,
    setCurrentUser,
    appointments,
    setAppointments,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
