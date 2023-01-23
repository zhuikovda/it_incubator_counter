import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { Counter } from "../Counter/Counter";
import { UniversalButton } from "../UniversalButton/UniversalButton";

type SettingsPropsType = {
    maxValue: number;
    minValue: number;
    addNumber: (maxValue: number, minValue: number) => void;
};

export const Settings: FC<SettingsPropsType> = (props) => {
    let [maxValue, setMaxValue] = useState<number>(0);
    let [minValue, setMinValue] = useState<number>(0);

    useEffect(() => {
        let numberToString = localStorage.getItem("numMaxValue");
        if (numberToString) {
            let newNumber = JSON.parse(numberToString);
            setMaxValue(newNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("numMaxValue", JSON.stringify(maxValue));
    }, [maxValue]);

    useEffect(() => {
        let numberToString = localStorage.getItem("numMinValue");
        if (numberToString) {
            let newNumber = JSON.parse(numberToString);
            setMinValue(newNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("numMinValue", JSON.stringify(minValue));
    }, [minValue]);

    const setHandler = () => {
        props.addNumber(maxValue, minValue);
    };

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value));
    };
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value));
    };

    return (
        <div>
            <div>
                <div>
                    <span>max value:</span>
                    <span>
                        <input
                            value={maxValue}
                            type={"number"}
                            onChange={maxValueHandler}
                            // onKeyDown={onKeyDownHandler}
                        />
                    </span>
                </div>
                <div>
                    <span>min value:</span>
                    <span>
                        <input value={minValue} type={"number"} onChange={minValueHandler} />
                    </span>
                </div>
                <UniversalButton title={"set"} callBack={setHandler} disabled={false} />
            </div>
        </div>
    );
};
