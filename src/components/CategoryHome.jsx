import React, { useState, useEffect } from "react";
import {
  Typography,
  ButtonBase,
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import { fetchEvents } from "../services/eventsService";

const categories = [
  { name: "Conciertos", icon: "🎵", id: 14 },
  { name: "Festivales", icon: "🎉", id: 15 },
  { name: "Deportes", icon: "⚽", id: 41 },
  { name: "Arte", icon: "🎨", id: 42 },
  { name: "Tecnología", icon: "💻", id: 43 },
  { name: "Comida", icon: "🍔", id: 44 },
  { name: "Cine", icon: "🎬", id: 45 },
  { name: "Teatro", icon: "🎭", id: 46 },
  { name: "Literatura", icon: "📚", id: 47 },
  { name: "Viajes", icon: "✈️", id: 48 },
  { name: "Gaming", icon: "🎮", id: 49 },
  { name: "Otros", icon: "🌀", id: 50 },
];

const CategoryAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: theme.spacing(1),
  fontSize: "3rem",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
}));

function CategoryHome() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await fetchEvents();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getEvents();
  }, []);

  const handleCategoryClick = (categoryName, categoryId) => {
    setSelectedCategory(categoryName);
    const filtered = events.filter((event) => event.categoryId === categoryId);
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginBottom={4}
        style={{ margin: "30px" }}
      >
        {categories.map((category, index) => (
          <Box key={index} textAlign="center" mx={1}>
            <ButtonBase
              onClick={() => handleCategoryClick(category.name, category.id)}
              style={{ borderRadius: "80%" }}
            >
              <CategoryAvatar style={{ height: "77px", width: "77px" }}>
                {category.icon}
              </CategoryAvatar>
            </ButtonBase>
            <Typography variant="body1">{category.name}</Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography variant="h4">
          {selectedCategory
            ? `Eventos para ${selectedCategory}`
            : ""}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          {filteredEvents.map((event, index) => (
            <Card key={index} sx={{ maxWidth: 345, margin: "20px" }}>
              <CardMedia
                component="img"
                height="140"
                image={event.imgProfile} // Asegúrate de que la URL de la imagen es correcta
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fecha: {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ubicación: {event.location}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default CategoryHome;
