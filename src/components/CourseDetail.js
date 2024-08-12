import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const courses = [
  {
    id: 1,
    title: "1MIC - inversion colectiva",
    iframeUrl: "https://view.genially.com/66adbf64e9a3b623629dec6a",
  },
  {
    id: 2,
    title: "curso de desarrollo mobile con react native",
    iframeUrl: "https://view.genially.com/66add33fcc88dc4b87f348d8",
  },
  {
    id: 3,
    title: "Template: Workplace Wellness",
    iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a1",
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      <iframe
        src={course.iframeUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowscriptaccess="always"
        allowFullScreen={true}
        scrolling="yes"
        allownetworking="all"
      ></iframe>
    </Box>
  );
};

export default CourseDetail;
