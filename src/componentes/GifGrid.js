import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const {data:imagenes, loading }= useFetchGifs(categoria);

    // useEffect(() => {
    //     getGifs( categoria )
    //         .then( gifimgs => setImagenes( gifimgs)) ;
    //     }, [categoria])

  
    
    return (
        <>
            <h3>{ categoria }</h3>
            {loading && <p className="card animate__animated animate__flash">Cargando..</p>}
            <div className="card-grid">
                    {imagenes.map ( img =>{
                        return(
                            <GifGridItem 
                                key={img.id}
                                { ...img }  ///se esta forma devuelvo com propiedades independientes los atributos de img y el el otro compotenen las pbtrenfo con desestructuracion
                            />
                        )
                    })}

            </div>
        </>
    )
}
