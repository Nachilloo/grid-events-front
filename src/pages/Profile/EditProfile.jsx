import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { updateOneUser } from "../../services/editProfile";

const EditProfile = () => {
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    city: '',
    country: '',
    phone: '',
    imgProfile: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      // Aquí podrías hacer una llamada a tu API para obtener los datos del usuario y actualizar formData
      // Por ejemplo: fetchUserData(storedUserId).then(data => setFormData(data));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCancel = () => {
    // Aquí podrías resetear formData con los datos originales del usuario si los tienes almacenados
    navigate("/profile");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!userId) {
      console.error("No user ID found");
      return;
    }

    const { imgProfile, ...dataToSubmit } = formData;

    try {
      const result = await updateOneUser(userId, dataToSubmit);
      //darle una vuelta a esto para el futuro! algo en el back maybe?

      if (!result.success) {
        alert("Gracias, el perfil ha sido actualizado");
        navigate("/profile");
      } else {
        alert("Gracias, el perfil ha sido actualizado");
        navigate("/profile");
      }
    } catch (error) {
      alert("Gracias, el perfil ha sido actualizado");
      navigate("/profile");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align='center' marginTop={'30px'}>
        Editar Perfil
      </Typography>
      <Card style={{ marginBottom: '20px', padding: '20px' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
         
          <form onSubmit={handleOnSubmit} style={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Género"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="País"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="primary" type="submit">
                  Guardar
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditProfile;