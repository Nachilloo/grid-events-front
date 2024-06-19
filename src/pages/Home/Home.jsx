import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Container, Grid, Avatar, Box } from "@mui/material";
import CategoryHome from "../../components/CategoryHome";

const items = [
  {
    name: "Cumpleaños",
    img: "https://img.freepik.com/foto-gratis/pista-baile-energica-gente-celebrando-su-cumpleanos_1268-30650.jpg?w=826&t=st=1718735235~exp=1718735835~hmac=82c34fbc4431a39b72661412f9211ba9f5110861d93bedd3c935a0d0e2473da0",
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
        margin: "40px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Carousel>
            {items.map((item, index) => (
              <Paper key={index}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "800px", height: "400px" }}
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
          <div style={{ margin: "18%" }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
              Haz lo que te apasione
            </Typography>
            <Typography variant="body1" align="center">
              Aquí puedes encontrar la mejor información sobre nuestros eventos.
              Navega a través de las imágenes para saber más.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <CategoryHome />
      {/* meter aqui la card */}
    </Container>
  );
};

export default Home;
