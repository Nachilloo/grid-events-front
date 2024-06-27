// import React from "react";
import { useEffect } from "react";
import { fetchEvents } from '../services/eventsService.js'
import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const events = [
  {
    title: "Event 1",
    date: "2024-06-01",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 2",
    date: "2024-06-02",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 3",
    date: "2024-06-03",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 4",
    date: "2024-06-04",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 5",
    date: "2024-06-05",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  }
];

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  padding: theme.spacing(2),
  "&::-webkit-scrollbar": {
//   display: 'block'
  },
  // "-ms-overflow-style": "none",
  // "scrollbar-width": "none",
}));

const EventCard = styled(Card)(({ theme }) => ({
  minWidth: 300,
  margin: theme.spacing(2),
  flex: "0 0 auto",
}));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ListEvents() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getEvents() {
      try {
        const eventsData = await fetchEvents();
        const shuffledEvents = shuffleArray(eventsData);
        setEvents(shuffledEvents.slice(0, 10));
      } catch (error) {
        setError(error.message);
      }
    }

    getEvents();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Typography variant="h5" style={{ margin: "2rem 0" }}>
        Eventos destacados
      </Typography>
      <ScrollContainer>
        {events.map((event, id) => (
          <EventCard key={id}>
            <CardMedia
              component="img"
              Width="100"
              height="140"
              image={event.imgProfile || "default-image-url.jpg"}
              alt={event.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="h6" component="div">
                {event.location}
              </Typography>
            </CardContent>
          </EventCard>
        ))}
      </ScrollContainer>
    </Container>
  );
}

export default ListEvents;
