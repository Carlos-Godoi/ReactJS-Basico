// Importar o módulo React
import React from 'react';

// Importar 'createRoot' de 'react-dom/client'
import ReactDOM from 'react-dom/client'

// Componetes
class Componente extends React.Component {
    render () {
        return (
            <div>
                <p>Nome: {this.props.informacoes.nome}</p>
                <p>Idade: {this.props.informacoes.idade} anos</p>
            </div>
        )
    }
}

// Criando JSON
var dados = {nome:"Carlos Tadeu Godoi Filho", idade:46};



// Criar a raiz (root)
const root = ReactDOM.createRoot (
    document.getElementById('root')
);

// Rederizar com a root
root.render (
    <React.StrictMode>
        <Componente informacoes={dados} />
    </React.StrictMode>
);