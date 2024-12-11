import { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show && <Item />}
        </>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", checkSize);
        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div
            style={{
                width: size / 2,
                height: size / 2,
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
            }}
        >
            <p>Width: {size}px</p>
        </div>
    );
};

export default ShowHide;
