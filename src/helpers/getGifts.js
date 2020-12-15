
  export const getGifs = async ( categoria )=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=uklE2FiTylS0Zo6DNH8ySWP7YEjN4fJU`;
    const resp= await fetch(url);
    const { data } = await resp.json();

    //guardo los datos que necesito
    const gifs= data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  //el signo de pregunta es para que cargue le dato si es distinto a vaciko
        }
    });

    return gifs;
}