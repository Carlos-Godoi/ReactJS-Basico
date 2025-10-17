// Módulo React
import React from 'react';

// Módulo 'ReactRoot' de 'react-dom/cliente'
import ReactDOM from 'react-dom/client';

// Componente
class MeuComponente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {texto: this.props.textoInicial};
    }

    // Função
    minhaFuncao = (elemento) =>{
        this.setState({texto : elemento.target.value});
    }


    // Render
    render(){
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <input type='text' onChange={this.minhaFuncao} placeholder='Digite algo...'/>

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
        <MeuComponente textoInicial='Digite algo...'/>
    </React.StrictMode>
);