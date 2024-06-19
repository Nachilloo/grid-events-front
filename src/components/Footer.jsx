import * as React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

function Footer() {
  const elements = [
    {
      header: "Centro de recursos",
      links: ["Empleo", "Soporte", "Privacidad", "Terminos"],
    },
    {
      header: "Cuenta",
      links: ["Ingresar", "Registrar"],
    },
    {
      header: "Contacta con atencion al cliente",
      links: ["Contacto", "X", "Facebook", "Instagram"],
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column) => {
      return (
        <Grid item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button sx={{ color: "white", fontWeight: "bold" }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link) => {
            return (
              <Box>
                <Button sx={{ color: "white" }}>{link}</Button>
              </Box>
            );
          })}
        </Grid>
      );
    });
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
