// Importar módulos
import React from 'react';

// Importar 'createRoot' de 'react-dom/client'
import ReactDOM from 'react-dom/client';

// Importar componentes
import Componente01 from './Componente01';
import Componente02 from './Componente02';
import Componente03 from './Componente03';

// Componentes do arquivo index.js
class Principal extends React.Component {
    render() {
        return (
            <div>
                <Componente01 />
                <Componente02 />
                <Componente03 />
            </div>
        );
    }
}

// Criando a raiz (root)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// Rederizar com a root
root.render(
    <React.StrictMode>
        <Principal />       
    </React.StrictMode>
);