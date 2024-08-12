import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
      style={{
        backgroundColor: "#f0f0f0",
        width: "100%",
        maxWidth: 350,
        margin: "0 auto",
        ...(window.innerWidth <= 600 && {
          maxWidth: "100%",
        }),
      }}
    >
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
