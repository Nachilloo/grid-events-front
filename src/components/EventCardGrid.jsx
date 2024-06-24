import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

function EventCard({ event }) {
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
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default EventCard;

