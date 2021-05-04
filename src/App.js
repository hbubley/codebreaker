import { useState } from "react";
import "./App.css";

function App() {
    const [alert, setAlert] = useState(null);

    const randomNumberGenerator = (range) => {
        return Math.floor(Math.random() * (1 + range));
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
    
    const solutionIndices = fillArray(3, 5);

    const randomNumberArray = fillArray(6, 10);

    const displayNumber = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + randomNumberArray[currentValue];

        return solutionIndices.reduce(reducer);
    };
    const checkInput = (userInput) => {
        if (!userInput.length) {
            setAlert("That's not enough for me to work with!");
        } else {
            userInput.map(
                (input) =>
                    solutionIndices.find(
                        (sNum) => randomNumberArray[sNum] === input
                    ) && console.log("Got one!", input)
            );
        }
    };
    checkInput([0, 2, 4]);
    return (
        <div className="App">
            <span>{displayNumber()}</span>
        </div>
    );
}

export default App;
