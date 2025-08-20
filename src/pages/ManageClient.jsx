import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ManageClient.css';
import ImageGallery from '../components/ImageGallery';
import { categories } from "../components/categories";

// Dias da semana para seleção de treinos
const daysOfWeek = [
  'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
  'Sexta-feira', 'Sábado', 'Domingo'
];

// Componente principal para gerenciar cliente
const ManageClient = ({ clients, setClients }) => {
  // Obtém o id do cliente da URL
  const { id } = useParams();
  // Hook para navegação entre páginas
  const navigate = useNavigate();
  // Busca o cliente pelo id
  const client = clients.find(c => c.id === parseInt(id));
  // Se não encontrar o cliente, exibe mensagem
  if (!client) {
    return <h1>Cliente não encontrado</h1>;
  }

  // BLOQUEIO: retorna só a mensagem se passou de 45 dias desde o cadastro
  if (client?.createdAt) {
    const days = Math.floor((Date.now() - new Date(client.createdAt)) / (1000 * 60 * 60 * 24));
    if (days > 45) {
      return (
        <div className="client-page">
          <h1 style={{ color: 'red', textAlign: 'center' }}>
            Acesso bloqueado! Procure o administrador para renovar seu contrato.
          </h1>
          <button
            style={{
              background: '#28a745',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginTop: '24px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => {
              const updatedClients = clients.map(c =>
                c.id === client.id
                  ? { ...c, createdAt: new Date().toISOString() }
                  : c
              );
              setClients(updatedClients);
              alert('Contrato renovado por mais 45 dias!');
            }}
          >
            Renovar contrato (+45 dias)
          </button>
          <button className="back-button" onClick={() => navigate('/home')} style={{ marginTop: '16px' }}>
            Voltar para Admin
          </button>
        </div>
      );
    }
  }

  // Estado para resultados de bioimpedância
  const [bioimpedanceResults, setBioimpedanceResults] = useState(client?.bioimpedanceResults || {
    weight: '',
    bodyFat: '',
    muscleMass: '',
    visceralFat: '',
    waterPercentage: '',
    basalMetabolicRate: '',
  });

  // Estado para dia selecionado dos treinos
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  // Estado para categoria de treino selecionada
  const [selectedCategory, setSelectedCategory] = useState('');
  // Estado para treinos disponíveis da categoria
  const [availableWorkouts, setAvailableWorkouts] = useState([]);
  // Estado para treinos do cliente filtrados pelo dia
  const [workouts, setWorkouts] = useState(
    client.workouts?.filter(w => w.day === selectedDay) || []
  );
  // Estado para descrição do treino
  const [workoutDescription, setWorkoutDescription] = useState('');

  // Atualiza treinos quando o dia selecionado muda
  useEffect(() => {
    if (selectedDay) {
      setWorkouts(client.workouts?.filter(w => w.day === selectedDay) || []);
    } else {
      setWorkouts(client.workouts || []);
    }
  }, [selectedDay, client.workouts]);

  // Atualiza treinos quando a lista de clientes muda
  useEffect(() => {
    const updated = clients.find((c) => c.id === parseInt(id));
    setWorkouts(updated?.workouts || []);
  }, [clients, id]);

  // Atualiza estado dos resultados de bioimpedância ao digitar
  const handleBioimpedanceChange = (e) => {
    const { name, value } = e.target;
    setBioimpedanceResults((prev) => ({ ...prev, [name]: value }));
  };

  // Salva resultados de bioimpedância no cliente
  const handleSaveBioimpedance = (e) => {
    e.preventDefault();
    const updatedClients = clients.map((c) =>
      c.id === client.id ? { ...c, bioimpedanceResults } : c
    );
    setClients(updatedClients);
    alert('Resultados de bioimpedância salvos com sucesso!');
  };

  // Adiciona treino ao cliente
  const handleAddWorkout = (workout) => {
    if (!selectedDay) {
      alert('Selecione o dia da semana antes de salvar o treino.');
      return;
    }
    const workoutWithDay = { 
      ...workout, 
      day: selectedDay, 
      category: selectedCategory,
      description: workoutDescription // <-- adiciona a descrição
    };
    const updatedClients = clients.map((c) =>
      c.id === client.id
        ? { ...c, workouts: [...(c.workouts || []), workoutWithDay] }
        : c
    );
    setClients(updatedClients);
    setWorkouts([...workouts, workoutWithDay]);
    setWorkoutDescription(''); // limpa o campo após adicionar
  };

  // Função para trocar o dia selecionado
  const handleDaySelection = (e) => {
    setSelectedDay(e.target.value);
    setSelectedCategory('');
    setAvailableWorkouts([]);
  };

  // Função para trocar a categoria selecionada
  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
    const workoutsList = categories[e.target.value]?.map((image) => ({
      name: image.replace(/\.(gif|jpg|jpeg|png)$/, ''),
      gif: `/treinos/${e.target.value}/${image}`,
      category: e.target.value
    })) || [];
    setAvailableWorkouts(workoutsList);
  };

  // Remove treino do cliente
  const handleRemoveWorkout = (workoutToRemove) => {
    const updatedWorkouts = workouts.filter(
      (w) =>
        !(
          w.name === workoutToRemove.name &&
          w.day === workoutToRemove.day &&
          w.category === workoutToRemove.category
        )
    );
    setWorkouts(updatedWorkouts);
    const updatedClients = clients.map((c) =>
      c.id === client.id ? { ...c, workouts: updatedWorkouts } : c
    );
    setClients(updatedClients);
  };

  // Obtém as categorias dos treinos
  const categorias = Object.keys(categories);

  // Renderização do componente
  return (
    <div className="manage-client">
      {/* Título da página */}
      <h1 className="client-title">Gerenciar Cliente: {client.name}</h1>

      {/* Caixa separada para Bioimpedância */}
      <div className="card bioimpedance-section">
        <h2 className="section-title">Adicionar Bioimpedância</h2>
        <form className="bioimpedance-form" onSubmit={handleSaveBioimpedance}>
          <div className="bioimpedance-fields">
            <label>
              Peso (kg):
              <input
                type="number"
                name="weight"
                value={bioimpedanceResults.weight}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
            <label>
              Gordura Corporal (%):
              <input
                type="number"
                name="bodyFat"
                value={bioimpedanceResults.bodyFat}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
            <label>
              Massa Muscular (kg):
              <input
                type="number"
                name="muscleMass"
                value={bioimpedanceResults.muscleMass}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
            <label>
              Gordura Visceral:
              <input
                type="number"
                name="visceralFat"
                value={bioimpedanceResults.visceralFat}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
            <label>
              Água (%):
              <input
                type="number"
                name="waterPercentage"
                value={bioimpedanceResults.waterPercentage}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
            <label>
              Idade Metabólica:
              <input
                type="number"
                name="basalMetabolicRate"
                value={bioimpedanceResults.basalMetabolicRate}
                onChange={handleBioimpedanceChange}
                className="input"
              />
            </label>
          </div>
          <button className="form-button" type="submit">Salvar Bioimpedância</button>
        </form>
      </div>

      {/* Caixa separada para Treinos */}
      <div className="card workouts-section">
        <h2 className="section-title">Adicionar Treinos</h2>
        <label className="form-label">
          Selecione o Dia da Semana:
          <select className="form-input" value={selectedDay} onChange={handleDaySelection}>
            <option value="">Selecione</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </label>

        {/* Seleção da categoria de treino */}
        {selectedDay && (
          <>
            <label className="form-label">
              Selecione a Categoria:
              <select className="form-input" value={selectedCategory} onChange={handleCategorySelection}>
                <option value="">Selecione</option>
                {Object.keys(categories).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>

            {/* Exibe treinos disponíveis da categoria */}
            {selectedCategory && (
              <div className="available-workouts">
                <h3 className="section-title">Treinos Disponíveis</h3>
                <input
                  type="text"
                  placeholder="Ex: 4x12 ou 3x15"
                  value={workoutDescription}
                  onChange={e => setWorkoutDescription(e.target.value)}
                  style={{
                    margin: '8px 0',
                    padding: '6px',
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                  }}
                />
              </div>
            )}
          </>
        )}

        {/* Renderização das imagens dos treinos disponíveis */}
        {availableWorkouts.length > 0 && (
          <ImageGallery
            workouts={availableWorkouts}
            onSelect={handleAddWorkout}
            clientWorkouts={workouts}
            selectedDay={selectedDay}
          />
        )}

        {/* Lista de treinos já registrados */}
        <h3 className="registered-workouts-title">Treinos Registrados</h3>
        {categorias.map((cat) => {
          const treinosDaCategoria = workouts.filter(w => w.category === cat);
          if (treinosDaCategoria.length === 0) return null;
          return (
            <div className="subcard category-group" key={cat}>
              <h4>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h4>
              <ul className="workouts-list">
                {treinosDaCategoria.map((workout, idx) => {
                  const globalIndex = workouts.findIndex(
                    w => w.name === workout.name && w.day === workout.day && w.category === workout.category
                  );
                  return (
                    <li className="workout-item" key={idx}>
                      <span className="workout-name">{workout.name}</span>
                      <img className="workout-gif" src={workout.gif} alt={workout.name} />
                      {workout.description && (
                        <div style={{ fontSize: '0.9rem', color: '#555', marginTop: 4 }}>
                          {workout.description}
                        </div>
                      )}
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveWorkout(workout)}
                        style={{
                          marginLeft: 8,
                          padding: '2px 6px',
                          fontSize: '0.8rem',
                          background: '#dc3545',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Remover
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* Botão para voltar para página de admin */}
      <button className="back-button" onClick={() => navigate('/home')}>Voltar para Admin</button>
    </div>
  );
};

export default ManageClient;
