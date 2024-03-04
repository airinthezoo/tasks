import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    // Directly initialize both dice to the same static value, ensuring no random calls on initial render.
    const [leftDie, setLeftDie] = useState(2); // Static initialization
    const [rightDie, setRightDie] = useState(3); // Static initialization

    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    const message = () => {
        if (leftDie === 1 && rightDie === 1) return "Lose";
        else if (leftDie === rightDie) return "Win";
        return "";
    };

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            <div>{message()}</div>
        </div>
    );
}
