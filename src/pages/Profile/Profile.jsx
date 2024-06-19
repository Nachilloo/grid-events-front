import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [purchasedEvents, setPurchasedEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  useEffect(() => {
    // Reemplaza 'YOUR_API_ENDPOINT' con la URL real de tu API
    const fetchProfileData = async () => {
      try {
        const userResponse = await axios.get('/api/user/:id'); // Endpoint para obtener datos del usuario
        setUserData(userResponse.data);

        const purchasedResponse = await axios.get('/api/event/:id'); // Endpoint para obtener eventos comprados
        setPurchasedEvents(purchasedResponse.data);

        const favoriteResponse = await axios.get('/api/event/:id/favorite'); // Endpoint para obtener eventos favoritos
        setFavoriteEvents(favoriteResponse.data);
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Perfil de {userData.name}</h1>
      <div>
        <h2>Información del Usuario</h2>
        <p>Nombre: {userData.firstname}</p>
        <p>Email: {userData.email}</p>
        {/* Muestra otros datos del usuario si es necesario */}
      </div>
      <div>
        <h2>Eventos Comprados</h2>
        <ul>
          {purchasedEvents.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Eventos Favoritos</h2>
        <ul>
          {favoriteEvents.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

