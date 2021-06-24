import React, { useState } from "react";
import "./App.css";
import { find } from "lodash";
import GameButton from "./components/GameButton";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

export default App;
