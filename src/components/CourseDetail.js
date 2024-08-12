import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Módulo 1",
    iframeUrl: "https://view.genially.com/66adbf64e9a3b623629dec6a",
  },
  {
    id: 2,
    title: "Módulo 2",
    iframeUrl: "https://view.genially.com/66add33fcc88dc4b87f348d8",
  },
  {
    id: 3,
    title: "Módulo 3",
    iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a1",
  },
  {
    id: 4,
    title: "Módulo 1",
    iframeUrl: "https://view.genially.com/66b3e283f834f15bdd33a735",
  },
  {
    id: 5,
    title: "Módulo 2",
    iframeUrl: "https://view.genially.com/66b3e2b3e7491d840f5308e8",
  },
  {
    id: 6,
    title: "Módulo 3",
    iframeUrl: "https://view.genially.com/66b3e320f834f15bdd33ebb0",
  },
  {
    id: 7,
    title: "Módulo 1",
    iframeUrl: "https://view.genially.com/66b3e20bdff4fdba87fcbff6",
  },
  {
    id: 8,
    title: "Módulo 2",
    iframeUrl: "https://view.genially.com/66b3e23d01855a2776c6b11c",
  },
  {
    id: 9,
    title: "Módulo 3",
    iframeUrl: "https://view.genially.com/66b404e4041e438f6af62bb3",
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
