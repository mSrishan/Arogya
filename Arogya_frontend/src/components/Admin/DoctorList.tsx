import { useEffect, useState } from "react";
import axios from "axios"; // Ensure you import axios
import { Doctor } from "../../types/Doctor"; // Adjust the import based on your structure

const DoctorList: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors"); // Ensure this matches your backend
        setDoctors(response.data);
      } catch (err) {
        setError("Failed to load doctors");
        console.error(err);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div
      className={darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
    >
      <h1 className="text-2xl">Doctor List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
