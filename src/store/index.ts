import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carsSlice';

const store = configureStore({
  reducer: {
    carReducer: carReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
