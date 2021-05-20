/*NOTA: Como este elemento no va a usar nada de JSX no es necesario ponerle esa extensión*/

import { useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]) /*creación de dos constantes que van a ser utilizadas por las funciones de abajo*/

    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

    return videos
}

export default useInitialState