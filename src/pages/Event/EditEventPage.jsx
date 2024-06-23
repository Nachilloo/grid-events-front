import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ParticlesBackground from "./ParticlesBackground"; // Importa el componente de partículas

const initialEvent = {
  title: "React & Material UI Workshop",
  description:
    "Join us for a hands-on workshop exploring the power of React and Material UI. Learn to build beautiful and responsive applications with ease.",
  date: "2024-06-22",
  location: "Las Palmas, Spain",
  about:
    "This event is about learning the fundamentals and advanced features of React and Material UI. Perfect for developers of all skill levels.",
  maxAttendees: 100,
  price: 50,
  image: "https://via.placeholder.com/800x400",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          padding: "20px",
        },
      },
    },
  },
});

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  boxShadow: theme.shadows[3],
  backgroundColor: "rgba(255, 255, 255, 0.9)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const EditEventPage = () => {
  const [event, setEvent] = useState(initialEvent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos actualizados del evento a la base de datos
    alert("Event updated successfully!");
  };

  return (
    <ThemeProvider theme={theme}>
      <ParticlesBackground /> {/* Componente de fondo de partículas */}
      <Container maxWidth="md" style={{ position: "relative", zIndex: 1 }}>
        <FormContainer>
          <Typography variant="h4" gutterBottom>
            Edit Event
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={event.title}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={event.description}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Date"
              name="date"
              value={event.date}
              onChange={handleChange}
              margin="normal"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={event.location}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="About"
              name="about"
              value={event.about}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Max Attendees"
              name="maxAttendees"
              value={event.maxAttendees}
              onChange={handleChange}
              margin="normal"
              type="number"
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={event.price}
              onChange={handleChange}
              margin="normal"
              type="number"
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={event.image}
              onChange={handleChange}
              margin="normal"
            />
            <StyledButton type="submit" variant="contained" fullWidth>
              Save Changes
            </StyledButton>
          </form>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
};

export default EditEventPage;
