import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./modules/auth/AuthForms.tsx";
import StudentCourse from "./modules/course/StudentCourse.tsx";
import InstructorCourse from "./modules/course/InstructorCourse.tsx";
import InstructorHome from "./modules/home/InstructorHome.tsx";
import StudentHome from "./modules/home/StudentHome.tsx";
import StudentReport from "./modules/report/StudentReport.tsx"
import InstructorReport from "./modules/report/InstructorReport.tsx"
import InstructorAssignment from "./modules/assessments/InstructorAssignment.tsx";
import StudentAssignment from "./modules/assessments/StudentAssignment.tsx";
import InstructorQuiz from "./modules/assessments/InstructorQuiz.tsx";
import StudentQuiz from "./modules/assessments/StudentQuiz.tsx"
import CommunicationModule from "./modules/communication/CommunicationModule.tsx";

const App = () => {
    const user = JSON.parse(localStorage.getItem("evidwan-current-user") || "null");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} /> 
        <Route path="/instructor/home" element={<InstructorHome />} />
        <Route path="/student/home" element={<StudentHome />} />
        <Route
          path="/instructor/course"
          element={user ? <InstructorCourse /> : <Navigate to="/" replace />}
        />
         <Route
          path="/student/course"
          element={user ? <StudentCourse /> : <Navigate to="/" replace />}
         />
         <Route
          path="/instructor/report"
          element={user ? <InstructorReport /> : <Navigate to="/" replace />}
        />
         <Route
          path="/student/report"
          element={user ? <StudentReport /> : <Navigate to="/" replace />}
         />
         <Route
          path="/instructor/assignment"
          element={user ? <InstructorAssignment /> : <Navigate to="/" replace />}
        />
         <Route
          path="/student/assignment"
          element={user ? <StudentAssignment /> : <Navigate to="/" replace />}
         />
         <Route
          path="/instructor/quiz"
          element={user ? <InstructorQuiz /> : <Navigate to="/" replace />}
        />
         <Route
          path="/student/quiz"
          element={user ? <StudentQuiz /> : <Navigate to="/" replace />}
         />
         <Route
          path="/communication"
          element={user ? <CommunicationModule /> : <Navigate to="/" replace />}
         />
      </Routes>
    </Router>
  );
};

export default App;
