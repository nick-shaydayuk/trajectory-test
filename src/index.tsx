import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
