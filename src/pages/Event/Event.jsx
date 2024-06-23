import React, { useState } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const event = {
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

const CartContainer = styled(Paper)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  padding: theme.spacing(3),
  textAlign: "center",
  width: "250px",
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    position: "relative",
    top: "auto",
    right: "auto",
    transform: "none",
    marginTop: theme.spacing(2),
  },
}));

const EventCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Event = () => {
  const [ticketCount, setTicketCount] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddTicket = () => {
    if (ticketCount < event.maxAttendees) {
      setTicketCount(ticketCount + 1);
    }
  };

  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePurchase = () => {
    alert(
      `Purchased ${ticketCount} tickets for a total of $${
        ticketCount * event.price
      }`
    );
  };

  return (
    <Container
      maxWidth="md"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <EventCard>
        <CardMedia
          component="img"
          height="400"
          image={event.image}
          alt={event.title}
        />
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Localizacion:</strong> {event.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Acerca del evento:</strong> {event.about}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Cantidad de asistentes:</strong> {event.maxAttendees}
          </Typography>
          <Typography variant="h5" color="primary" paragraph>
            <strong>Precio de la entrada:</strong> ${event.price}
          </Typography>
        </CardContent>
      </EventCard>
      <CartContainer>
        <Typography variant="h6" component="div" gutterBottom>
          <ShoppingCartIcon /> Admision general
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
        >
          <IconButton onClick={handleRemoveTicket} disabled={ticketCount === 0}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6" style={{ margin: "0 1rem" }}>
            {ticketCount}
          </Typography>
          <IconButton
            onClick={handleAddTicket}
            disabled={ticketCount === event.maxAttendees}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          Total: {ticketCount * event.price} €
        </Typography>
        <StyledButton
          variant="contained"
          fullWidth
          onClick={handlePurchase}
          disabled={ticketCount === 0}
        >
          Comrpar entradas
        </StyledButton>
      </CartContainer>
    </Container>
  );
};

export default Event;
