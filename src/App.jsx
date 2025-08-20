// Importa React e hooks para estado e efeitos colaterais
import React, { useEffect, useState } from 'react';
// Importa componentes de roteamento do React Router
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Importa as páginas do projeto
import Home from './pages/Home';
import Login from './pages/Login';
import ClientPage from './pages/ClientPage';
import AddWorkout from './pages/AddWorkout';
import AdminPage from './pages/AdminPage';
import ManageClient from './pages/ManageClient';
// Importa o arquivo de estilos principal
import './styles/main.css';
// Importa o banco de dados de clientes
import clientsDB from './data/clientsDB';

// Componente que gerencia as rotas e troca de estilos de página
function AppContent({ clients, setClients, adminCredentials }) {
    // Hook para obter a localização atual da rota
    const location = useLocation();

    // Altera a classe do body conforme a rota (login ou padrão)
    useEffect(() => {
        if (location.pathname === '/') {
            document.body.className = 'login-page';
        } else {
            document.body.className = 'default-page';
        }
    }, [location]);

    // Define as rotas da aplicação
    return (
        <div>
            <Routes>
                {/* Rota para página de login */}
                <Route path="/" element={<Login clients={clients} adminCredentials={adminCredentials} />} />
                {/* Rota para página inicial/home */}
                <Route path="/home" element={<Home clients={clients} setClients={setClients} />} />
                {/* Rota para página do cliente */}
                <Route path="/client/:id" element={<ClientPage clients={clients} setClients={setClients} workouts={[]} />} />
                {/* Rota para adicionar treino ao cliente */}
                <Route path="/add-workout/:clientId" element={<AddWorkout clients={clients} setClients={setClients} />}/>
                {/* Rota para página do administrador */}
                <Route path="/admin" element={<AdminPage clients={clients} setClients={setClients} />} />
                {/* Rota para gerenciar cliente */}
                <Route path="/manage-client/:id" element={<ManageClient clients={clients} setClients={setClients} />} />
            </Routes>
        </div>
    );
}

// Componente principal da aplicação
function App() {
    // Estado para lista de clientes, inicializado do localStorage se existir
    const [clients, setClients] = useState(() => {
        const saved = localStorage.getItem('clients');
        return saved ? JSON.parse(saved) : clientsDB;
    });

    // Salva a lista de clientes no localStorage sempre que ela muda
    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients));
    }, [clients]);

    // Credenciais do administrador (fixas para exemplo)
    const adminCredentials = {
        email: 'admin@example.com',
        password: 'admin123',
    };

    // Renderiza o roteador e o conteúdo das rotas
    return (
        <Router>
            <AppContent clients={clients} setClients={setClients} adminCredentials={adminCredentials} />
        </Router>
    );
}

// Exporta o componente principal para uso no projeto
export default App;