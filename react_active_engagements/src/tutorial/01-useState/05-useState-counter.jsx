import { useState } from "react";
import React from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const reset = () => {
        setValue(0)
    }
    const complexIncrease = () => {
        setTimeout(()=>{
        setValue(prevState)
        return prevState
    }, 2000)
}
    return(
        <div>
            <section style={{margin: "4rem 0"}}>
                <h2>regular UseStateCounter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={()=> setValue(value-1)}>Decrease</button>
                <button className="btn" onClick={()=> setValue(value+1)}> increaser</button>
            </section>
            <section>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={complexIncrease}>increase later</button>
            </section>
        </div>
    )
}

export default UseStateCounter;