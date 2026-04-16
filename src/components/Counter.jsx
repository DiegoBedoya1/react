import {useState} from "react";
const Counter = () => {
    const [value,setValue] = useState(0);
    return(
        <div>
            <p> el contador esta en {value}</p>
            <button onClick = {() => setValue(value+1)}> Incrementar</button>
            <button onClick = {() => setValue(value-1)}>Decrementar</button>
        </div>
    )
} 

export default Counter;