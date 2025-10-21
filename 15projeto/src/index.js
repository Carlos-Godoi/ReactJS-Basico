// Módulo React
import React from 'react';

// Módulo 'ReactRoot' de 'create-dom/cliente'
import ReactDOM from 'react-dom/client';


// Importar CSS
import './estilos.css'; 


// Importar o componente principal
import Principal from './Principal';


// Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);


// Rederizar com a root
root.render(
    <React.StrictMode>
        <Principal />
    </React.StrictMode>
);