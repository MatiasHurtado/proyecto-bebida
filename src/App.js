import React,{Fragment} from 'react';
import Headers from './components/Headers'
import Formulario from './components/Formulario'
import ListaRecetas from './components/ListaRecetas'
import CategoriasProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
        <Headers/>
        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
          <ListaRecetas/>
        </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
