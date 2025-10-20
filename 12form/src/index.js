// Importar módulo REACT
import React from 'react';

// Importar 'CreateRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component{

    // Função
    minhaFuncao = () => {
        alert ('Testando evento onSubmit');
    }

    // Render
    render(){
        return (
           <form onSubmit={this.minhaFuncao}>
             <input type='submit' />
           </form>
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
    </React.StrictMode>
);