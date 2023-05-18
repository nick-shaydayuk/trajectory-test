import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './Main';
import AppBarComponent from './AppBarComponent';
import EditView from './EditView';
import { fetchCars } from '../store/carsSlice';
import { useAppDispatch } from '../hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppBarComponent />
              <Main />
            </>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <>
              <AppBarComponent />
              <EditView />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
