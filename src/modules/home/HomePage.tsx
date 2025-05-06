import React from 'react';
import Navbar from './Navbar.tsx';
import StudentHome from './StudentHome.tsx';
import InstructorHome from './InstructorHome.tsx';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("evidwan-current-user") || "{}");

  if (!user || !user.role) {
    return <p>User not found. Please log in again.</p>;
  }

  return (
    <div>
      <Navbar userRole={user.role} />
      {user.role === "Student" && <StudentHome />}
      {user.role === "Instructor" && <InstructorHome />}
      {user.role === "Admin" && (
        <div>
          <h2>Welcome, Admin!</h2>
          <p>This is your dashboard (to be implemented).</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
