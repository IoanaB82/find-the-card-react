import React from 'react';


const InputName = (props) => {

    return (
     <>
        <input type="text" onChange={props.onChange}   />
        <h3>Hello, <span style={{color: '#a84336'}}>{props.name}</span> ! Are you ready to play?</h3>
    </>   
    )

}

export default InputName;