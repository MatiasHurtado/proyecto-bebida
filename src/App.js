import React,{Fragment} from 'react';
import Headers from './components/Headers'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Headers/>
        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
