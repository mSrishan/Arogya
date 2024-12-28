import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/Admin/AdminNavbar";
import PatientNavbar from "./components/PatientNavbar";
import AdminDashboard from "./components/Admin/AdminDashboard";
import DoctorList from "./components/Admin/DoctorList"; // Import DoctorList component

const App: React.FC = () => {
  const userRole = "admin"; // Replace with your logic to get the user's role

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        {/* Conditional Navbar based on the user role */}
        {userRole === "admin" ? (
          <AdminNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        ) : (
          <PatientNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}

        <Routes>
          <Route path="/" element={<h1>Welcome Home</h1>} />{" "}
          {/* Add a default route */}
          <Route
            path="/admin"
            element={<AdminDashboard darkMode={darkMode} />}
          />
          <Route
            path="/admin/doctors"
            element={<DoctorList darkMode={darkMode} />}
          />
          {/* Uncomment the following line when the Login component is ready */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
