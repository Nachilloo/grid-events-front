import { useState, useEffect } from 'react';
import { Grid, Container, Box, TextField, CircularProgress, Alert } from '@mui/material';
import EventCard from "./EventCardGrid";
import { fetchEvents } from '../services/eventsService';

function EventsPage({state, setter}) {
    
    return (
        <Container>
            <Box mt={4} mb={4}>
                <TextField
                    label="Search Events"
                    variant="outlined"
                    fullWidth
                    value={state}
                    onChange={(e) => setter(e.target.value)}
                />
            </Box>

        </Container>
    );
}

export default EventsPage;
