import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Logo and Name */}
      <div className="text-xl font-bold flex items-center">
        <img src="/path/to/logo.png" alt="Arogya Logo" className="h-8 mr-2" />{" "}
        {/* Update logo path */}
        Arogya
      </div>

      {/* Navigation Links */}
      <div className="flex-grow mx-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/admin"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/doctors"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/admin/patients"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Patients
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Mode Toggle Switch */}
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-600 relative">
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                darkMode ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </div>
          <span className="ml-3 text-gray-800 dark:text-white">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </label>
      </div>
    </nav>
  );
};

export default AdminNavbar;
