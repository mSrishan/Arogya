import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Admin Dashboard</h1>
      </header>
      <main className="p-4">
        <h2 className="text-lg">Manage Doctors</h2>
        {/* Add components for doctor management here */}
      </main>
    </div>
  );
};

export default AdminDashboard;
