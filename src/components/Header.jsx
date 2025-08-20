import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Arquivo CSS para estilização do Header

// Componente Header exibe o título e o menu de navegação do site
const Header = () => {
    return (
        <header className="header">
            {/* Título do site */}
            <h1>Bioimpedance Fitness</h1>
            {/* Menu de navegação */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bioimpedance">Bioimpedance Testing</Link></li>
                    <li><Link to="/workout-plans">Workout Plans</Link></li>
                </ul>
            </nav>
        </header>
    );
};

// Exporta o componente para uso em outras partes do aplicativo
export default Header;