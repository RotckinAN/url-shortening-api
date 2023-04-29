import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import 'normalize.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
