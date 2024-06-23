import React, { useState } from "react";
import PropTypes from "prop-types"; //A GABRIEL NO LE HACE FALTA ESTO PERO A MI SI, REVISARLO

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const EventCardGrid = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative", borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={event.image}
          alt={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.primary">
              Fecha: {event.date}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Hora: {event.time}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Ubicación: {event.location}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={handleLike}
        color={liked ? "error" : "default"}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};
  //A GABRIEL NO LE HACE FALTA ESTO PERO A MI SI, REVISARLO
EventCardGrid.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
//HASTA AQUI REVISAR

export default EventCardGrid;
