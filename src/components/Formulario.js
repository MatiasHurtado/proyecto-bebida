import React,{useContext,useState} from 'react';
import{CategoriasContext} from '../context/CategoriaContext'
import {RecetasContext}from '../context/RecetasContext'




const Formulario = () => {

    const[busqueda,guardarBusqueda]=useState({
        nombre:'',
        categoria:''
    })

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas,guardarConsulta}=useContext(RecetasContext)
    //funcion para leer los contenidos
    const obtenerDatosRecetas = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value

        })
    }

    return ( 
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda)
                guardarConsulta(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas Por categoria o ingredientes</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="buscar Por Ingredientes"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosRecetas}

                    >
                        <option value="">--Selecciona Categoria-- </option>
                        {categorias.map(categoria =>(
                            <option key={categoria.strCategory}
                                    value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"      
                        className="btn btn-block btn-primary"
                        value="Buscar Bebida"              
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;