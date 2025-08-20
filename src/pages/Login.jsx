import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/main.css';

// Componente de Login recebe lista de clientes e credenciais do admin
const Login = ({ clients, adminCredentials }) => {
  // Estados para email, senha e mensagem de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Função chamada ao enviar o formulário de login
  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica se é o administrador
    if (email === adminCredentials.email && password === adminCredentials.password) {
      navigate('/home'); // Redireciona para a página Home
      return;
    }

    // Verifica se é um cliente
    const client = clients.find(
      (client) => client.email === email && client.password === password
    );

    if (client) {
      navigate(`/client/${client.id}`); // Redireciona para a página do cliente
    } else {
      setError('E-mail ou senha inválidos'); // Exibe erro se não encontrar usuário
    }
  };

  return (
    <div className="login-container">
      {/* Logo do sistema */}
      <img src={logo} alt="Logo" className="logo" />
      <h1>Bioimpedância Vida Fitness</h1>
      <div className="login-box">
        <h2>Entrar</h2>
        {/* Exibe mensagem de erro se houver */}
        {error && <p className="error">{error}</p>}
        {/* Formulário de login */}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;