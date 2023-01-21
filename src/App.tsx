import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Settings } from "./Settings/Settings";
import { Counter } from "./Counter/Counter";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Wrapper">
                    <span className="Wrapper-element"><Settings /></span>
                    <span className="Wrapper-element"><Counter /></span>
                </div>
            </header>
        </div>
    );
}

export default App;
