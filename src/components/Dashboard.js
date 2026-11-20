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

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box my={4}>
          <Grid container spacing={3}>
            {courseGroups.map((group, index) => (
              <Grid item lg={12} key={index}>
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
