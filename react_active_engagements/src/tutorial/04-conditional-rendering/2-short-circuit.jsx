import { useState } from "react";

const ShortCircuit = () => {
    const [text, setText] = useState("");
    const [isError, setIsError] = useState(false);
    const firstValue = text || "Hello World!"
    const secondValue = text && "Hello World!"

    return (
        <>
        <h1>{firstValue}</h1>
        <h1>Value: {secondValue}</h1>
        
            <h1>{text || "John Doe"}</h1>
            <button
                className="btn"
                onClick={() => setIsError(!isError)}
            >
                Toggle Error
            </button>
            {isError && <h2 style={{ color: "red" }}>An error occurred!</h2>}
            {isError ? (
                <p>There is an error, please help</p>
            ) : (
                <div>
                    <h2>There is no error</h2>
                </div>
            )}
            <button className="btn" onClick={()=>setText}>Change me</button>

        </>
    );
};

export default ShortCircuit;
