import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <Card onClick={handleClick} sx={{ cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body1">{course.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
