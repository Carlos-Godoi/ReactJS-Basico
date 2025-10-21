// Módulo React
import React from 'react';

// Importar fomulário
import Formulario from './Formulario';

// Importar tabela
import Tabela from './Tabela';

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
        
        // Novo registro
        const novoRegistro = {
            'nome' : this.state.nome,
            'idade' : this.state.idade
        };

        // CORREÇÃO: Unificar as duas chamadas setState em uma única transação
        // Usamos prevState para garantir que estamos trabalhando com o vetor mais atualizado
        this.setState(prevState => ({
            // Adiciona o novo registro ao vetor existente
            vetor: [...prevState.vetor, novoRegistro],
            
            // Limpar campos do formulário (incluído na mesma chamada)
            nome : '',
            idade : ''
        }));
    }


    // Render
    render(){
        return(
            <div>
                <h1>Olá gente querida!</h1>
                <Formulario 
                    campoNome={this.state.nome} 
                    campoIdade={this.state.idade} 
                    funcaoBotao={this.aoClicar} 
                    funcaoCampo={this.aoDigitar}
                />
                <Tabela dados={this.state.vetor} />
            </div>
        );
    }
}

// Exportar componente
export default Principal;