import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const useAttempt = () => setAttemptsLeft((prev) => Math.max(0, prev - 1));
    const gainAttempts = () => {
        const numericValue = parseInt(requestedAttempts, 10);
        if (!isNaN(numericValue)) {
            setAttemptsLeft((prev) => prev + numericValue);
        }
    };

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
                role="spinbutton"
            />
            <button disabled={attemptsLeft === 0} onClick={useAttempt}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
