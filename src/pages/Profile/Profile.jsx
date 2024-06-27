import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';
import { Container, CardHeader, Box, Button, Typography, Grid, Card, CardContent, CircularProgress, Alert, Avatar, CardMedia } from '@mui/material';
import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { deleteOneUser } from '../../services/editProfile';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
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
  

  const handleDeleteProfile = async () => {
    setIsDeleting(true);
    try {
      await deleteOneUser(userProfile.id); // Assuming userProfile has an id field
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user.id");
      alert("Gracias, el perfil ha sido eliminado");
      navigate("/"); // Redirect to home or another appropriate page
    } catch (err) {
      alert("Perdon, el perfil no ha sido eliminado");
      setError(err.message);
      setIsDeleting(false);
    }
  };

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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <Container>
      <Typography variant="h4" gutterBottom align='center' marginTop={'50px'}>
        Perfil de {userProfile.firstname} {userProfile.lastname}
      </Typography>
      <Card style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader
          avatar={
            <Avatar
              alt={userProfile.firstname}
              src={userProfile.imgProfile}
              style={{ width: 100, height: 100 }}
            />
          }
          title={<Typography variant="h5" align='center'>Información del Usuario</Typography>}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Nombre:</strong> {userProfile.firstname}</Typography>
              <Typography variant="body1"><strong>Apellido:</strong> {userProfile.lastname}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {userProfile.email}</Typography>
              <Typography variant="body1"><strong>Género:</strong> {userProfile.gender}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Ciudad:</strong> {userProfile.city}</Typography>
              <Typography variant="body1"><strong>País:</strong> {userProfile.country}</Typography>
              <Typography variant="body1"><strong>Teléfono:</strong> {userProfile.phone}</Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleEditProfile} 
              fullWidth
              style={{ marginBottom: 10, backgroundColor: '#1976d2' }}
            >
              Editar Perfil
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={handleDeleteProfile} 
              disabled={isDeleting}
              fullWidth
              style={{ backgroundColor: '#d32f2f' }}
            >
              {isDeleting ? 'Eliminando...' : 'Eliminar Perfil'}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Container
        maxWidth="lg"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Typography variant="h4" gutterBottom align='center'>Mis Eventos Favoritos</Typography>
        <Grid container spacing={3}>
          {userProfile.events && userProfile.events.map(event => (
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
};

export default Profile;