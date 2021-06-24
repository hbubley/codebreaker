/* eslint-disable react-hooks/exhaustive-deps */
import { filter, find, findIndex, includes, sumBy } from "lodash";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import "../App.css";
import GameDisplay from "./GameDisplay";
import { Route, Switch } from "react-router-dom";
const Main = () => {
    const [alert, setAlert] = useState(null);
    const [startGame, setStartGame] = useState(true);
    const [gameState, setGameState] = useState({
        userInputArray: [],
        correctIndicesArray: [],
        score: 0,
    });
    const [loading, setLoading] = useState(true);
    const [solutionIndices, setSolutionIndices] = useState([]);
    const [gameArray, setGameArray] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const randomNumberGenerator = (range) => {
        return Math.floor(Math.random() * (1 + range));
    };

    const onStartGame = () => {
        setStartGame(false);
        setIsGameOver(false);
        setGameState({
            userInputArray: [],
            correctIndicesArray: [],
            score: 0,
        });
        beginRound();
    };

    const fillArray = (length, range) => {
        const randomNumberArray = [];
        while (randomNumberArray.length < length) {
            let randomNumber = randomNumberGenerator(range);
            if (
                !randomNumberArray.filter((rNum) => rNum === randomNumber)
                    .length
            ) {
                randomNumberArray.push(randomNumber);
            }
        }
        return randomNumberArray;
    };

    const beginRound = () => {
        const solutions = fillArray(3, 5);
        const randomNumbers = fillArray(6, 10);
        setSolutionIndices(solutions);
        setGameArray(randomNumbers);
        setLoading(false);
    };
    const winRound = () => {
        setGameState({
            userInputArray: [],
            correctIndicesArray: [],
            score: gameState.score + 1,
        });
        beginRound();
    };
    const loseRound = () => {
        setIsGameOver(true);
    };

    const getUserInput = (index) => {
        if (filter(solutionIndices, (i) => i === index).length) {
            setGameState({
                ...gameState,
                correctIndicesArray: [...gameState.correctIndicesArray, index],
                userInputArray: [...gameState.userInputArray, index],
            });
        } else {
            setGameState({
                ...gameState,
                userInputArray: [...gameState.userInputArray, index],
            });
        }
    };

    useEffect(() => {
        if (gameState.correctIndicesArray.length === 3) {
            winRound();
        } else if (
            gameState.correctIndicesArray.length !== 3 &&
            gameState.userInputArray.length === 4
        ) {
            loseRound();
        }
    }, [gameState]);

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/game">
                    <GameDisplay
                        gameArray={gameArray}
                        solutionIndices={solutionIndices}
                        gameState={gameState}
                        getUserInput={getUserInput}
                        isGameOver={isGameOver}
                        startGame={startGame}
                        onStartGame={onStartGame}
                    />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
