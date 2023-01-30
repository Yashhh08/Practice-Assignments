import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = (props)=>{

    const [counter,setCounter] = useState(props.start);

    useEffect(()=>{

        const id = setInterval(()=>{

            if(counter===props.end)
            {
                clearInterval(id);
                // setCounter(0);
                return;
            }

            setCounter(counter+1);
    
        },1000)

        return ()=>{
            clearInterval(id);
        }

    },[counter,props.end])

    useEffect(()=>{
        setCounter(props.start);
    },[props.start])
    
    return(
        <div>

            <h2>{counter}</h2>

        </div>
    )

}

export default Timer;