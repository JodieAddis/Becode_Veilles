import { useState } from "react";

export const Message = () => {
    const [message, setMessage] = useState("");
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
            />
            <p>{message}</p>
        </>
    );
};
