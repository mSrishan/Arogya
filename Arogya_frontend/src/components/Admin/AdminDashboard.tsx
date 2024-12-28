import { useState } from "react";
import axios from "axios";

const AdminDashboard: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !specialization || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("specialization", specialization);
    formData.append("image", image);

    setIsSubmitting(true); // Set submitting state to true

    try {
      // Send POST request to add a doctor
      await axios.post("http://localhost:8080/api/doctors", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Doctor added successfully!");
      // Reset form fields
      setName("");
      setSpecialization("");
      setImage(null);
    } catch (error) {
      console.error("There was an error adding the doctor:", error);
      alert("Failed to add doctor. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-tr from-fuchsia-300 to-sky-500"
      }`}
    >
      <section
        className={`p-6 ${
          darkMode ? "bg-gray-800" : "bg-sky-100"
        } rounded shadow-lg max-w-md w-full mx-auto`}
      >
        <div className="text-center mb-8">
          <h1
            className={`tracking-wide text-3xl ${
              darkMode ? "text-white" : "text-gray-900"
            } font-black`}
          >
            Admin Dashboard
          </h1>
          <h3
            className={`tracking-wide font-medium text-xl ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Add A Doctor
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Name Input */}
          <div className="flex flex-col mb-3">
            <label
              htmlFor="name"
              className={`pb-1 text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`px-3 py-2 ${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-100 text-gray-900"
              } border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              autoComplete="off"
              required // Mark the field as required
            />
          </div>

          {/* Specialization Input */}
          <div className="flex flex-col mb-3">
            <label
              htmlFor="specialization"
              className={`pb-1 text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className={`px-3 py-2 ${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-100 text-gray-900"
              } border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              autoComplete="off"
              required // Mark the field as required
            />
          </div>

          {/* Image Input */}
          <div className="flex flex-col mb-3">
            <label
              htmlFor="image"
              className={`pb-1 text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*" // Restrict file types to images
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className={`px-3 py-2 ${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-100 text-gray-900"
              } border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              required // Mark the field as required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${
              darkMode
                ? "bg-gradient-to-r from-pink-600 to-red-600"
                : "bg-gradient-to-r from-pink-600 to-red-600"
            } px-4 py-2 text-white font-medium rounded-md shadow-lg transition duration-300 hover:bg-red-700`}
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;
