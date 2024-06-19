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
      <h1>Perfil de {userProfile.name}</h1>
      <div>
        <h2>Información del Usuario</h2>
        <p>Nombre: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        {/* Muestra otros datos del usuario si es necesario */}
      </div>
      <div>
        <h2>Eventos Comprados</h2>
      </div>
      <div>
        <h2>Eventos Favoritos</h2>
      </div>
    </div>
  );
}

export default Profile;
