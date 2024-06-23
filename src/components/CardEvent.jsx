// import React from "react";
import { Grid, Container } from "@mui/material";
import EventCardGrid from "../components/EventCardGrid";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Taylor swift",
    description: "Descripción del Evento 1",
    date: "31/07/2024",
    time: "10:00",
    location: "Online",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 2",
    description: "Descripción del Evento 2",
    date: "01/08/2024",
    time: "12:00",
    location: "Madrid",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 3",
    description: "Descripción del Evento 3",
    date: "02/08/2024",
    time: "15:00",
    location: "Barcelona",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 4",
    description: "Descripción del Evento 4",
    date: "03/08/2024",
    time: "18:00",
    location: "Valencia",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 5",
    description: "Descripción del Evento 5",
    date: "04/08/2024",
    time: "09:00",
    location: "Sevilla",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 6",
    description: "Descripción del Evento 6",
    date: "05/08/2024",
    time: "11:00",
    location: "Bilbao",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 7",
    description: "Descripción del Evento 7",
    date: "06/08/2024",
    time: "13:00",
    location: "Granada",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 8",
    description: "Descripción del Evento 8",
    date: "07/08/2024",
    time: "14:00",
    location: "Zaragoza",
    image: "./src/assets/TailorSwift.jpg",
  },
  {
    title: "Evento 9",
    description: "Descripción del Evento 9",
    date: "08/08/2024",
    time: "16:00",
    location: "Málaga",
    image: "./src/assets/TailorSwift.jpg",
  },
];

const CardEvent = () => {
  return (
    <Link to="/event">
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <EventCardGrid event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Link>
  );
};

export default CardEvent;

/*function CardEvent() {
  return (
    <div className="Card-Event Container">
      <Card className="CardTotal" sx={{ maxWidth: 335, borderRadius: 5 }}>
        <CardMedia
          sx={{ borderRadius: 5 }}
          component="img"
          alt="TailorSwift"
          height="170"
          image="./src/assets/TailorSwift.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Concierto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disfruta de los mejores artistas del mundo en una noche mágica
          </Typography>
       
        <CardActions>
        <Typography variant="body2" color="text.secondary">
        <strong>miércoles a las 19:00</strong>

          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Soul Dimension</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>20.00 euros</strong>
          </Typography>
          {/* <Button size="small">Comprar Entradas</Button> 
          <Button size="medium" variant="contained">
            Comprar Entradas
          </Button>
          }
                    
          <Button size="large">
            {" "}
            <i className="fa-regular fa-heart"></i>
          </Button>
        </CardActions>
        </CardContent>
        
      </Card>
    </div>
  );
}*/
