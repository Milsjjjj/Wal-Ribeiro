// Importa o React para criar o componente de bioimpedância
import React from 'react';

// Componente principal que exibe informações sobre o teste de bioimpedância
const Bioimpedance = () => {
    return (
        <div className="bioimpedance">
            {/* Título da página */}
            <h1 className="bioimpedance-title">Bioimpedance Testing</h1>
            {/* Descrição sobre o teste de bioimpedância */}
            <p>
                Bioimpedance testing is a non-invasive method used to assess body composition, including fat mass, muscle mass, and hydration levels. Our state-of-the-art technology provides accurate and reliable results to help you understand your body better.
            </p>
            {/* Seção explicando como funciona */}
            <h2>How It Works</h2>
            <p>
                During the test, a small electrical current is passed through the body. The resistance to this current is measured, which helps in estimating the different components of body composition. The process is quick, painless, and provides immediate feedback.
            </p>
            {/* Benefícios do teste de bioimpedância */}
            <h2>Benefits of Bioimpedance Testing</h2>
            <ul>
                <li>Accurate body composition analysis</li>
                <li>Track changes over time</li>
                <li>Personalized fitness and nutrition recommendations</li>
            </ul>
            {/* Chamada para ação */}
            <h2>Get Started</h2>
            <p>
                Schedule your bioimpedance test today and take the first step towards a healthier you!
            </p>
        </div>
    );
};

// Exporta o componente para uso em outras partes do projeto
export default Bioimpedance;