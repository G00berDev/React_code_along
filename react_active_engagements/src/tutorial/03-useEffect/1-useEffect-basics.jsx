import { useState, useEffect } from "react";

const useEffectBasics = () =>{
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log("calle USE_EFFECT")
        if (value > 0){
            document.title = `new message ${value}`
        }
    }, )
        console.log("Rendering Component")
    return(
        <>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>{setValue(value+1)}}>click me</button>
        </>
    )
}

export default useEffectBasics;