import React from "react";
import "./Card.scss";

const Card = (props) => {
    return (
<div className="card" card={props.card} onClick={props.onClick} >


    <div className="card__side">
     {props.gameStatus === "active"
        ? <div className="card__side--back"></div> 
        : <div className="card__side--front"> {props.card}         
        </div>
        }
    
      
      
    </div>
    
   {/*  {props.card}*/} 
    
    </div>
    );
}

export default Card;