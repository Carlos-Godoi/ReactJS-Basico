// Importar módulos
import React from 'react';

// 1. Importar 'createRoot' de 'react-dom/client'
import ReactDOM from 'react-dom/client';

// 2. Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// 3. Renderizar com a root
root.render(
    
    // O <React.StrictMode> é opcional, mas recomendado para detectar problemas.
    <React.StrictMode>
        <h1>Meu primeiro render</h1>
    </React.StrictMode>
);