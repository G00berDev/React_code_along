import { useState, useEffect } from "react";

const url = "http://api.github.com/users/G00berDev";

const MultipleReturns = () => {
    const [user, setUser] = useState('default-user');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchUser = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const data = await resp.json();
                setUser(data.login);
                setIsLoading(false);
            } else {
                throw new Error(resp.statusText);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []); // Empty dependency array to ensure it only runs once on mount

    if (isLoading) {
        return (
            <div style={styles.centered}>
                <h2 style={styles.loading}>🚀 Loading your data...</h2>
            </div>
        );
    }

    if (isError) {
        return (
            <div style={styles.centered}>
                <h2 style={styles.error}>❌ Oops! Something went wrong.</h2>
                <button style={styles.button} onClick={fetchUser}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div style={styles.centered}>
            <h2 style={styles.welcome}>🎉 Welcome, <span style={styles.user}>{user}</span>!</h2>
        </div>
    );
};

const styles = {
    centered: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    },
    loading: {
        fontSize: "1.5rem",
        color: "#007bff",
    },
    error: {
        fontSize: "1.5rem",
        color: "#dc3545",
    },
    welcome: {
        fontSize: "1.8rem",
        color: "#28a745",
    },
    user: {
        fontWeight: "bold",
        color: "#0056b3",
    },
    button: {
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default MultipleReturns;
