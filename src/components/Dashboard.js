import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import CourseGroupCard from "./CourseGroupCard";

const courseGroups = [
  {
    title: "Mecanismo de Inversión Colectiva",
    courses: [
      {
        id: 1,
        title: "Moodulo 1",
        description: " Inversión Colectiva",
        iframeUrl: "https://view.genially.com/66adbf64e9a3b623629dec6a",
      },
      {
        id: 2,
        title: "Moodulo 2",
        description: " Guía Inversión Colectiva",

        iframeUrl: "https://view.genially.com/66add33fcc88dc4b87f348d8",
      },
      {
        id: 3,
        title: "Moodulo 3",
        description: " Practica de conocimientso",

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a1",
      },
    ],
  },
  {
    title: "Finanzas Personales",
    courses: [
      {
        id: 7,
        title: "Moodulo 1",
        description: " Fundamentos de Finanzas Personales",

        iframeUrl: "https://view.genially.com/66b3e283f834f15bdd33a735",
      },
      {
        id: 8,
        title: "Moodulo 2",
        description: " Planificacion Financiera",

        iframeUrl: "https://view.genially.com/66b3e2b3e7491d840f5308e8",
      },
      {
        id: 9,
        title: "Moodulo 3",
        description: " Practica de conocimientso",

        iframeUrl: "https://view.genially.com/66b3e320f834f15bdd33ebb0",
      },
    ],
  },
  {
    title: "Esquemas Fraudulentos",
    courses: [
      {
        id: 4,
        title: "Moodulo 1",
        description: " Esquemas Fraudulentos",

        iframeUrl: "https://view.genially.com/66b3e20bdff4fdba87fcbff6",
      },
      {
        id: 5,
        title: "Moodulo 2",
        description: " Tipos Comunes de Fraude",

        iframeUrl: "https://view.genially.com/66b3e23d01855a2776c6b11c",
      },
      {
        id: 6,
        title: "Moodulo 3",
        description: "  Practica de conocimientso",

        iframeUrl: "https://view.genially.com/66b404e4041e438f6af62bb3",
      },
    ],
  },
];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box my={4}>
          <Grid container spacing={3}>
            {courseGroups.map((group, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CourseGroupCard group={group} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
