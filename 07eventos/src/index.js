// Importar o módulo React
import React from 'react';

// Importar o 'CreateRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class MeuComponente extends React.Component {

    // Função
    mensagem(nome) {
        alert('Olá ' + nome);
        console.log(this);
    }

    // ArrowFunction
    minhaArrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso);
    }

    render() {
        return(
        <div>
            <button onClick={this.mensagem.bind(this, 'Carlos')}>Clique aqui</button>
            <button onClick={() => this.minhaArrowFunction('ReactJS')}>Arrow Function</button>
        </div>
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
        <MeuComponente />
    </React.StrictMode>
);

