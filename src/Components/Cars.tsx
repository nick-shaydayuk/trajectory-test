import Grid from '@mui/material/Grid';
import { useAppSelector } from '../hooks';
import { Car, CarState } from '../store/carsSlice';
import CarCard from './Card';
import { RootState } from '../store';

type CarsProps = {
  searchString: string;
  minPriceSearch: string;
  maxPriceSearch: string;
  minYear: string;
  maxYear: string;
};

const Cars = ({ searchString, minPriceSearch, maxPriceSearch, minYear, maxYear }: CarsProps) => {
  const selectCarsWithFilter = (
    state: RootState,
    minPrice: string,
    maxPrice: string,
    searchString: string,
    minYear: string,
    maxYear: string
  ) => {
    const minPriceNumber = minPrice ? parseInt(minPrice) : 0;
    const maxPriceNumber = maxPrice ? parseInt(maxPrice) : 99999;
    const minYearNumber = minYear ? parseInt(minYear) : 0;
    const maxYearNumber = maxYear ? parseInt(maxYear) : 99999;

    return {
      cars: state.carReducer.cars.filter(
        (car) =>
          car.price >= minPriceNumber &&
          car.price <= maxPriceNumber &&
          car.year >= minYearNumber &&
          car.year <= maxYearNumber &&
          (car.name.toLowerCase().includes(searchString.toLowerCase()) ||
            car.model.toLowerCase().includes(searchString.toLowerCase()))
      ),
      loading: state.carReducer.loading,
      error: state.carReducer.error,
    } as CarState;
  };

  const { cars, loading } = useAppSelector((state) =>
    selectCarsWithFilter(state, minPriceSearch, maxPriceSearch, searchString, minYear, maxYear)
  );

  return (
    <Grid container spacing={4} className="cars">
      {!loading && cars.map((car: Car) => <CarCard car={car} key={car.id} />)}
    </Grid>
  );
};

export default Cars;
