import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from "@mui/system";
import { Container, Typography, CircularProgress, CardContent, CardMedia, Card } from '@mui/material';
import api from '../../services/config';

const EventDetailPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const { data } = await api.get(`/event/${eventId}`);
                setEvent(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [eventId]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>No se encontró el evento</div>;
    }
    const EventCard = styled(Card)(({ theme }) => ({
        margin: theme.spacing(2),
        boxShadow: theme.shadows[3],
      }));

    return (
        <Container
          maxWidth="md"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <EventCard>
            <CardMedia
              component="img"
              height="400"
              image={event.result.imgProfile}
              alt={event.result.title}
            />
            <CardContent>
              <Typography variant="h3" component="div" gutterBottom>
                {event.result.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {event.result.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Fecha:</strong> {new Date(event.result.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Localizacion:</strong> {event.result.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Acerca del evento:</strong> {event.result.about}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Cantidad de asistentes:</strong> {event.result.maxTickets}
              </Typography>
              <Typography variant="h5" color="primary" paragraph>
                <strong>Precio de la entrada:</strong> €{event.result.price}
              </Typography>
            </CardContent>
          </EventCard>
        </Container>
      );
}  

export default EventDetailPage;


