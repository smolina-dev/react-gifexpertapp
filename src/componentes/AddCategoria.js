import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function AddCategoria({setCategorias}) {
    const [valorInput, setValorInicial] = useState('')

    const handleInputvalue = ( e ) => {
        setValorInicial(e.target.value);
    }
    
    const handleSubmit= (e) => {
        //para evitar el refresh de la pagina
        e.preventDefault();

        if (valorInput.trim().length > 2 ){
            setCategorias(categ =>
                        [valorInput,...categ]
            );
            setValorInicial('');
            }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ valorInput }
                    onChange={ handleInputvalue }
                />
            </form>
        </>
    )
}


AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}