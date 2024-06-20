import { useState } from "react";
import "./CreateEvent.css";
import { createEvent } from "../../services/createService";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [imgProfile, setImgProfile] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [maxTickets, setMaxTickets] = useState("");

  // const navigate = useNavigate();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAbout = (event) => {
    setAbout(event.target.value);
  };
  const handleImgProfile = (event) => {
    setImgProfile(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleMaxTickets = (event) => {
    setMaxTickets(event.target.value);
  };

  const handleOnSubmit = async () => {
    const formData = {
      title,
      description,
      location,
      about,
      imgProfile,
      price,
      date,
      maxTickets,
    };
    const result = await createEvent(formData);
  };

  return (
    <div className="App">
      <div className="container2">
        <form className="formSign">
          <h1>Crea un evento</h1>
          <input
            type="text"
            name="name"
            value={title}
            onChange={handleTitle}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
            placeholder="Descripcion"
          />
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
            placeholder="Localizacion"
          />
          <input
            type="text"
            name="about"
            value={about}
            onChange={handleAbout}
            placeholder="Info adicional"
          />
          <input
            type="text"
            name="imgProfile"
            value={imgProfile}
            onChange={handleImgProfile}
            placeholder="Imagen"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={handlePrice}
            placeholder="Precio"
          />
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleDate}
            placeholder="Dia Evento"
          />
          <input
            type="number"
            name="maxTickets"
            value={maxTickets}
            onChange={handleMaxTickets}
            placeholder="Tickets máximos"
          />

          <button type="button" onClick={handleOnSubmit} className="button">
            Crear Evento
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
