// import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import EventCard from './EventCardGrid';
import { Link } from 'react-router-dom';
// import { fetchEvents } from '../services/eventsService.js'

function EventsList({events}) {
    // const [events, setEvents] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     async function getEvents() {
    //         try {
    //             const eventsData = await fetchEvents();
    //             setEvents(eventsData);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //     }

    //     getEvents();
    // }, []);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
   
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                {events.map(event => (
                    <Grid item key={event.id} xs={12} sm={6} md={4}>
                        <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
                            <EventCard event={event} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default EventsList;
