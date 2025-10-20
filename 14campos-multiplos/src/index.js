// Importa módulo React
import React from 'react';

// Módulo 'ReactRoot' de 'create-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : null
        }
    }

    // Função - Nome
    funcaoNome = (campo) => {
        this.setState({nome : campo.target.value});
    }

    // Função - Idade
    funcaoIdade = (campo) => {
        this.setState({idade : campo.target.value});
    }

    // Render
    render(){

        // Retornar
        return(
            <form>
                <input type='text' placeholder='Nome' onChange={this.funcaoNome}/>
                <input type='number' placeholder='Idade' onChange={this.funcaoIdade}/> 

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>

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