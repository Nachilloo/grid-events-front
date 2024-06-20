import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardEvent.css";

function CardEvent() {
  return (
    <div className="Card-Event Container">
      <Card className="CardTotal" sx={{ maxWidth: 335, borderRadius: 5 }}>
        <CardMedia
          sx={{ borderRadius: 5 }}
          component="img"
          alt="TailorSwift"
          height="170"
          image="./src/assets/TailorSwift.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Concierto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disfruta de los mejores artistas del mundo en una noche mágica
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Comprar Entradas</Button> */}
          <Button size="medium" variant="contained">
            Comprar Entradas
          </Button>
          <Button size="large">
            {" "}
            <i className="fa-regular fa-heart"></i>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardEvent;
