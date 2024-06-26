import CardEvent from "../../components/CardEvent";
import EventsPage from "../../components/EventsPage";
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import OrganizerList from "../AllEvents/OrganizerList";
import localImage from "../../assets/fondoalleventsconlogo.png"

const ImageSection = styled(Box)(({ theme }) => ({
  height: '40vh',
  background: `url(${localImage}) no-repeat center center`,
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
          sx={{ m: 2, fontSize: { xs: "4rem", md: "6rem" } }}
        ></Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            m: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        ></Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Tu entrada a la diversión: eventos únicos, recuerdos eternos</h3>
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
