import React, {useState} from 'react';
import AddCategoria from './componentes/AddCategoria';
import { GifGrid } from './componentes/GifGrid';




const GifExpertApp=()=>{
        //const categorias=['One Punch','Samuari X', 'Dragon Ball']
        const [categorias, setCategorias] = useState(['Dragon Ball']);///useState(['One Punch','Samuari X', 'Dragon Ball']);

        // const handleAgregar =()=>{
        //     ///categ es el valor anteririo que tiene el state
        //     setCategorias(categ =>
        //         [...categ,'Mazinger Z']
        //     );
        // }
        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategoria  setCategorias={ setCategorias } />
                <hr/>
                
                <ol>
                    { categorias.map( categoria =>{
                        return (
                            <GifGrid 
                                key={ categoria }
                                categoria= {categoria}
                            />
                        )
                    })}
                </ol>
            </>
        )
}

export default GifExpertApp;