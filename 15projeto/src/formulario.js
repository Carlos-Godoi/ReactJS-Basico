// Módulo React
import React from 'react';

// Componente
class Formulario extends React.Component{


    // Render
    render(){

        return(
            <form onSubmit={this.props.funcaoBotao} >
                <input type='text' placeholder='Informe o nome' className='form-control' name='nome' onChange={this.props.funcaoCampo} />
                <input type='number' placeholder='Informe a idade' className='form-control' name='idade' onChange={this.props.funcaoCampo} />
                <input type='submit' value='Cadastrar' className='btn btn-primary' />
            </form>
        );
    }
}

// Exportar formulário
export default Formulario;