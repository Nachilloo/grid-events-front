
import { Box, Grid, Container, Typography, Button } from "@mui/material";

function Footer() {
  const elements = [
    {
      header: "Centro de recursos",
      links: ["Empleo", "Privacidad", "Terminos"],
    },
    {
      header: "Cuenta",
      links: ["Ingresar", "Registrar"],
    },
    {
      header: "Contacta con nosotros",
      links: ["Contacto"],
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column, index) => ( // Added index as key
      <Grid item key={index} xs={12} md={4}>
        <Box key={column.header} borderBottom={1}> {/* Using column.header as key */}
          <Button sx={{ color: "white", fontWeight: "bold" }}>
            {column.header}
          </Button>
        </Box>
        {column.links.map((link, idx) => ( // Added idx as key
          <Box key={idx}>
            <Button sx={{ color: "white" }}>{link}</Button>
          </Box>
        ))}
      </Grid>
    ));
  
    return footerElements;
  }
  

  return (
    <footer>
      <Box bgcolor="#123456" color="white" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
          <Box
            textAlign={"center"}
            py={2}
            m={0}
            bgcolor="123456"
            color={"white"}
          >
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
