// Módulo React
import React from 'react';

// Módulo 'ReactRoot' de 'create-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Principal extends React.Component{
    

    // Render
    render(){

        return(
            <div>
                <h1>Iniciando o projeto final</h1>
            </div>
        )
    }
}

// Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// Rederizar com a root
root.render(
    <React.StrictMode>
        <Principal />
    </React.StrictMode>
)