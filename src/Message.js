import React from 'react';


const Message = (props) => {

    
    return (
        <div className="message">
            {/*
         {  props.gameStatus === 'lost' ? 'Game over' 
         : (props.gameStatus === 'won' ? 'Yes! You did it!' 
         : (props.gameStatus === 'active' ? 'Find the 0' : null))
        }*/}
            {props.message}
            </div>
    );
}

export default Message;