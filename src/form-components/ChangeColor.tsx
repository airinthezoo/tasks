import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "cyan",
        "magenta"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={`color-${color}`}
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                    <label htmlFor={`color-${color}`}>{color}</label>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor === "yellow" ? "black" : "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
