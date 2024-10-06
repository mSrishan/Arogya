import React, { useState } from "react";
import axios from "axios";

const AddDoctor: React.FC = () => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("specialization", specialization);
    if (image) {
      formData.append("image", image);
    }
    await axios.post("http://localhost:8080/api/doctors", formData);
    // Handle success
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Doctor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;
