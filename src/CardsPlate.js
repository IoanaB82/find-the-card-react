import React from 'react';
import Card from './Card';
import './CardsPlate.css';

const CardsPlate = (props) => {

    const cards = props.cards;

    return (
        <div className="cards-plate">
        {cards.map(card => (
            <Card {...card} key={card} card={card} onClick={props.onClick} gameStatus={props.gameStatus}/>
        ))}
        </div>
    )
}

export default CardsPlate;