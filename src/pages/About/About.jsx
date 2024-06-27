import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
} from "@mui/material";
import "./About.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
  },
});

const teamMembers = [
  {
    name: "Gabriel Benitez",
    title: "Desarrollador Frontend",
    bio: "Experto en React y diseño de interfaces.",
    image: "./photo5.jpg",
  },
  {
    name: "Romina Rodriguez",
    title: "Event Manager",
    bio: "Experta en la planificación y ejecución de eventos.",
    image: "./photo1.jpg",
  },
  {
    name: "Ignacio Galante",
    title: "Desarrollador Backend",
    bio: "Especialista en Node.js y bases de datos",
    image: "./photo2.jpg",
  },
  {
    name: "Diego Lozada ",
    title: "Diseñador Gráfico",
    bio: "Creativo en UX/UI y branding visual",
    image: "./photo3.avif",
  },
];

const testimonials = [
  {
    quote: "La plataforma es fácil de usar y encontré eventos increíbles!!",
    client: "María López",
  },
  {
    quote: "Compré entradas en segundos y disfruté de un concierto inolvidable.",
    client: "Carlos Sánchez",
  },
  {
    quote: "Trabajar con esta empresa ha sido una experiencia increíble...",
    client: "Pepe López",
  },
  {
    quote: "Nuestros eventos siempre son un éxito gracias a ellos",
    client: "Marta Rodríguez",
  },
];

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              className="historia"
              elevation={3}
              sx={{
                padding: "2rem",
                backgroundColor: "#fff",
                borderRadius: "15px",
                marginBottom: "2rem",
              }}
            >
              <Typography variant="h2" gutterBottom>
                Nuestra Historia
              </Typography>
              <img
                className="imagenHistoria"
                src="./aboutus.png"
                width="50%"
                height="50%"
              ></img>

              <Typography
                variant="body1"
                paragraph
                sx={{ marginTop: "1rem", marginLeft: "5%" }}
              >
                Fundada en 2024, es una plataforma global para experiencias en
                vivo que permite que cualquiera pueda crear, compartir,
                encontrar y asistir a eventos que alimentan sus pasiones y
                enriquecen sus vidas. De festivales de música, maratones,
                conferencias, reuniones de la comunidad y eventos para recaudar
                fondos, a competiciones de juegos y concursos de guitarra
                invisible. Nuestra misión es conectar el mundo a través de
                experiencias en vivo.
              </Typography>
              {/* </div> */}
            </Paper>
          </Grid>
        </Grid>

        <Paper
          className="nuestraMision"
          elevation={3}
          sx={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Nuestra Misión
          </Typography>
          <img src="./mision.png" width="50%" height="50%"></img>
          <Typography
            variant="body1"
            paragraph
            sx={{ marginTop: "1rem", marginLeft: "5%", marginRight: "5%" }}
          >
            Nuestra misión es transformar la manera en que las personas
            descubren, compran y disfrutan de eventos. Nos comprometemos a
            ofrecer una plataforma intuitiva y segura donde los usuarios puedan
            encontrar y adquirir entradas para una amplia variedad de eventos,
            desde conciertos y festivales hasta conferencias y exposiciones.
            Creemos en el poder de la conexión y trabajamos para fomentar la
            interacción entre nuestros clientes, facilitando encuentros
            significativos y compartiendo experiencias memorables. Con un
            enfoque en la innovación y la satisfacción del cliente, nos
            dedicamos a enriquecer la vida de nuestros usuarios y a construir
            una comunidad vibrante y conectada a través de eventos.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Conozca a Nuestro Equipo
          </Typography>
          <Grid container spacing={8}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.title}
                    </Typography>
                    <Typography variant="body1">{member.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Testimonios
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      - {testimonial.client}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Politicas de privacidad
          </Typography>
          <Typography variant="body1" paragraph>
            La presente Política de privacidad establece la política con
            respecto a la información que se puede asociar a, o que se relaciona
            con, una persona específica y podría usarse para identificar a una
            persona ("Datos personales") que se recopilan de los Usuarios en o a
            través de los Servicios. Esta política también cubre los datos
            personales recopilados de clientes y posibles clientes de ventas de
            Grid Events. Nos tomamos muy en serio la privacidad de tus Datos
            personales. Por esa razón, hemos redactado la presente Política de
            privacidad. Lee esta Política de privacidad, ya que incluye
            información importante acerca de tus Datos personales y otro tipo de
            información. Por tanto, los "Datos no personales", tal y como se
            usan en esta Política de privacidad, son cualquier tipo de
            información que no se relacione con una persona o que no se pueda
            usar para identificar a una persona. Cuando interactúas con los
            Servicios, podemos recopilar Datos no personales. Las limitaciones y
            los requisitos en esta Política de privacidad sobre nuestro uso,
            recopilación, divulgación, transferencia y almacenamiento o
            retención de Datos personales no se aplican a los Datos no
            personales.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Requisitos legales
          </Typography>
          <Typography variant="body1" paragraph>
            Podemos divulgar tus Datos personales si así lo exige la ley para,
            por ejemplo, en caso de una citación judicial o una solicitud de un
            organismo gubernamental (incluidas respuestas a autoridades públicas
            para cumplir requisitos de seguridad nacional o cumplimiento de la
            ley), o si creemos de buena fe que dicha acción es necesaria: (a)
            para cumplir con una obligación jurídica; (b) para proteger o
            defender nuestros derechos, intereses o propiedades, o los de un
            tercero; (c) para prevenir o investigar posibles delitos en relación
            con los Servicios; (d) para actuar en circunstancias de urgencia
            para proteger la seguridad personal de los Usuarios de los Servicios
            o el público en general; o (e) como protección ante
            responsabilidades jurídicas.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default About;
