// Arquivo principal: inicializa o React no site
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Diz onde o React vai mostrar o conteúdo (div com id "root" no index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);