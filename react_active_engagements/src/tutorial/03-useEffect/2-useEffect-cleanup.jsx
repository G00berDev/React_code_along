import { useState, useEffect } from "react";

const useEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("useEffect")
        window.addEventListener('resize', checkSize)
        return () => {
            console.log("useEffect cleanup")
            window.removeEventListener('resize', checkSize)
        }
    }, )
    console.log("render component")
    return (
        <>
        <h1>window size</h1>
        <h2>{size} PX</h2>
        </>
    )
}

export default useEffectCleanUp;