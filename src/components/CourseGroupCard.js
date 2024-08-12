import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseGroupCard = ({ group }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${group.title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <Card
      onClick={handleClick}
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
        <Typography variant="h5">{group.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseGroupCard;
