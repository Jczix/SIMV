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

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a5",
      },
      {
        id: 8,
        title: "Moodulo 2",
        description: " Planificacion Financiera",

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a6",
      },
      {
        id: 9,
        title: "Moodulo 3",
        description: " Practica de conocimientso",

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a7",
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

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a2",
      },
      {
        id: 5,
        title: "Moodulo 2",
        description: " Tipos Comunes de Fraude",

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a3",
      },
      {
        id: 6,
        title: "Moodulo 3",
        description: "  Practica de conocimientso",

        iframeUrl: "https://view.genially.com/66b404e7fc127cee4c4fb1a4",
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
              <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
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
