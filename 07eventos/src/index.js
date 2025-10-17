// Importar o módulo React
import React from 'react';

// Importar o 'CreateRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class MeuComponente extends React.Component{

    // Função
    mensagem(){
        alert('Olá Mundo!');
    }

    render(){
        return <button onClick={this.mensagem}>Clique aqui</button>;
    }
}

// Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// Rederizar com a root
root.render(
    <React.StrictMode>
        <MeuComponente />
    </React.StrictMode>
);

