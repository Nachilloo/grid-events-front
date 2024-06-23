import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  TextField,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Avatar,
  Paper,
} from "@mui/material";

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
    name: "Juan Pérez",
    title: "CEO",
    bio: "Juan tiene más de 20 años de experiencia en la gestión de eventos...",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ana Gómez",
    title: "Event Manager",
    bio: "Ana es experta en la planificación y ejecución de eventos...",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ana Gómez",
    title: "Event Manager",
    bio: "Ana es experta en la planificación y ejecución de eventos...",
    image: "https://via.placeholder.com/150",
  },
];

const testimonials = [
  {
    quote: "Trabajar con esta empresa ha sido una experiencia increíble...",
    client: "María López",
  },
  {
    quote: "Nuestros eventos siempre son un éxito gracias a ellos...",
    client: "Carlos Sánchez",
  },
  {
    quote: "Trabajar con esta empresa ha sido una experiencia increíble...",
    client: "Pepe López",
  },
  {
    quote: "Nuestros eventos siempre son un éxito gracias a ellos...",
    client: "Marta Sánchez",
  },
];

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Paper
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
          <Typography variant="body1" paragraph>
            Fundada en 2024, es una plataforma global para experiencias en vivo
            que permite que cualquiera pueda crear, compartir, encontrar y
            asistir a eventos que alimentan sus pasiones y enriquecen sus vidas.
            De festivales de música, maratones, conferencias, reuniones de la
            comunidad y eventos para recaudar fondos, a competiciones de juegos
            y concursos de guitarra invisible. Nuestra misión es conectar el
            mundo a través de experiencias en vivo.
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
            Nuestra Misión
          </Typography>
          <Typography variant="body1" paragraph>
            Cuando esta Política de privacidad utiliza el término "Organizador"
            nos referimos a creadores de eventos que usan los Servicios para
            crear eventos para los consumidores que usan nuestros Servicios (a)
            para consumir información sobre eventos o asistir a ellos
            ("Consumidores"), o (b) para cualquier otra razón. Los
            Organizadores, los Consumidores y los terceros que utilizan nuestros
            servicios se mencionan colectivamente en estos Términos como
            "Usuarios", "tú", "tu" o "usted". Eventbrite, Inc. es una empresa de
            Delaware con sede principal en 95 Third Street, 2nd Floor, San
            Francisco, California, 94103 (EE. UU.), número de registro 4742147
            ("Eventbrite", "nosotros", "nos" o "nuestro"). Si resides en el EEE
            o Suiza, Eventbrite, Inc. es la parte responsable con respecto a los
            Datos Personales (definidos a continuación) recopilados a través de
            los Servicios. El representante UE de Eventbrite para la ley europea
            de protección de datos es Eventbrite Operations (IE) Limited con
            sede principal en 97 South Mall Cork, T12 XV54, Irlanda. El
            representante del Reino Unido de Eventbrite para la ley europea de
            protección de datos es Eventbrite UK Limited con sede principal en
            The Pavilions, Bridgwater Road, Bristol, England, BS13 8FD. Si
            tienes alguna pregunta o duda, ponte en contacto con nosotros
            escribiendo a la dirección anterior o a privacy@eventbrite.com.
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
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
            Eventbrite. Nos tomamos muy en serio la privacidad de tus Datos
            personales. Por esa razón, hemos redactado la presente Política de
            privacidad. Lee esta Política de privacidad, ya que incluye
            información importante acerca de tus Datos personales y otro tipo de
            información. Por tanto, los "Datos no personales" tal y como se usan
            en esta Política de privacidad, son cualquier tipo de información
            que no se relacione con una persona o que no se pueda usar para
            identificar a una persona. Cuando interactúas con los Servicios,
            podemos recopilar Datos no personales. Las limitaciones y los
            requisitos en esta Política de privacidad sobre nuestro uso,
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
            Podemos divulgar tus Datos personales si así lo exige la ley para
            (por ejemplo) en caso de una citación judicial o una solicitud de un
            organismo gubernamental (incluidas respuestas a autoridades públicas
            para cumplir requisitos de seguridad nacional o cumplimiento de la
            ley), o si creemos de buena fe que dicha acción es necesaria (a)
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
