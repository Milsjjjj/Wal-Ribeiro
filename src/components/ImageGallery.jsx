// Componente para exibir a galeria de imagens dos treinos
const ImageGallery = ({ workouts, onSelect, clientWorkouts, selectedDay }) => (
  <ul className="workout-list">
    {workouts.map((workout) => {
      // Verifica se o treino já foi adicionado para o cliente no dia selecionado
      const alreadyAdded = clientWorkouts?.some(
        (w) => w.name === workout.name && w.day === selectedDay
      );
      return (
        <li key={workout.name} className="workout-list-item">
          {/* Botão para salvar o treino, desabilitado se já foi salvo */}
          <button
            onClick={() => onSelect(workout)}
            disabled={alreadyAdded}
            style={{
              background: alreadyAdded ? 'green' : '#007bff',
              color: '#fff',
              cursor: alreadyAdded ? 'default' : 'pointer',
              padding: '2px 6px',
              fontSize: '0.8rem',
              marginRight: '6px',
            }}
          >
            {alreadyAdded ? 'Salvo' : 'Salvar'}
          </button>
          {/* Nome do exercício */}
          <span className="workout-name">{workout.name}</span>
          {/* Imagem/gif do exercício */}
          <img
            src={workout.gif}
            alt={workout.name}
            className="workout-thumb"
            style={{ width: 50, height: 50, marginLeft: 8 }}
          />
        </li>
      );
    })}
  </ul>
);

// Exporta o componente para uso em outras partes do projeto
export default ImageGallery;