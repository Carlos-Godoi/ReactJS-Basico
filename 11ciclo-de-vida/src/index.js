// Importar módulo REACT
import React from 'react';

// Importar 'ReactRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {cor : 'azul'};
    }

    // Depois de realizar o render
    componentDidMount(){
        setTimeout(() => {
            this.setState({cor : 'vermelho'});
        }, 2000);
    }

    // Render
    render(){
        return <h1>Minha cor preferida é {this.state.cor}</h1>
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
    </React.StrictMode>
);