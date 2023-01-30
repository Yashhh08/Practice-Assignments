import react, {useState} from "react";

const Counter = ()=>{

    const [counter,setCounter] = useState(0);

    const changeValue = (value)=>{

        if(counter===0 && value === -1)
        {
            return;
        }

        setCounter(counter+value);
    }

    const doubleValue = ()=>{
        setCounter(counter*2);
    }

    const counterStyle = {
        color : counter%2===0 ? "green" : "red"
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2 style={counterStyle}>{counter}</h2>

            <button onClick={()=>changeValue(1)}>Increase</button>
            <button onClick={()=>changeValue(-1)}>Decrease</button>
            <button onClick={()=>doubleValue()}>Double</button>


        </div>
    )

}

export default Counter;