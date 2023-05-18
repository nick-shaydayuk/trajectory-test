import Grid from '@mui/material/Grid';
import { Car } from '../store/carsSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

type CarCardProps = {
  car: Car;
};

const CarCard = ({ car }: CarCardProps) => {
  const navigate = useNavigate();

  const mapLink = `https://yandex.ru/maps/?ll=${car.longitude}%2C${car.latitude}&mode=poi&poi%5Bpoint%5D=${car.longitude}%2C${car.latitude}&z=13`;
  const onEdit = () => {
    navigate(`/edit/:${car.id}`, { state: car });
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="card">
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {car.name}
          </Typography>
          <Typography>{car.model}</Typography>
          <Typography>Year of assembly: {car.year}</Typography>
        </CardContent>
        <CardActions>
          <a href={mapLink} target="_blank">
            <Button size="small">View Location</Button>
          </a>

          <Button size="small" onClick={() => onEdit()}>
            Edit
          </Button>
          <Typography fontSize={14}>Price is: {car.price}$</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CarCard;
