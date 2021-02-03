import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios'


//Crear el context

export const ModalContext = createContext();


 
const ModalProvider = (props) =>{

    //State del Provider

    const [idreceta,guardarIdRecetas] = useState(null);
    const [informacion,guardarReceta] = useState({

    })

    //Una vez que tenemos una receta,llamar Api

    useEffect(() => {
        const ObtenerReceta = async()=>{
            if(!idreceta)return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await axios.get(url)
            guardarReceta(resultado.data.drinks[0])
        }
        ObtenerReceta()
    }, [idreceta])

    return(
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdRecetas,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider