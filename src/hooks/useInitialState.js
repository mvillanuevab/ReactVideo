import { useEffect, useState } from 'react';

const useInitialState = (API) => {
  //manejando el estado con hooks useState
  const [videos, setVideos] = useState([]);
  //nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
  //Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen.
  //En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.
  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
