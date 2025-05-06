import React from 'react';

const StudentHome = () => {
  return (
    <div className="student-home" style={{ padding: "2rem" }}>
      <h2>Welcome, Student!</h2>
      <p>Browse and enroll in courses below:</p>
      {/* Placeholder: You can map course cards here later */}
      <div style={{
        backgroundColor: "#eeeeee",
        padding: "1rem",
        borderRadius: "10px",
        color: "#393e46"
      }}>
        <p>No courses yet. Catalog coming soon!</p>
      </div>
    </div>
  );
};

export default StudentHome;
