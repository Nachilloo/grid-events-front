//import Carousel from 'react-material-ui-carousel';
import { Typography, ButtonBase, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

const categories = [
    { name: "Concerts", icon: "🎵" },
    { name: "Sports", icon: "⚽" },
    { name: "Art", icon: "🎨" },
    { name: "Tech", icon: "💻" },
    { name: "Food", icon: "🍔" },
    { name: "Movies", icon: "🎬" },
    { name: "Theater", icon: "🎭" },
    { name: "Literature", icon: "📚" },
    { name: "Travel", icon: "✈️" },
    { name: "Gaming", icon: "🎮" },
  ];

  const CategoryAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1),
    fontSize: '3rem',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer'
    }
}));

function CategoryHome() {
 const handleCategoryClick = (categoryName) => {
        alert(`Category clicked: ${categoryName}`);
        // Aquí puedes agregar la funcionalidad que desees, como navegación o filtrado
      };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginBottom={4} style={{margin:'30px'}}>
        {categories.map((category, index) => (
          <Box key={index} textAlign="center" mx={1}>
            <ButtonBase onClick={() => handleCategoryClick(category.name)} style={{ borderRadius: '80%' }}>
            <CategoryAvatar style={{height: '77px', width: '77px'}}>
              {category.icon}
            </CategoryAvatar>
            </ButtonBase>
            <Typography variant="body1">
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
  )
}

export default CategoryHome