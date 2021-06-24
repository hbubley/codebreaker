import React from "react";

const GameButton = ({ index, num, onChange, correct, disabled }) => {
    console.log(
        "🚀 ~ file: GameButton.js ~ line 4 ~ GameButton ~ correct",
        correct
    );
    return (
        <button
            className={"game-button"}
            disabled={disabled}
            onClick={() => onChange(index)}
            style={correct ? { backgroundColor: "green" } : {}}
        >
            <p>{num}</p>
        </button>
    );
};

export default GameButton;
