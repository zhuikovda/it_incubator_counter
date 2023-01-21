import React, { FC } from 'react';

type UniversalButtonPropsType={
    title: string
    callBack: ()=>void
    disabled: boolean
}



export const UniversalButton: FC<UniversalButtonPropsType> = (props) => {

    const ButtonHandler=()=>{
        props.callBack()
    }

    return (
        <div>
            <button onClick={ButtonHandler} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};