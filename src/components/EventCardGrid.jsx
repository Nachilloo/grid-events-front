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
    <Card 
    sx={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
    }}>
      <Box position="relative">
        <CardMedia
          component="img"
          alt={event.title}
          height="140"
          image={event.imgProfile || "default-image-url.jpg"}
          title={event.title}
        />
        <CardContent 
        sx={{
            height: '230px', 
            overflow: 'hidden',
        }}>
          <Typography gutterBottom variant="h6" component="div">
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
