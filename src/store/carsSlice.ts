import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
};

export type CarState = {
  cars: Car[];
  loading: boolean;
  error: string | null;
};

const initialState: CarState = {
  cars: [] as Car[],
  loading: false,
  error: null,
};

export const updateCar = createAsyncThunk('car/updateCar', async (car: Car) => {
  return new Promise<Car>((resolve) => {
    setTimeout(() => {
      const updatedCar = { ...car };
      resolve(updatedCar);
    }, 1000);
  });
});

export const fetchCars = createAsyncThunk('car/fetchCars', async (_, thunkAPI) => {
  try {
    const res = await axios.get<Car[]>('https://test.tspb.su/test-task/vehicles');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to load cars');
  }
});

const carSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled.type, (state, action: PayloadAction<Car[]>) => {
        state.loading = false;
        state.error = '';
        state.cars = action.payload;
      })
      .addCase(fetchCars.pending.type, (state) => {
        state.loading = false;
      })
      .addCase(fetchCars.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCar.fulfilled.type, (state, action: PayloadAction<Car>) => {
        const updatedCar = action.payload;
        const index = state.cars.findIndex((car) => car.id === updatedCar.id);
        state.loading = false;
        state.error = '';
        state.cars[index] = updatedCar;
      })
      .addCase(updateCar.pending.type, (state) => {
        state.loading = false;
      })
      .addCase(updateCar.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carSlice.reducer;
