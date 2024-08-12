import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import Navbar from "./Navbar";

const courseGroups = [
  {
    title: "Mecanismo de Inversión Colectiva",
    courses: [
      {
        id: 1,
        title: "Módulo 1",
        description: "Inversión Colectiva",
        iframeUrl: "https://view.genially.com/66adbf64e9a3b623629dec6a",
      },
      {
        id: 2,
        title: "Módulo 2",
        description: "Guía Inversión Colectiva",
        iframeUrl: "https://view.genially.com/66add33fcc88dc4b87f348d8",
      },
      {
        id: 3,
        title: "Módulo 3",
        description: "Practica de conocimiento",
        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a1",
      },
    ],
  },
  {
    title: "Finanzas Personales",
    courses: [
      {
        id: 4,
        title: "Módulo 1",
        description: "Fundamentos de Finanzas Personales",
        iframeUrl: "https://view.genially.com/66b3e283f834f15bdd33a735",
      },
      {
        id: 5,
        title: "Módulo 2",
        description: "Planificacion Financiera",
        iframeUrl: "https://view.genially.com/66b3e2b3e7491d840f5308e8",
      },
      {
        id: 6,
        title: "Módulo 3",
        description: "Practica de conocimientso",
        iframeUrl: "https://view.genially.com/66b3e320f834f15bdd33ebb0",
      },
    ],
  },
  {
    title: "Esquemas Fraudulentos",
    courses: [
      {
        id: 7,
        title: "Módulo 1",
        description: "Esquemas Fraudulentos",
        iframeUrl: "https://view.genially.com/66b3e20bdff4fdba87fcbff6",
      },
      {
        id: 8,
        title: "Módulo 2",
        description: "Tipos Comunes de Fraude",
        iframeUrl: "https://view.genially.com/66b3e23d01855a2776c6b11c",
      },
      {
        id: 9,
        title: "Módulo 3",
        description: "Practica de conocimientso",
        iframeUrl: "https://view.genially.com/66b404e4041e438f6af62bb3",
      },
    ],
  },
];

const GroupCourses = () => {
  const { groupName } = useParams();
  const group = courseGroups.find(
    (g) => g.title.toLowerCase().replace(/\s+/g, "-") === groupName
  );

  if (!group) {
    return <Typography variant="h6">Grupo no encontrado</Typography>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            {group.description}
          </Typography>
          <Grid container spacing={3}>
            {group.courses.map((course) => (
              <Grid item lg={12} key={course.id}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GroupCourses;
