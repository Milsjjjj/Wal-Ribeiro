// Objeto contendo os dados dos treinos separados por categoria
const workoutData = {
  // Categoria de treinos para abdômen
  abdomen: [
    { name: "Abdominal Infra Solo", gif: "/treinos/abdomen/Abdominal infra solo (abdominal invertido).gif" },
    { name: "Abdominal Cruzado", gif: "/treinos/abdomen/Abdominal-cruzado.gif" },
  ],
  // Categoria de treinos para bíceps
  biceps: [
    { name: "Rosca Direta", gif: "/treinos/bíceps/Rosca direta com barra reta ou W.gif" },
    { name: "Rosca Martelo", gif: "/treinos/bíceps/Rosca martelo.gif" },
  ],
  // Outras categorias podem ser adicionadas aqui...
};

// Exporta o objeto workoutData para uso em outros módulos
export default workoutData;