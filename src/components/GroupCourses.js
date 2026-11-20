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
      },
      {
        id: 2,
        title: "Módulo 2",
        description: "Guía Inversión Colectiva",
      },
      {
        id: 3,
        title: "Módulo 3",
        description: "Práctica de conocimiento",
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
      },
      {
        id: 5,
        title: "Módulo 2",
        description: "Planificación Financiera",
      },
      {
        id: 6,
        title: "Módulo 3",
        description: "Práctica de conocimiento",
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
      },
      {
        id: 8,
        title: "Módulo 2",
        description: "Tipos Comunes de Fraude",
      },
      {
        id: 9,
        title: "Módulo 3",
        description: "Práctica de conocimiento",
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
