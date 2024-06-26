import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const elements = [
    {
      header: "Centro de recursos",
      links: ["Privacidad", "Terminos"],
      paths: ["/about", "/about"], // Rutas correspondientes a Privacidad y Términos
    },
    {
      header: "Cuenta",
      links: ["Ingresar", "Registrarse"],
      paths: ["/sign", "/sign"], // Rutas correspondientes a Ingresar y Registrarse
    },
    {
      header: "Contacta con nosotros",
      links: ["Contacto"],
      paths: ["/contact"], // Ruta correspondiente a Contacto
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column, index) => (
      <Grid item key={index} xs={12} md={4}>
        <Box  pb={2} mb={2}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold" }}
            borderBottom={1}
          >
            {column.header}
          </Typography>
          <Box mt={1}>
            {column.links.map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                to={column.paths[idx]}
                sx={{ color: "white" }}
              >
                {link}
              </Button>
            ))}
          </Box>
        </Box>
      </Grid>
    ));

    return footerElements;
  }

  return (
    <footer>
      <Box bgcolor="#123456" color="white" py={4}>
        <Container>
          <Grid container spacing={2}>
            {generateFooterElements()}
          </Grid>
          <Box textAlign="center"  bgcolor="#123456" color="white">
            <Typography variant="h6">
              © Grid Events 2024 - All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
