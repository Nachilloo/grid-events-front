import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDataProfile = async () => {
      try {
        const result = await getUserProfile();
        setUserProfile(result);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError(err.message);
      }
    };

    getUserDataProfile();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Perfil de {userProfile.firstname}</h1>
      <div>
        <h2>Información del Usuario</h2>
        <p>Nombre: {userProfile.firstname}</p>
        <p>Apellido: {userProfile.lastname}</p>
        <p>Email: {userProfile.email}</p>
        <p>Gender: {userProfile.gender}</p>
        <p>City: {userProfile.city}</p>
        <p>Country: {userProfile.country}</p>
        <p>Phone: {userProfile.phone}</p>
      </div>
      <div>
        <h2>Mis Eventos Favoritos</h2>
        <ul>
        {userProfile.events && userProfile.events.map(events => (
            <li key={events.id}>{events.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
