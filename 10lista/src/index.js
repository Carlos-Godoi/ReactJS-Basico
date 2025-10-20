// Importar módulo REACT
import React from 'react';

// Importar ReactRoot de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Importar arquivo CSS
import './estilos.css';

// Componente
class Componente extends React.Component {

    render() {

        // Vetor
        let cores = ['Verde', 'Branco', 'Laranja'];

        // Lista
        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
        });

        // Estilo
        const estilo = {
            color : 'blue',
            borderBottom: 'solid 5px green'
        }

        // Retorno
        return (
            
            <ul>
                {listar}

                <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS interno (inline)</h1> 

                <h1 style={estilo}>CSS através de variáveis e constantes</h1>

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