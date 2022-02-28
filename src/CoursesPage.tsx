import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "First Course",
    },
    {
      id: 2,
      title: "Second Course",
    },
  ];

  return (
    <div className="remote_courses_wrapper">
      {courses.map(({ id, title }) => (
        <div key={id} className="remote_course_card">
          <Link to={`${id}`}>
            <span>{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
