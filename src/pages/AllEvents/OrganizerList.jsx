// import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

// Estilos para la tarjeta del organizador
const OrganizerCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

// Estilos para el contenido de la tarjeta
const OrganizerCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  marginLeft: 16,
});

// Lista de organizadores
const organizers = [
  {
    name: "John Doe",
    role: "Event Coordinator",
    image: "./Organizer1.png",
  },
  {
    name: "Pedro Rodriguez",
    role: "Marketing Manager",
    image: "./Organizer2.png",
  },
  {
    name: "Alice Johnson",
    role: "Technical Lead",
    image: "./Organizer3.png",
  },
  {
    name: "Lili Brown",
    role: "HR Specialist",
    image: "./Organizer4.png",
  },
  {
    name: "David Lee",
    role: "Product Manager",
    image: "./Organizer5.png",
  },
  {
    name: "Sarah Wilson",
    role: "Sales Executive",
    image: "./Organizer6.png",
  },
];

const OrganizerList = () => {
  return (
    <Grid container spacing={4} margin={"15px"}>
      {organizers.map((organizer, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <OrganizerCard>
            <Avatar
              alt={organizer.name}
              src={organizer.image}
              sx={{ width: 80, height: 80 }}
            />
            <OrganizerCardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {organizer.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {organizer.role}
              </Typography>
            </OrganizerCardContent>
          </OrganizerCard>
        </Grid>
      ))}
    </Grid>
  );
};
export default OrganizerList;
