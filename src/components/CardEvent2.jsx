import { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import EventCard from "./EventCardGrid";
import { Link } from "react-router-dom";
import { fetchEvents } from "../services/eventsService.js";
import Tilt from "react-vanilla-tilt";
import "./CardEvent.css"

function EventsList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getEvents() {
      try {
        const eventsData = await fetchEvents();
        const lastFiveEvents = eventsData.slice(-6);
        setEvents(lastFiveEvents);
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
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4} columnSpacing={-10}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Link to={`/event/${event.id}`} style={{ textDecoration: "none" }}>
              <Tilt>
                <EventCard event={event} />
              </Tilt>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EventsList;
