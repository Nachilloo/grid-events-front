import { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchEventById, updateEvent } from '../../services/eventsService';

const EditEventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({
    title: '',
    date: '',
    description: '',
    imgProfile: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, [eventId]);

  const fetchEventDetails = async () => {
    try {
      const fetchedEvent = await fetchEventById(eventId);
      setEvent(fetchedEvent);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching event details:', error);
      setError('Failed to load event details.');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(eventId, event);
      alert('Event updated successfully!');
    } catch (error) {
      console.error('Error updating event:', error);
      setError('Failed to update event.');
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
 
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 8 }}> {/* Agregar margen inferior con 'mb: 8' */}
        <Typography variant="h4" component="h1" gutterBottom>
          Editar Evento
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Título"
            variant="outlined"
            fullWidth
            margin="normal"
            value={event.title}
            onChange={handleInputChange}
          />
          <TextField
            name="date"
            label="Fecha"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={event.date}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="description"
            label="Descripción"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={event.description}
            onChange={handleInputChange}
          />
          <TextField
            name="imgProfile"
            label="URL de la Imagen"
            variant="outlined"
            fullWidth
            margin="normal"
            value={event.imgProfile}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Guardar Cambios
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditEventPage;

