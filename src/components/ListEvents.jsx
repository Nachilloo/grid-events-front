// import React from "react";
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
  },
  {
    title: "Event 6",
    date: "2024-06-06",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 7",
    date: "2024-06-07",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790197509%2F638997145813%2F1%2Foriginal.20240615-113230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e95884fbb3fa75e8a863a696548082eb",
  },
  {
    title: "Event 8",
    date: "2024-06-08",
    image: "https://via.placeholder.com/400x200",
  },
  {
    title: "Event 9",
    date: "2024-06-09",
    image: "https://via.placeholder.com/400x200",
  },
  {
    title: "Event 10",
    date: "2024-06-10",
    image: "https://via.placeholder.com/400x200",
  },
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

function ListEvents() {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Typography variant="h5" style={{ margin: "2rem 0" }}>
        Eventos cerca de las palmas
      </Typography>
      <ScrollContainer>
        {events.map((event, index) => (
          <EventCard key={index}>
            <CardMedia
              component="img"
              height="140"
              image={event.image}
              alt={event.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.date}
              </Typography>
            </CardContent>
          </EventCard>
        ))}
      </ScrollContainer>
    </Container>
  );
}

export default ListEvents;
