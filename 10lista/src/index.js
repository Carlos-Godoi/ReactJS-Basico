// Importar módulo REACT
import React from 'react';

// Importar ReactRoot de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component {

    render() {

        // Vetor
        let cores = ['Verde', 'Branco', 'Laranja'];

        // Lista
        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
        });



        // Retorno
        return (
            <ul>
                {listar}
            </ul>
        );

    }
}

// Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// Rederizar com a root
root.render(
    <React.StrictMode>
        <Componente />
    </React.StrictMode >
);