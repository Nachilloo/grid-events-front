import CardEvent from "../../components/CardEvent";
import EventsPage from "../../components/EventsPage";
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import OrganizerList from "../AllEvents/OrganizerList";

const ImageSection = styled(Box)(({ theme }) => ({
  height: '40vh',
  background: `url('https://i0.wp.com/quehacerlaspalmas.com/wp-content/uploads/2024/05/fuegos-las-canteras.jpg?resize=799%2C533&ssl=1') no-repeat center center`,
  backgroundSize: 'cover',
  borderRadius: '4%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  margin: '2rem 0',
  textAlign: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: '60vh',
    margin: '1rem 0',
  }
}));

const AllEvents = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 2 }}>
      
      <ImageSection>
        <Typography
          variant="h2"
          sx={{ m: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Los mejores eventos del mundo
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            m: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Encuentra los mejores planes para hacer en el mundo esta semana y
          descubre todas las novedades con GridEvents. No te pierdas ninguno de
          los planes que este fin de semana en cualquier lugar. Todos los
          conciertos, exposiciones.
        </Typography>

      </ImageSection>
      <EventsPage />
      <div className="CardTotal">

        <CardEvent />
      </div>
      
      <Typography variant="h4" align="center" gutterBottom marginTop={"50px"}>
        Organizadores Destacados
      </Typography>
      <OrganizerList />
      
        
  
    </Container>
  );
}

export default AllEvents;
