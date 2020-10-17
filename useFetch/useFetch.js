import { useEffect, useRef, useState } from "react"

//el parametro inicial que se ingresará al hook es url
export const useFetch = ( url ) => {
  
    //se coloca es useRef por el simple hecho de que cuándo le doy en el botón sigue seteando y ejecutando el 
    //setState
    const isMounted = useRef(true)
//se renderiza la primera vez
//Mantenga la referencia cuándo el hook está vivo o está montado
//Referencia al valor




    //la data empieza en null porque no hay ningún dato aún de la API
const [state, setstate] = useState({ data:null, loading:true, error: null})


//Qué haga este efecto por primera vez, solo se dispara cuándo se desmonte
useEffect(() => {
    
    return () => {
        isMounted.current=false
        //esto es falso y está desmontado, por eso se referencia en falso
    }
}, [])

//El efecto se ejecutará cuándo el url cambie
useEffect(() => {

//iniciamos con valores nulos
    setstate({ data:null, loading:true, error: null})
    //es un fetch devuelve una promesa por eso hace el then
    fetch(url)
    .then(resp=>resp.json()
    )
    .then(data=>{
       // setTimeout(()=>{
            //esto es true
            if(isMounted.current){
                setstate({
                    data,
                    loading:false,
                    error:null,
                })
            }
           /*  else{
                console.log(`No se llamó setState`);
            } */

            

       // },4000)//
       
    })
    .catch(()=>{
        setstate({
            data:null,
            loading:false,
            error:'No se pudo cargar la info'
        })

    })
  
  
}, [url])

return state;


}
