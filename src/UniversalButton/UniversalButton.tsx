import React, { FC } from "react";
import styled from "styled-components";

type UniversalButtonPropsType = {
    title: string;
    callBack: () => void;
    disabled: boolean;
};

export const UniversalButton: FC<UniversalButtonPropsType> = (props) => {
    const ButtonHandler = () => {
        props.callBack();
    };
    let ButtonStyle = !props.disabled ? Button : DisabledButton;
    return (
        <Container>
            <ButtonStyle onClick={ButtonHandler} disabled={props.disabled}>
                {props.title}
            </ButtonStyle>
        </Container>
    );
};

const Container = styled.div`
    display: inline-block;
    /* border: 1px solid #000000;
    margin: 0.7em;
    margin-top: 25px */
`;

const Button = styled.button`
    /* display: inline-block; */
    width: 100px;
    color: #000000;
    font-size: 25px;
    margin: 2em 0.7em;
    /* padding: 0.25em 1em; */
    border: none;
    border-radius: 0px;
    background: #9a96d5;
`;

const DisabledButton = styled.button`
    /* display: inline-block; */
    color: #000000;
    font-size: 25px;
    width: 100px;
    /* margin: 1.8em 0.7em; */
    /* padding: 0.25em 1em; */
    border: none;
    border-radius: 0px;
    background: #aaa8c3;
`;
