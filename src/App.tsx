import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Settings } from "./Settings/Settings";
import { Counter } from "./Counter/Counter";
import styled from "styled-components";

function App() {
    let [maxValue, setMaxValue] = useState<number>(0);
    let [minValue, setMinValue] = useState<number>(0);
    let [number, setNumber] = useState<number>(0);
    let [error, setError] = useState<string>("");

    useEffect(() => {
        let numberToString = localStorage.getItem("numberValue");
        if (numberToString) {
            let newNumber = JSON.parse(numberToString);
            setNumber(newNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("numberValue", JSON.stringify(number));
    }, [number]);

    const addNumber = (maxValue: number, minValue: number) => {
        
        // setMaxValue(0);
        //     setMinValue(0);
        //     setNumber(0);
        if (maxValue === 0 && minValue === 0) {
            setError("enter values and press 'set'");
            setNumber(0)
        } else if (maxValue < minValue || minValue <= -1 || maxValue <= -1 || maxValue === minValue) {
            setError("incorrect value!");
            setNumber(0)
        } else {
            setMaxValue(maxValue);
            setMinValue(minValue);
            setNumber(minValue);
            setError("")
        }
    };

    const incNumberHandler = () => {
        if (number < maxValue) {
            setNumber(number + 1);
        }
    };

    const resetNumberHandler = () => {
        setNumber(minValue);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="Wrapper">
                    <span className="Wrapper-element">
                        <Settings addNumber={addNumber} maxValue={maxValue} minValue={minValue} />
                    </span>
                    <span className="Wrapper-element">
                        <Counter
                            maxValue={maxValue}
                            minValue={minValue}
                            number={number}
                            error={error}
                            incNumberHandler={incNumberHandler}
                            resetNumberHandler={resetNumberHandler}
                        />
                    </span>
                </div>
            </header>
        </div>
    );
}

export default App;
