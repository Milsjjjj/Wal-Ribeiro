// Importa hooks do React e funções de navegação do React Router
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Importa imagem de fundo do cliente
import clientBg from '../assets/client-bg.jpeg';

// Dias da semana para seleção visual
const daysOfWeek = [
    'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
    'Sexta-feira', 'Sábado', 'Domingo'
];

// Componente da página do cliente
const ClientPage = ({ clients, setClients, workouts, setWorkouts }) => {
    // Obtém o ID do cliente da URL
    const { id } = useParams();
    const navigate = useNavigate();

    // Busca o cliente pelo ID
    const client = clients.find((client) => client.id === parseInt(id));
    console.log('Cliente recebido:', client);

    // Estado para resultados de bioimpedância do cliente
    const [bioimpedanceResults, setBioimpedanceResults] = useState({
        weight: '',
        bodyFat: '',
        muscleMass: '',
        visceralFat: '',
        waterPercentage: '',
        basalMetabolicRate: '',
    });

    // Estado para o histórico de bioimpedância
    const [bioimpedanceHistory, setBioimpedanceHistory] = useState(client?.bioimpedanceHistory || []);

    // Estado para cronômetros individuais dos treinos
    const [timers, setTimers] = useState({});
    const [completed, setCompleted] = useState({});

    // Estado para o cliente atual (atualiza se a lista de clientes mudar)
    const [currentClient, setCurrentClient] = useState(() =>
        clients.find((client) => client.id === parseInt(id))
    );

    // Estado para controle da exibição das opções
    const [showOptions, setShowOptions] = useState(false);
    const [showBioimpedance, setShowBioimpedance] = useState(false); // NOVO: controla exibição da caixa
    const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]); // Dia selecionado pelo usuário

    // Ref para caixa de opções
    const optionsRef = useRef(null);

    // Fecha caixa de opções ao clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        }
        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    // Atualiza o cliente atual quando a lista de clientes muda
    useEffect(() => {
        const updated = clients.find((c) => c.id === parseInt(id));
        setCurrentClient(updated);
    }, [clients, id]);

    // Função para iniciar o cronômetro de descanso de 45s para o treino de índice idx
    const startTimer = (workout) => {
        const key = getWorkoutKey(workout);
        if (timers[key]) return;
        setTimers((prev) => ({ ...prev, [key]: 60 }));
        const interval = setInterval(() => {
            setTimers((prev) => {
                if (prev[key] > 1) {
                    return { ...prev, [key]: prev[key] - 1 };
                } else {
                    clearInterval(interval);
                    setCompleted((c) => ({ ...c, [key]: true }));
                    return { ...prev, [key]: 0 };
                }
            });
        }, 1000);
    };

    // Atualiza os resultados de bioimpedância ao digitar
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBioimpedanceResults((prevResults) => ({
            ...prevResults,
            [name]: value,
        }));
    };

    // Salva os resultados de bioimpedância no cliente
    const handleSave = () => {
        const newExam = {
            ...bioimpedanceResults,
            date: new Date().toISOString(),
        };
        const updatedHistory = [
            newExam,
            ...(client.bioimpedanceHistory || [])
        ].slice(0, 3); // mantém só os 3 mais recentes

        const updatedClients = clients.map((c) =>
            c.id === client.id
                ? { ...c, bioimpedanceHistory: updatedHistory }
                : c
        );
        setClients(updatedClients);
        alert('Resultados de bioimpedância salvos com sucesso!');
    };

    // Marca treino como concluído e inicia descanso
    const handleCompleteWorkout = (workout) => {
        setCompletedWorkouts((prev) => [...prev, workout]);
        setTimeout(() => {
            alert('60 segundos de descanso concluídos!');
        }, 60000); // 60 segundos
    };

    // Adiciona treino ao cliente
    const handleAddWorkout = (workout) => {
        const workoutWithDay = { ...workout, day: selectedDay };
        const updatedClients = clients.map((c) =>
            c.id === client.id ? { ...c, workouts: [...c.workouts, workoutWithDay] } : c
        );
        setClients(updatedClients);
        setWorkouts([...workouts, workoutWithDay]);
        alert('Treino adicionado com sucesso!');
    };

    // Remove treino do cliente
    const handleRemoveWorkout = (workoutToRemove) => {
        const updatedWorkouts = client.workouts.filter(
            w =>
                !(w.name === workoutToRemove.name &&
                    w.day === workoutToRemove.day &&
                    w.category === workoutToRemove.category)
        );
        setClients(clients.map(c =>
            c.id === client.id ? { ...c, workouts: updatedWorkouts } : c
        ));
    };

    // Adiciona novo cliente (não utilizado nesta página)
    const handleAddClient = (e) => {
        e.preventDefault();
        const newClient = {
            id: Date.now(),
            name,
            email,
            password,
            createdAt: new Date().toISOString(),
            active: true,
            backgroundImage: '/src/assets/client-bg.jpeg'
        };
        setClients([...clients, newClient]);
    };

    // Se não encontrar o cliente, exibe mensagem
    if (!client) {
        return <h1>Client not found</h1>;
    }

    // BLOQUEIO DE ACESSO: se passou de 45 dias desde o cadastro, bloqueia
    if (client?.createdAt) {
        const days = Math.floor((Date.now() - new Date(client.createdAt)) / (1000 * 60 * 60 * 24));
        if (days > 45) {
            return (
                <div className="client-page">
                    <h1 style={{ color: 'red', textAlign: 'center' }}>
                        Acesso bloqueado! Procure o administrador para renovar seu contrato.
                    </h1>
                </div>
            );
        }
    }

    // Função para gerar uma chave única para cada treino (usada para identificação no estado)
    const getWorkoutKey = (workout) =>
        `${workout.name}-${workout.day}-${workout.category || ''}`;

    // Verifica se é dispositivo móvel
    const isMobile = window.innerWidth <= 600;

    // Renderização da página do cliente
    return (
        <div
            className="client-page"
            style={{
                backgroundImage: `url(${clientBg})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            {/* Botão de opções no canto superior direito */}
            <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 20 }}>
                <button
                    onClick={() => setShowOptions(!showOptions)}
                    style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        background: '#007bff',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Mais opções
                </button>
                {/* Caixa de opções */}
                {showOptions && (
                    <div
                        ref={optionsRef}
                        style={{
                            position: 'absolute',
                            top: 40,
                            right: 0,
                            background: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                            padding: '16px',
                            minWidth: '220px',
                            zIndex: 30
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <button
                                    style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                                    onClick={() => {
                                        setShowBioimpedance(true);
                                        setShowOptions(false);
                                    }}
                                >
                                    Bioimpedância
                                </button>
                            </li>
                            <li>
                                <button
                                    style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                                    onClick={() => navigate(`/client-profile/${client.id}`)}
                                >
                                    Foto Perfil
                                </button>
                            </li>
                            <li>
                                <button
                                    style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                                    onClick={() => navigate(`/client-data/${client.id}`)}
                                >
                                    Dados Particulares
                                </button>
                            </li>
                            <li>
                                <button
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        background: '#dc3545',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={() => navigate('/')}
                                >
                                    Sair do Login
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Saudação ao cliente */}
            <h1>Bom Treino!, {client.name}</h1>

            {/* Linha dos nomes dos dias da semana como botões, bem separados */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: isMobile ? '10px' : '32px',
                margin: '24px 0'
            }}>
                {daysOfWeek.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        style={{
                            background: selectedDay === day ? '#007bff' : '#e0e0e0',
                            color: selectedDay === day ? '#fff' : '#333',
                            border: 'none',
                            borderRadius: '6px',
                            padding: isMobile ? '4px 8px' : '8px 18px',
                            fontSize: isMobile ? '0.85rem' : '1.05rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                    >
                        {day.slice(0, 3)}
                    </button>
                ))}
            </div>

            {/* Resultados de bioimpedância - só aparece se showBioimpedance for true */}
            {showBioimpedance && (
                <div style={{
                    position: 'absolute', top: 80, right: 24, zIndex: 10, display: 'flex', gap: 16
                }}>
                    {(client.bioimpedanceHistory || []).map((exam, idx) => (
                        <div key={exam.date} className="card client-bioimpedance">
                            <h2>Exame {idx === 0 ? 'Mais Recente' : idx === 1 ? 'Anterior' : 'Primeiro'}</h2>
                            <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: 8 }}>
                                Data: {new Date(exam.date).toLocaleDateString()}
                            </div>
                            <ul>
                                <li>Peso: {exam.weight} kg</li>
                                <li>Gordura Corporal: {exam.bodyFat} %</li>
                                <li>Massa Muscular: {exam.muscleMass} kg</li>
                                <li>Gordura Visceral: {exam.visceralFat}</li>
                                <li>Água %: {exam.waterPercentage}</li>
                                <li>Idade Metabólica: {exam.basalMetabolicRate}</li>
                            </ul>
                        </div>
                    ))}
                    <button
                        style={{
                            height: 40, alignSelf: 'flex-start', marginLeft: 8,
                            padding: '6px 12px', background: '#007bff', color: '#fff',
                            border: 'none', borderRadius: '4px', cursor: 'pointer'
                        }}
                        onClick={() => setShowBioimpedance(false)}
                    >
                        Fechar
                    </button>
                </div>
            )}
            {/* Lista de treinos do cliente filtrados pelo dia selecionado */}
            <div className="card client-workouts">
                <h2>Seus Treinos</h2>
                {currentClient.workouts && currentClient.workouts.filter(w => w.day === selectedDay).length > 0 ? (
                    currentClient.workouts
                        .filter(w => w.day === selectedDay)
                        .map((workout) => {
                            const key = getWorkoutKey(workout);
                            return (
                                <div key={key} className="workout-item">
                                    <span className="workout-name">{workout.name}</span>
                                    {workout.description && (
                                        <div style={{ fontSize: '0.9rem', color: '#555', marginTop: 2, marginBottom: 2 }}>
                                            {workout.description}
                                        </div>
                                    )}
                                    <img
                                        className="workout-gif"
                                        src={workout.gif}
                                        alt={workout.name}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            marginLeft: 8
                                        }}
                                    />
                                    <button
                                        onClick={() => startTimer(workout)}
                                        disabled={timers[key] > 0 || completed[key]}
                                        style={{
                                            marginLeft: 8,
                                            padding: isMobile ? '8px 3px' : '14px 12px', // <-- mais alto
                                            fontSize: isMobile ? '0.65rem' : '0.85rem',
                                            minWidth: isMobile ? 50 : 110,
                                            background: completed[key]
                                                ? '#dc3545'
                                                : timers[key] > 0
                                                ? '#ccc'
                                                : '#28a745',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor:
                                                timers[key] > 0 || completed[key]
                                                    ? 'not-allowed'
                                                    : 'pointer',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        {completed[key]
                                            ? 'concluído'
                                            : timers[key] > 0
                                            ? 'Em descanso...'
                                            : 'concluir'}
                                    </button>
                                    {timers[key] > 0 && (
                                        <span style={{ marginLeft: 8, color: '#28a745', fontWeight: 'bold' }}>
                                            {timers[key]}s
                                        </span>
                                    )}
                                </div>
                            );
                        })
                ) : (
                    <p>Nenhum treino registrado para este dia.</p>
                )}
            </div>
        </div>
    );
};

export default ClientPage;