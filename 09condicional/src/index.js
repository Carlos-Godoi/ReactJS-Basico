// Import módulo React
import React from 'react';

// Import 'ReactRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state={exibir : false};
    }

    // Função
    alterarState = () => {
        let converter = !this.state.exibir;
        this.setState({exibir : converter});
    }

    // Render
    render(){

        // Condicional
        let meuTexto = '';

        if(this.state.exibir == true){
            meuTexto = <h1>Olá!!! Utilizando condicionais</h1>
        }else{
            meuTexto = '';
        }

        // Retorno
        return(
            <div>
                {meuTexto}
                <button onClick={this.alterarState}>Clique aqui</button>
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
        <Componente />
    </React.StrictMode>
)