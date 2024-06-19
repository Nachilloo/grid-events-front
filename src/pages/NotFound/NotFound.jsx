import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFound = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, color: 'primary.main' }} />
      <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 2 }}>
        404 - El evento que buscas no existe
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        ¡Vaya! Parece que te has perdido. La página que buscas no existe.
      </Typography>
      <Box>
        <Button variant="contained" color="primary" component={Link} to="/">
          Volver a la página principal
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound
