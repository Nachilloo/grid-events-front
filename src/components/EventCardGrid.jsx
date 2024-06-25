import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
            <Box position="relative">
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
                        {event.description}
                    </Typography>
                    <Typography variant="body2">
                        <strong>€</strong> {event.price}
                    </Typography>
                    <Typography variant="body2">
                        {event.about}
                    </Typography>
                </CardContent>
                <IconButton
                    onClick={handleFavoriteClick}
                    color="primary"
                    aria-label="mark as favorite"
                    disabled={loading}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </Box>
        </Card>   
    );
}

export default EventCard;

