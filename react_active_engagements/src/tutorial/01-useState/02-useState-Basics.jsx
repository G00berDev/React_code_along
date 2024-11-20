import React from "react";
import { useState } from "react";

const UseStateBasics = () => {

    const [text, setText] = useState("random text");

    const handleClick = () => {
        if (text === "random text") {
            setText("Hello World!");
        } else {
            setText("random text");
        }
    };

return (
<>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
        Change title
    </button>
    </>
);
};

export default UseStateBasics;
