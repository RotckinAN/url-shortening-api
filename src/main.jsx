import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import 'normalize.css';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Provider store={store}>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </Provider>
   </BrowserRouter>
);
