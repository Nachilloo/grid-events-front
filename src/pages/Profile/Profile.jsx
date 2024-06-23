import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Alert, Avatar } from '@mui/material';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDataProfile = async () => {
      try {
        const result = await getUserProfile();
        setUserProfile(result);
      } catch (err) {
        console.error('Error fetching user profile:', err)
        setError(err.message);
      }
    };

    getUserDataProfile();
  }, []);

  if (error) {
    return <Container><Alert severity="error">Error: {error}</Alert></Container>
  }

  if (!userProfile) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Container>
    )
  }

  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      Perfil de {userProfile.firstname}
    </Typography>
    <Card style={{ marginBottom: '20px' }}>
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
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">Mis Eventos Favoritos</Typography>
        <List>
          {userProfile.events && userProfile.events.map(event => (
            <ListItem key={event.id}>
              <ListItemText primary={event.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Container>
);
}

export default Profile;
