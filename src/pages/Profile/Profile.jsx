import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtener el token de autenticación desde el almacenamiento local

    fetch('/api/user', {
      headers: {
        'Authorization': `Bearer ${token}` // Incluir el token en el encabezado de la solicitud
      }
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error.message);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Mi Perfil</h1>
      <div>
        <strong>Nombre:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Edad:</strong> {user.age}
      </div>
      <div>
        <strong>Biografía:</strong> {user.bio}
      </div>
      <div>
        <strong>Eventos Registrados:</strong>
        <ul>
          {user.events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;

