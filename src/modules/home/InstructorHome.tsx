import React from 'react';

const InstructorHome = () => {
  return (
    <div className="instructor-home" style={{ padding: "2rem" }}>
      <h2>Welcome, Instructor!</h2>
      <p>Manage your courses here:</p>
      {/* Placeholder: Course creation form or management table can go here */}
      <div style={{
        backgroundColor: "#eeeeee",
        padding: "1rem",
        borderRadius: "10px",
        color: "#393e46"
      }}>
        <p>You have no courses yet. Add a course to get started!</p>
      </div>
    </div>
  );
};

export default InstructorHome;
