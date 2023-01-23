import React, { FC, useEffect, useState } from "react";
import { UniversalButton } from "../UniversalButton/UniversalButton";

type CounterPropsType = {
    maxValue: number;
    minValue: number;
    number: number;
    error: string;
    incNumberHandler: () => void;
    resetNumberHandler: () => void;
};

export const Counter: FC<CounterPropsType> = (props) => {
    let disabledValue = props.number === props.minValue || props.error ? true : false;
    let disabledInc = props.error ? true : false;
    let message = props.error || props.number;

    return (
        <div>
            <div>{message}</div>
            <UniversalButton
                title={"inc"}
                callBack={props.incNumberHandler}
                disabled={disabledInc}
            />
            <UniversalButton
                title={"reset"}
                callBack={props.resetNumberHandler}
                disabled={disabledValue}
            />
        </div>
    );
};
