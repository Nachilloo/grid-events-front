import { useState, useEffect } from 'react';
import { Grid, Container, Box, TextField, CircularProgress, Alert } from '@mui/material';
import EventCard from "./EventCardGrid";
import { fetchEvents } from '../services/eventsService';

function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getEvents() {
            try {
                const eventsData = await fetchEvents();
                setEvents(eventsData);
                setFilteredEvents(eventsData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        getEvents();
    }, []);

    useEffect(() => {
        setFilteredEvents(
            events.filter(event =>
                event.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, events]);

    if (loading) {
        return (
            <Container>
                <Box mt={4} mb={4} display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Box mt={4} mb={4}>
                    <Alert severity="error">Error: {error}</Alert>
                </Box>
            </Container>
        );
    }

    return (
        <Container>
            <Box mt={4} mb={4}>
                <TextField
                    label="Search Events"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>
            <Grid container spacing={4}>
                {filteredEvents.map(event => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <EventCard event={event} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default EventsPage;
