import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Container,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  useMediaQuery,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import api from '../../services/config';

const EventDetailPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ticketCount, setTicketCount] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); 
    const handleAddTicket = () => {
       if (ticketCount < event.result.maxTickets) {
       setTicketCount(ticketCount + 1);
       }
     };
      const handleRemoveTicket = () => {
      if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
     }
    };
    const handlePurchase = () => {
     //alert(`Purchased ${ticketCount} tickets for a total of €${ticketCount * event.result.price}`);
     navigate('/payment')
     };
   

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
    const StyledButton = styled(Button)(({ theme }) => ({
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
       }));
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
        [theme.breakpoints.down('sm')]: {
          width: "100%",
          position: "relative",
          top: "auto",
          right: "auto",
          transform: "none",
          marginTop: theme.spacing(2),
        },
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
          <CartContainer >
          <Typography variant="h6" component="div" gutterBottom>   
          <ShoppingCartIcon /> Mi Carrito
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
          <IconButton onClick={handleRemoveTicket} disabled={ticketCount === 0}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6" style={{ margin: "0 1rem" }}>
            {ticketCount}
          </Typography>
          <IconButton onClick={handleAddTicket} disabled={ticketCount === event.result.maxTickets}>
            <AddIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          Total: {ticketCount * event.result.price} €
        </Typography>
        <StyledButton
          variant="contained"
          fullWidth
          onClick={handlePurchase}
          disabled={ticketCount === 0}
        >
          Comprar entradas
        </StyledButton>
        </CartContainer>
        </Container>
        
      );
}  

export default EventDetailPage;


