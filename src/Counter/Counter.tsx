import React, { useState } from "react";
import { UniversalButton } from "../UniversalButton/UniversalButton";

export const Counter = () => {
    const [number, setNumber] = useState<number>(0);

    const maxValue = 5,
          minValue = 0;

    const incNumberHandler = () => {
        if (number < maxValue) {
            setNumber(number + 1);
        }
    };

    const resetNumberHandler = () => {
        setNumber(minValue);
    };

    let disabledValue = number === minValue ? true : false

    return (
        <div>
            <div>{number}</div>
            <UniversalButton title={"inc"} callBack={incNumberHandler} disabled={false} />
            <UniversalButton title={"reset"} callBack={resetNumberHandler} disabled={disabledValue} />
        </div>
    );
};
