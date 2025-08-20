import React, { useState } from 'react';
import workoutData from '../data/workoutData';

// Componente principal para exibir planos de treino semanais
const WorkoutPlans = () => {
    // Estado para armazenar o dia selecionado pelo usuário
    const [selectedDay, setSelectedDay] = useState(null);

    // Exemplos de planos de treino semanais (não utilizados diretamente no render)
    const plans = [
        {
            title: 'Upper Body Strength',
            description: 'Plano semanal focado em força de peito, costas, ombros e braços.',
            exercises: [
                'Bench Press',
                'Pull-Ups',
                'Shoulder Press',
                'Bicep Curls',
                'Tricep Dips'
            ]
        },
        {
            title: 'Lower Body Strength',
            description: 'Plano semanal para fortalecer pernas e glúteos.',
            exercises: [
                'Squats',
                'Deadlifts',
                'Lunges',
                'Leg Press',
                'Calf Raises'
            ]
        },
        {
            title: 'Core Stability',
            description: 'Plano semanal para melhorar força e estabilidade do core.',
            exercises: [
                'Planks',
                'Russian Twists',
                'Leg Raises',
                'Bicycle Crunches',
                'Mountain Climbers'
            ]
        }
    ];

    return (
        <div className="workout-plans">
            {/* Título da página */}
            <h1>Weekly Workout Plans</h1>
            {/* Botões para seleção do dia */}
            <div>
                {[1, 2, 3, 4, 5].map((day) => (
                    <button key={day} onClick={() => setSelectedDay(day)}>
                        Day {day}
                    </button>
                ))}
            </div>

            {/* Exibe os planos de treino do dia selecionado */}
            {selectedDay && (
                <div>
                    <h2>Workout Plans for Day {selectedDay}</h2>
                    {/* Percorre as categorias de treino do workoutData */}
                    {Object.keys(workoutData).map((category) => (
                        <div key={category}>
                            <h3>{category.toUpperCase()}</h3>
                            <div className="workout-category">
                                {/* Exibe cada exercício da categoria */}
                                {workoutData[category].map((exercise) => (
                                    <div key={exercise.name} className="workout-item">
                                        <img src={exercise.gif} alt={exercise.name} />
                                        <p>{exercise.name}</p>
                                        {/* Checkbox para marcar o exercício */}
                                        <input type="checkbox" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkoutPlans;