// import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Container, Grid, Box } from "@mui/material";
import CategoryHome from "../../components/CategoryHome";
import ListEvents from "../../components/ListEvents";
import CardEvent2 from "../../components/CardEvent2";

const items = [
  {
    name: "Cumpleaños",
    img: "https://www.elementalproduction.com/wp-content/uploads/2021/05/corporate-events.jpg",
  },
  {
    name: "Reuniones de trabajo",
    img: "https://img.freepik.com/foto-gratis/personas-que-participan-evento-alto-protocolo_23-2150951243.jpg?w=740&t=st=1718735250~exp=1718735850~hmac=b615302b71901982fdf86c6ac5135d9eb903ef561fe24aa0ad5643ea72b782c4",
  },
  {
    name: "Festivales",
    img: "https://img.freepik.com/foto-gratis/escenario-escenario-iluminado-luces-colores_1340-34176.jpg?w=740&t=st=1718735267~exp=1718735867~hmac=aedfe9743d1927c78dcf69e4c71d08535c5398a1e74892a15559b00fa46c98ac",
  },
];

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        margin: "40px auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Haz lo que te apasione
      </Typography>
      <Typography variant="body1">
        Aquí puedes encontrar la mejor información sobre nuestros eventos.
        Navega a través de las imágenes para saber más.
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={80}
          style={{ padding: "20px", textAlign: "center" }}
        >
          <Carousel>
            {items.map((item, index) => (
              <Paper
                key={index}
                style={{ padding: "20px", textAlign: "center" }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: { xs: "100%", md: "1000px" },
                    height: { xs: "auto", md: "600px" },
                    maxHeight: { xs: 200, md: 400 },
                  }}
                />
                <Typography variant="h4" component="h2" textAlign="center">
                  {item.name}
                </Typography>
                <Typography>{item.description}</Typography>
              </Paper>
            ))}
          </Carousel>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{ margin: { xs: "10% 0", md: "18%" }, textAlign: "center" }}
          ></Box>
        </Grid>
      </Grid>

      <CategoryHome />

      <ListEvents />
      <Typography variant="h4" align="center" gutterBottom marginTop={"50px"}>
        Ultimos 6 eventos añadidos
      </Typography>
      <CardEvent2 />
    </Container>
  );
};

export default Home;
