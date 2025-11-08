// src/COMPONENTS/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Assets } from "../assets/asset";

export default function Navbar() {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => Boolean(localStorage.getItem("currentUser")));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => setToken(Boolean(localStorage.getItem("currentUser")));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleCreateAccount = () => navigate("/Register");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setToken(false);
    navigate("/");
  };

  const handleProfileClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <header
      className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200 bg-white shadow-sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
        marginBottom: "1.25rem",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "white",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <img
          src={Assets.Logo}
          alt="Logo"
          className="w-12 h-12 cursor-pointer object-contain"
          style={{ width: "3rem", height: "3rem", cursor: "pointer", objectFit: "contain" }}
          onClick={() => navigate("/")}
        />
        <span
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors"
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#059669", cursor: "pointer" }}
        >
          Ayurplus
        </span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="hidden md:flex items-center gap-6 font-medium list-none" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <NavLink to="/" className="nav-link px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300">
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" className="nav-link px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300">
              ALL DOCTORS
            </NavLink>
          </li>

          <li>
            <NavLink to="/Medicine" className="nav-link px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300">
              GET MEDICINES
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300">
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Side - Profile or Button */}
      <div className="hidden md:block">
        {token ? (
          <div
            className="relative flex items-center gap-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="flex items-center gap-2"
              onClick={() => setDropdownOpen((p) => !p)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <img src={Assets.profile} alt="Profile" className="w-10 h-10 rounded-full" />
              <img src={Assets.dicon} alt="Dropdown Icon" className="w-5 h-5" />
            </div>

            {/* Dropdown: controlled by state for reliable visibility */}
            <div
              className={`absolute right-0 mt-3 text-base font-medium text-gray-600 z-50 ${dropdownOpen ? "block" : "hidden"}`}
              style={{ minWidth: "12rem", background: "#f7f7f7", borderRadius: "0.5rem", padding: "0.75rem", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}
            >
              <button
                type="button"
                onClick={() => handleProfileClick("/my-profile")}
                className="w-full text-left hover:text-black cursor-pointer py-1"
              >
                My Profile
              </button>

              <button
                type="button"
                onClick={() => handleProfileClick("/myappointments")}
                className="w-full text-left hover:text-black cursor-pointer py-1"
              >
                My Appointments
              </button>

              <button type="button" onClick={handleLogout} className="w-full text-left hover:text-black cursor-pointer py-1">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button onClick={handleCreateAccount} className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors">
            Create Account
          </button>
        )}
      </div>
    </header>
  );
}
