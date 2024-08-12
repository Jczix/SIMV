import CourseDetail from "components/CourseDetail";
import Dashboard from "components/Dashboard";
import GroupCourses from "components/GroupCourses";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses/:groupName" element={<GroupCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
