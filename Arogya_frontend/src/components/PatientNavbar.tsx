import React from "react";
import { Link } from "react-router-dom";

const PatientNavbar: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <img
          src="/path/to/logo.png"
          alt="Arogya Logo"
          className="h-8 w-8 mr-2"
        />{" "}
        {/* Replace with your logo path */}
        <span
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Arogya
        </span>
      </div>
      <div className="flex-grow mx-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/home"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-900"
              } hover:underline`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </nav>
  );
};

export default PatientNavbar;
