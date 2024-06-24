import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import api from '../../services/config';

const EventDetailPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const { data } = await api.get(`/event/${eventId}`);
                setEvent(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchEvent();
    }, [eventId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                {event.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {event.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {event.date}
            </Typography>
            {/* Agrega más detalles del evento aquí */}
        </Container>
    );
};

export default EventDetailPage;
