import { filter, sumBy } from "lodash";
import React from "react";
import GameButton from "./GameButton";
const GameDisplay = ({
    gameState: { score, userInputArray, correctIndicesArray },
    gameArray,
    getUserInput,
    solutionIndices,
    isGameOver,
    startGame,
    onStartGame,
}) => {
    return (
        <div>
            <div>
                <p className={"display-number"}>Current Round: {score}</p>
            </div>
            <div className={"game-container"}>
                <p className={"display-number"}>
                    {startGame
                        ? "Ready?"
                        : sumBy(solutionIndices, (si) => {
                              return gameArray[si];
                          })}
                </p>
                {!isGameOver ? (
                    <div className={"display-buttons"}>
                        {startGame ? (
                            <button
                                onClick={onStartGame}
                                className="start-button"
                            >
                                Start
                            </button>
                        ) : (
                            gameArray.map((num, index) => (
                                <GameButton
                                    key={index}
                                    num={num}
                                    onChange={() => getUserInput(index)}
                                    correct={
                                        filter(
                                            correctIndicesArray,
                                            (s) => s === index
                                        ).length
                                    }
                                    disabled={
                                        filter(
                                            userInputArray,
                                            (i) => i === index
                                        ).length
                                    }
                                />
                            ))
                        )}
                    </div>
                ) : (
                    <div>
                        <p>GAME OVER</p>
                        <button onClick={onStartGame}>play again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDisplay;
