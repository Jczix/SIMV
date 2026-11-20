import React from "react";
import { useParams } from "react-router-dom";
import ModuleViewer from "./ModuleViewer";

const CourseDetail = () => {
  const { id } = useParams();
  // Keyed by id so slide/quiz state resets when moving to another module.
  return <ModuleViewer key={id} id={parseInt(id, 10)} />;
};

export default CourseDetail;
