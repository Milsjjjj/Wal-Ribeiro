// Importa React e hooks para manipular estado e navegação entre páginas
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Componente para adicionar treinos ao cliente
const AddWorkout = ({ clients, setClients }) => {
  // Estado para armazenar o dia selecionado
  const [selectedDay, setSelectedDay] = useState(null);
  // Estado para armazenar a categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Estado para controlar os dias que já têm treinos
  const [daysWithWorkouts, setDaysWithWorkouts] = useState([]);
  // Hook para navegação entre páginas
  const navigate = useNavigate();
  // Obtém o id do cliente da URL
  const { clientId } = useParams();

  // Busca o cliente pelo id
  const client = clients.find((c) => c.id === parseInt(clientId));

  // Se não encontrar o cliente, exibe mensagem
  if (!client) {
    return <h1>Cliente não encontrado</h1>;
  }

  // Lista de categorias de treino disponíveis
  const categories = [
    "aerobico",
    "abdomen",
    "antebraço",
    "bíceps",
    "costas",
    "glúteos",
    "ombros",
    "panturrilhas",
    "peito",
    "pernas",
    "trapézio",
    "tríceps",
  ];

  // Função para retornar os gifs de cada categoria
  const getGifsForCategory = (category) => {
    const gifs = {
      abdomen: [
        "Abdominal infra solo (abdominal invertido).gif",
        "Abdominal-cruzado.gif",
        "Abdominal-declinado.gif",
      ],
      bíceps: [
        "Rosca direta com barra reta ou W.gif",
        "Rosca martelo.gif",
        "rosca-alternada.gif",
      ],
    };
    return gifs[category] || [];
  };

  // Função para selecionar o dia de treino
  const handleDaySelection = (day) => {
    setSelectedDay(day);
    if (!daysWithWorkouts.includes(day)) {
      setDaysWithWorkouts((prev) => [...prev, day]);
    }
  };

  // Função para adicionar ou remover treino do cliente
  const handleToggleWorkout = (gifName, checked) => {
    let updatedClients;

    if (checked) {
      // Adiciona treino ao cliente
      const workoutData = {
        name: gifName.replace(".gif", ""),
        gif: `/treinos/${selectedCategory}/${gifName}`,
        day: selectedDay,
        completed: false,
      };
      updatedClients = clients.map((c) =>
        c.id === client.id
          ? { ...c, workouts: [...(c.workouts || []), workoutData] }
          : c
      );
    } else {
      // Remove treino do cliente
      updatedClients = clients.map((c) =>
        c.id === client.id
          ? {
              ...c,
              workouts: (c.workouts || []).filter(
                (w) =>
                  !(
                    w.name === gifName.replace(".gif", "") &&
                    w.day === selectedDay
                  )
              ),
            }
          : c
      );
    }

    setClients(updatedClients);
  };

  // Renderização do componente
  return (
    <div className="add-workout-container">
      {/* Título da página */}
      <h1>Adicionar Treinos para {client.name}</h1>

      {/* Botão para voltar para página anterior */}
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px", cursor: "pointer" }}
      >
        Voltar para Página do Cliente
      </button>

      {/* Seleção do dia de treino */}
      {!selectedDay && (
        <div>
          <h2>Escolha o Dia de Treino</h2>
          {[1, 2, 3, 4, 5].map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelection(day)}
              className="day-button"
            >
              Dia {day} {daysWithWorkouts.includes(day) && "•"}
            </button>
          ))}
        </div>
      )}

      {/* Seleção da categoria de treino */}
      {selectedDay && !selectedCategory && (
        <div>
          <h2>Escolha uma Categoria para o Dia {selectedDay}</h2>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="category-button"
            >
              {category.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setSelectedDay(null)}
            className="back-button"
          >
            Voltar aos Dias
          </button>
        </div>
      )}

      {/* Exibição dos treinos da categoria selecionada */}
      {selectedCategory && (
        <div>
          <h2>{selectedCategory.toUpperCase()} - Dia {selectedDay}</h2>
          <button
            onClick={() => setSelectedCategory(null)}
            className="back-button"
          >
            Voltar às Categorias
          </button>
          <div className="workout-category">
            {getGifsForCategory(selectedCategory).map((gif) => {
              // Verifica se o treino já está marcado para o cliente
              const isChecked =
                client.workouts?.some(
                  (w) =>
                    w.name === gif.replace(".gif", "") &&
                    w.day === selectedDay
                ) || false;

              return (
                <div key={gif} className="workout-item">
                  {/* Imagem do exercício */}
                  <img
                    src={`/treinos/${selectedCategory}/${gif}`}
                    alt={gif.replace(".gif", "")}
                  />
                  {/* Nome do exercício */}
                  <p>{gif.replace(".gif", "")}</p>
                  {/* Checkbox para marcar/desmarcar treino */}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) =>
                      handleToggleWorkout(gif, e.target.checked)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Exporta o componente para uso em outras partes do projeto
export default AddWorkout;