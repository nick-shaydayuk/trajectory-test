import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { Car, updateCar } from '../store/carsSlice';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ChangeEvent, useState } from 'react';

const EditView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const car: Car = location.state;
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.carReducer);

  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [price, setPrice] = useState(car.price);

  const handleUpdateValue = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    switch (key) {
      case 'name':
        setName(e.target.value);
        break;
      case 'model':
        setModel(e.target.value);
        break;
      case 'price':
        setPrice(parseInt(e.target.value));
        break;
      default:
        break;
    }
  };

  const onUpdateCar = () => {
    dispatch(
      updateCar({
        id: car.id,
        name: name,
        model: model,
        price: price,
        year: car.year,
        color: car.color,
        latitude: car.latitude,
        longitude: car.longitude,
      })
    ).then((res) => {
      if (res.meta.requestStatus === 'rejected') {
        return;
      }
      navigate('/');
    });
  };

  return (
    <main>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Stack>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              className="card"
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography>{model}</Typography>
                <Typography fontSize={14}>Price is: {price}$</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
        <Stack maxWidth="sm">
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleUpdateValue(e, 'name');
              }}
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Model"
              variant="outlined"
              value={model}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleUpdateValue(e, 'model');
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleUpdateValue(e, 'price');
              }}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Stack>
      </Stack>
      {error ? <>{error}</> : <></>}
      <Container maxWidth="sm">
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={() => {
              navigate('/');
            }}
          >
            Leave
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onUpdateCar();
            }}
          >
            Save
          </Button>
        </Stack>
      </Container>
    </main>
  );
};

export default EditView;
