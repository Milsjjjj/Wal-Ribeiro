// Importa o React para criar componentes
import React from 'react';
// Importa o ReactDOM para renderizar o app na DOM
import ReactDOM from 'react-dom/client';
// Importa o componente principal da aplicação
import App from './App';
// Importa o arquivo de estilos principal
import './styles/main.css';

// Cria a raiz do React na div com id 'root'
const root = ReactDOM.createRoot(document.getElementById('root')); // Certifique-se de que o ID seja 'root'

// Renderiza o componente App dentro do React.StrictMode para checagem de boas práticas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);