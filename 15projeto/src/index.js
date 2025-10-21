// Módulo React
import React from 'react';

// Módulo 'ReactRoot' de 'create-dom/cliente'
import ReactDOM from 'react-dom/client';

// Importar CSS
import './estilos.css'; 

// Importar fomulário
import Formulario from './formulario';

// Importar tabela
import Tabela from './tabela';

// Componente
class Principal extends React.Component{
    
    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : '',
            vetor : []
        }
    }


    // Função ao digitar (onChange)
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }


    // Função clique (onSubmit)
    aoClicar = (botao) => {
        botao.preventDefault();
        
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        });

        this.setState({vetor : copiaVetor});

        // Limpar campos do formulário
        this.setState({
            nome : '',
            idade : ''
        });
    }


    // Render
    render(){
        return(
            <div>
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade}  funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Tabela dados={this.state.vetor} />
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
        <Principal />
    </React.StrictMode>
);