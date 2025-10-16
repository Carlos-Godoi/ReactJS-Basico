// Importar módulos
import React from 'react';

// 1. Importar 'createRoot' de 'react-dom/client'
import ReactDOM from 'react-dom/client';

// 2. Componente
class MeuComponente extends React.Component{
    render(){
        return <h1>Meu primeiro componente</h1>;
    }
}

// 3. Criar a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// 4. Rederizar com a root
root.render(
    <React.StrictMode>
        <MeuComponente />         
    </React.StrictMode>
);