import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente principal da página Home para gerenciar clientes
const Home = () => {
    const [clients, setClients] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editingClient, setEditingClient] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/api/clients') // ou use seu IP, se acessar de outro dispositivo
            .then(res => res.json())
            .then(data => setClients(data));
    }, []);

    // Função para adicionar um novo cliente
    const handleAddClient = (e) => {
        e.preventDefault();

        // Cria objeto do novo cliente
        const newClient = {
            id: Date.now(),
            name,
            email,
            password,
            createdAt: new Date().toISOString(),
            active: true
        };

        fetch('http://localhost:3001/api/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newClient)
        })
          .then(res => res.json())
          .then(clienteSalvo => setClients(prev => [...prev, clienteSalvo]));

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPassword('');
    };

    // Função para acessar página de gerenciamento do cliente
    const handleClientClick = (clientId) => {
        navigate(`/manage-client/${clientId}`);
    };

    // Função para remover cliente da lista
    const handleRemoveClient = (clientId) => {
        setClients(clients.filter(client => client.id !== clientId));
    };

    // Função para iniciar edição
    const handleEditClient = (client) => {
      setEditingClient(client);
      setName(client.name);
      setEmail(client.email);
      setPassword(client.password);
    };

    // Função para salvar edição
    const handleSaveEdit = (e) => {
      e.preventDefault();
      const updatedClient = {
        ...editingClient,
        name,
        email,
        password
      };

      fetch(`http://localhost:3001/api/clients/${editingClient.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedClient)
      })
        .then(res => res.json())
        .then(clienteAtualizado => {
          setClients(prev =>
            prev.map(c => (c.id === clienteAtualizado.id ? clienteAtualizado : c))
          );
          setEditingClient(null);
          setName('');
          setEmail('');
          setPassword('');
        });
    };

    // Função para cancelar edição
    const handleCancelEdit = () => {
      setEditingClient(null);
      setName('');
      setEmail('');
      setPassword('');
    };

    return (
        <div className="home-container">
            {/* Título da página */}
            <h1 className="home-title">Manage Clients</h1>

            {/* Seção para adicionar clientes */}
            <div className="form-container">
                <h2>{editingClient ? 'Edit Client' : 'Add New Client'}</h2>
                <form onSubmit={editingClient ? handleSaveEdit : handleAddClient} className="add-client-form">
                    <input
                        type="text"
                        placeholder="Client Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Client Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Client Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{editingClient ? 'Salvar' : 'Add Client'}</button>
                    {editingClient && <button type="button" onClick={handleCancelEdit}>Cancelar</button>}
                </form>
            </div>

            {/* Seção para listar clientes */}
            <div className="clients-container">
                <h2>Clients List</h2>
                <ul className="client-list">
                    {clients.map((client) => {
                        // Calcula dias desde o cadastro do cliente
                        const days = client.createdAt
                          ? Math.floor((Date.now() - new Date(client.createdAt)) / (1000 * 60 * 60 * 24))
                          : 0;
                        return (
                          <li key={client.id} className="client-item">
                            {/* Nome do cliente, vermelho se passou de 45 dias */}
                            <span style={{ color: days > 45 ? 'red' : 'inherit' }}>
                              {client.name}
                            </span>
                            {/* Data de cadastro */}
                            <span style={{ marginLeft: 8, fontSize: '0.9rem' }}>
                              {client.createdAt
                                ? `Cadastro: ${new Date(client.createdAt).toLocaleDateString()}`
                                : ''}
                            </span>
                            {/* Botão para renovar contrato se passou de 45 dias */}
                            {days > 45 && (
                              <button
                                style={{
                                  background: '#28a745',
                                  color: '#fff',
                                  padding: '2px 8px',
                                  border: 'none',
                                  borderRadius: '4px',
                                  marginLeft: '8px',
                                  cursor: 'pointer',
                                  fontWeight: 'bold',
                                  fontSize: '0.85rem'
                                }}
                                onClick={() => {
                                  setClients(clients.map(c =>
                                    c.id === client.id
                                      ? { ...c, createdAt: new Date().toISOString() }
                                      : c
                                  ));
                                  alert('Contrato renovado por mais 45 dias!');
                                }}
                              >
                                Renovar
                              </button>
                            )}
                            {/* Botão para acessar gerenciamento do cliente */}
                            <button
                              disabled={days > 45 && !client.active}
                              onClick={() => handleClientClick(client.id)}
                            >
                              Acessar
                            </button>
                            {/* Botão para remover cliente */}
                            <button
                              className="remove-button"
                              onClick={() => handleRemoveClient(client.id)}
                            >
                              Remover
                            </button>
                            {/* Botão para editar cliente */}
                            <button
                              className="edit-button"
                              onClick={() => handleEditClient(client)}
                            >
                              Editar
                            </button>
                          </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Home;