import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifts';


export const useFetchGifs = (categoria) => {

    const [estado, setEstado] = useState({
        data:[],
        loading:true

    });

    useEffect(() => {
        getGifs( categoria )
            .then( imgs => {
                setTimeout(() => {
                    setEstado({
                        data:imgs,
                        loading:false
                    });
                }, 3000);
            });
    },[categoria]);

    return estado;

}