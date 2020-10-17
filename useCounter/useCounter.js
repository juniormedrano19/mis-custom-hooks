import { useState } from "react"


//Cambiar palabras en una sola vez fn+ f2

export const useCounter = (initializeValue=100) => {
   
    const [ counter, setCounter ]=useState(initializeValue);

    const increment=()=>{
        setCounter( counter + 1);
    }

    const decrement=()=>{
        setCounter( counter - 1 );
    }

    const reset=()=>{
        setCounter(initializeValue);
    }

    return{

        counter,
        increment,
        decrement,
        reset,


        //state:state, increment:increment



    }


}
