const clientsDB = [
  {
    id: 1,
    name: "Wal Ribeiro",
    email: "wal@gmail.com",
    password: "wal123",
    bioimpedanceResults: {
      weight: 65,
      bodyFat: 22,
      muscleMass: 28,
      visceralFat: 8,
      waterPercentage: 55,
      basalMetabolicRate: 1400,
    },
    workouts: [
      {
        name: "Supino Reto",
        day: "Segunda-feira",
        category: "peito",
        description: "4x12",
        gif: "/treinos/peito/supino-reto.gif"
      }
    ],
    createdAt: "2024-08-19T12:00:00Z"
  },
  {
    id: 2,
    name: "Hingredy Reiro",
    email: "hingredy@gmail.com",
    password: "Hingredy123",
    bioimpedanceResults: {
      weight: "",
      bodyFat: "",
      muscleMass: "",
      visceralFat: "",
      waterPercentage: "",
      basalMetabolicRate: "",
    },
    workouts: [],
    createdAt: "2024-08-19T12:00:00Z"
  }
  // ...outros clientes
];

export default clientsDB;