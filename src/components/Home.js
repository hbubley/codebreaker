import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="display-number">
                <p>CODE BREAKER</p>
            </div>
            <div className="game-container">
                <Link to="/game">
                    <button className="start-button">Start Game</button>
                </Link>
                <button
                    className="start-button"
                    // onClick={}
                >
                    Rules
                </button>
                <button
                    className="start-button"
                    // onClick={() => setStartGame(true)}
                >
                    Leaderboard
                </button>
            </div>
        </div>
    );
};

export default Home;
