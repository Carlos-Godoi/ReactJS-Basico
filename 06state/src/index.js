// Importar o módulo React
import React from 'react';

// Importar 'createRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component{
    
    // Construtor ( Construtor é a primeira funcionalidade que um componente executa)
    constructor(props){
        super(props);

        this.state = {nome:"Carlos"};
    }

    // Render
    render(){
        return <h1>{this.state.nome}</h1>
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
)