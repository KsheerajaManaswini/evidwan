import React, { useState } from "react";
import "./InstructorCourse.css";
import Navbar from "../home/Navbar.tsx";

interface Course {
  title: string;
  creator: string;
  level: string;
  imageUrl: string;
}

const InstructorCourse: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      title: "Python for Data Science",
      creator: "Patel MemStack",
      level: "Medium",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.adyId6xev41Zm0pO6B1zZQHaDt?w=337&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      title: "Mastering Next.js: Full Stack Development",
      creator: "Patel MemStack",
      level: "Medium",
      imageUrl: "https://cdn.filestackcontent.com/8MbtJ4hTAaOk3KPcptqZ"
    },
    {
      title: "Introduction to Cybersecurity",
      creator: "Patel MemStack",
      level: "Beginner",
      imageUrl: "https://www.aqskill.com/wp-content/uploads/2023/09/cybersecurity-scaled.jpg"
    },
    {
      title: "UI/UX Design Fundamentals",
      creator: "Patel MemStack",
      level: "Beginner",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.9Gmoyz-plh976-yepyrPigHaEW&rs=1&pid=ImgDetMain"
    }
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newCourse, setNewCourse] = useState<Course>({
    title: "",
    creator: "",
    level: "",
    imageUrl: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleCreateCourse = () => {
    console.log(showDialog)
    if (editIndex !== null) {
      const updatedCourses = courses.map((course, index) =>
        index === editIndex ? newCourse : course
      );
      setCourses(updatedCourses);
      setEditIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }
    setShowDialog(false);
    setNewCourse({ title: "", creator: "", level: "", imageUrl: "" });
  };

  const handleEditCourse = (index: number) => {
    setEditIndex(index);
    setNewCourse(courses[index]);
    setShowDialog(true);
  };

  const handleDeleteCourse = (index: number) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <>
    <Navbar role="instructor" />
    <div className="instructor-page">
      <div className="container">
        <h2 className="heading">Instructor Dashboard</h2>

        <div className="card">
          <h3>Manage Courses</h3>
          <button className="create-button" onClick={() => setShowDialog(true)}>
            + Create Course
          </button>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.creator}</p>
                <p>{course.level}</p>
                <div className="button-row">
                  <button className="edit-button" onClick={() => handleEditCourse(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDeleteCourse(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDialog && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editIndex !== null ? "Edit Course" : "Create New Course"}</h3>
            <input type="text" name="title" value={newCourse.title} onChange={handleInputChange} placeholder="Course Title" />
            <input type="text" name="creator" value={newCourse.creator} onChange={handleInputChange} placeholder="Instructor Name" />
            <input type="text" name="level" value={newCourse.level} onChange={handleInputChange} placeholder="Course Level" />
            <input type="text" name="imageUrl" value={newCourse.imageUrl} onChange={handleInputChange} placeholder="Image URL" />
            <div className="button-row">
              <button className="create-button" onClick={handleCreateCourse}>OK</button>
              <button className="delete-button" onClick={() => setShowDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default InstructorCourse;
