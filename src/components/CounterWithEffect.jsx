import {useState, useEffect} from "react";
const CounterWithEffect = () => {
    const [counter,setCounter] = useState(0);
    useEffect(() => {
        console.log("el contador cambio a",counter);
    }, [counter]);
    return(
        <div>
            <p> el contador esta en {counter}</p>
            <button onClick = {() => setCounter(counter+1)}> Incrementar</button>
        </div>
    )
};

export default CounterWithEffect;