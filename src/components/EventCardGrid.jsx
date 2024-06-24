import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { favoriteEvent, unfavoriteEvent } from '../services/eventsService';


function EventCard({ event }) {
    const [favorited, setFavorited] = useState(event.isFavorited || false);
    const [loading, setLoading] = useState(false);

    const handleFavoriteClick = async () => {
        setLoading(true);
        try {
            if (favorited) {
                await unfavoriteEvent(event.id);
            } else {
                await favoriteEvent(event.id);
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
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={event.title}
                    height="140"
                    image={event.imgProfile || 'default-image-url.jpg'}
                    title={event.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>{event.description}</p>
                        <Typography variant="body2"><strong>€</strong> {event.price}</Typography>
                        <Typography variant="body2"><strong></strong> {event.about}</Typography>
                        <IconButton 
                        onClick={handleFavoriteClick} 
                        color="primary" 
                        aria-label="mark as favorite"
                        disabled={loading} // Deshabilita el botón mientras se realiza la llamada API
                    >
                        {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default EventCard;

