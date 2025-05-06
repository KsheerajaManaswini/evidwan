import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./modules/auth/AuthForms.tsx";
import HomePage from "./modules/home/HomePage.tsx";
const App = () => {
    const user = JSON.parse(localStorage.getItem("evidwan-current-user") || "null");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/" replace />}
        />

        {/* Optional: Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* You can add more routes later */}
      </Routes>
    </Router>
  );
};

export default App;
