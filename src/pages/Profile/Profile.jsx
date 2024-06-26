import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Alert, Avatar, CardMedia } from '@mui/material';
import { styled } from "@mui/system";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

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

  const EventCard = styled(Card)(({ theme }) => ({
    minWidth: 300,
    margin: theme.spacing(2),
    flex: "0 0 auto",
  }));

  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      Perfil de {userProfile.firstname}
    </Typography>
    <Card style={{ marginBottom: '30px' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={userProfile.firstname}
          src={userProfile.imgProfile}
          style={{ width: 100, height: 100, marginRight: 20 }}
        />
        <div>
          <Typography variant="h6">Información del Usuario</Typography>
          <Typography variant="body1"><strong>Nombre:</strong> {userProfile.firstname}</Typography>
          <Typography variant="body1"><strong>Apellido:</strong> {userProfile.lastname}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {userProfile.email}</Typography>
          <Typography variant="body1"><strong>Género:</strong> {userProfile.gender}</Typography>
          <Typography variant="body1"><strong>Ciudad:</strong> {userProfile.city}</Typography>
          <Typography variant="body1"><strong>País:</strong> {userProfile.country}</Typography>
          <Typography variant="body1"><strong>Teléfono:</strong> {userProfile.phone}</Typography>
        </div>
      </CardContent>
    </Card>
    <Container maxWidth="sm" sx={{ pt: 8, pb: 8 }}>
      <Typography variant="h6">Mis Eventos Favoritos</Typography>
      {userProfile.events && userProfile.events.map(event => (
          <EventCard key={event.id}> {/* Assign a unique key to each EventCard */}
          <CardMedia
      component="img"
      alt={event.title}
      sx={{
        height: 'auto', 
        width: '100%',
        objectFit: 'cover',
      }}
      image={event.imgProfile || "default-image-url.jpg"}
      title={event.title}
    />
          <CardContent
          sx={{
            height: '130px', 
            overflow: 'hidden',
        }}>
            <Typography variant="h5" component="div">
              {event.title}
            </Typography>
            <Typography 
            variant="body2"
            color="text.secondary"
            sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}>
              {event.description}
            </Typography>
          </CardContent>
        </EventCard>
        ))}
     </Container>
    </Container>
  )
}



export default Profile;
