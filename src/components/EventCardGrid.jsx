import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { favoriteEvent, unfavoriteEvent } from "../services/eventsService";

function EventCard({ event }) {
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función para guardar el estado de favoritos en localStorage
  const saveFavoriteStatus = (eventId, status) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
    favorites[eventId] = status;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  // Función para cargar el estado de favoritos desde localStorage
  const loadFavoriteStatus = (eventId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
    return favorites[eventId] || false;
  };

  useEffect(() => {
    // Cargar el estado de favoritos cuando se monta el componente
    setFavorited(loadFavoriteStatus(event.id));
  }, [event.id]);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to CardActionArea
    setLoading(true);
    try {
      if (favorited) {
        await unfavoriteEvent(event.id);
        saveFavoriteStatus(event.id, false);
      } else {
        await favoriteEvent(event.id);
        saveFavoriteStatus(event.id, true);
      }
      setFavorited(!favorited);
    } catch (error) {
      console.error("Error updating favorite status", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Box position="relative">
        <CardMedia
          component="img"
          alt={event.title}
          height="140"
          image={event.imgProfile || "default-image-url.jpg"}
          title={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Typography variant="body2">
            <strong>€</strong> {event.price}
          </Typography>
          <Typography variant="body2">{event.about}</Typography>
        </CardContent>
        <IconButton
          onClick={handleFavoriteClick}
          color="primary"
          aria-label="mark as favorite"
          disabled={loading}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </Card>
  );
}

export default EventCard;
