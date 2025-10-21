// Módulo React
import React from 'react';

// Componente
class Tabela extends React.Component{

    // Render
    render(){

        return(
            <table className='table' >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>

                <tbody></tbody>
            </table>
        );
    }
}


// Exportar
export default Tabela;