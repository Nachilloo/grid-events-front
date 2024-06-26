import { getUserProfile } from "../../services/userService";
import { useEffect, useState } from "react";
import {
  Container,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Avatar,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDataProfile = async () => {
      try {
        const result = await getUserProfile();
        setUserProfile(result);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError(err.message);
      }
    };

    getUserDataProfile();
  }, []);

  if (error) {
    return (
      <Container>
        <Alert severity="error">Error: {error}</Alert>
      </Container>
    );
  }

  if (!userProfile) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }
  const handleEditProfile = () => {
    // Aquí podrías resetear formData con los datos originales del usuario si los tienes almacenados
    navigate("/editprofile");
  };
  const EventCard = styled(Card)(({ theme }) => ({
    minWidth: 300,
    margin: theme.spacing(2),
    flex: "0 0 auto",
  }));

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" marginTop={"50px"}>
        Perfil de {userProfile.firstname} {userProfile.lastname}
      </Typography>
      <Card style={{ marginBottom: "20px", padding: "20px" }}>
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={userProfile.firstname}
            src={userProfile.imgProfile}
            style={{ width: 100, height: 100, marginRight: 20 }}
          />
          <div style={{ flexGrow: 1 }}>
            <Typography variant="h5">Información del Usuario</Typography>
            <Typography variant="body1">
              <strong>Nombre:</strong> {userProfile.firstname}
            </Typography>
            <Typography variant="body1">
              <strong>Apellido:</strong> {userProfile.lastname}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {userProfile.email}
            </Typography>
            <Typography variant="body1">
              <strong>Género:</strong> {userProfile.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Ciudad:</strong> {userProfile.city}
            </Typography>
            <Typography variant="body1">
              <strong>País:</strong> {userProfile.country}
            </Typography>
            <Typography variant="body1">
              <strong>Teléfono:</strong> {userProfile.phone}
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditProfile}
          >
            Editar Perfil
          </Button>
        </CardContent>
      </Card>
      <Container
        maxWidth="lg"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Mis Eventos Favoritos
        </Typography>
        <Grid container spacing={3}>
          {userProfile.events &&
            userProfile.events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <EventCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.imgProfile}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.date}
                    </Typography>
                  </CardContent>
                </EventCard>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Profile;
