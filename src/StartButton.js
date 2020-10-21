import React from 'react';
import './StartButton.css';

const StartButton = (props) => {

    return (
        <button className="start-button" onClick={props.onClick}>Start Game</button>
    );
}

export default StartButton;