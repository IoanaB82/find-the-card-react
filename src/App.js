import React, {useState, useEffect, useDebugValue} from 'react';
import CardsPlate from "./CardsPlate";
import InputName from "./InputName";
import StartButton from "./StartButton";
import Message from "./Message";

//import _ from 'lodash';
import shuffle from 'lodash/shuffle';


import './App.scss';



function App() {

  const [cards, setCards] = useState([1, 5, 9, 4], { name: 'cards' });
  useDebugValue('cards');
  const [name, setName] = useState("stranger");
  useDebugValue('name');

  const [isGameOn, setIsGameOn] = useState(false);
  useDebugValue('isGameOn');
  const [count, setCount] = useState(2);
  useDebugValue('count');
  const [clickedCard, setClickedCard] = useState('');
  useDebugValue('clickedCard');

  const [gameStatus, setGameStatus] = useState('notStarted');
  useDebugValue('gameStatus');
  const [gameId, setGameId] = useState(1);
  useDebugValue('gameId');

  const [message, setMessage] = useState('');
  useDebugValue('message');
 

//handle start of the game
const handleStartButton = () => {
  
  //start game
  setIsGameOn(true);
//shuffle cards
  setCards(shuffle(cards));

  //reset parameters
 
  setClickedCard('');
  setGameStatus('active');
  setCount(2);
  setGameId(gameId =>gameId+1);
  setMessage('Guess where 1 is');

}


//retrieve status based on guess
  const checkCard = () => {

    let status;

    if (clickedCard === 1) {
      status = 'won';
      setIsGameOn('false');
      setMessage("It's a win");
    }
    else {
      if (count === 0) {
        status = 'lose';
        setIsGameOn('false');
        setMessage('You lost!');
      }
      else {
        if (count === 1) {
          setMessage('One try left!');
         // status = 'active';
        }
       status = 'active';
      }


    }

    return status;

  };


useEffect(() => {console.log(cards);}, [cards]);
useDebugValue('cardsEffect');

useEffect(() => {console.log(`clickedCard: ${clickedCard}`);}, [clickedCard]);
useDebugValue('clickedCardsEffect');

useEffect(() => {setCount(count=>count-1); setGameStatus(checkCard());}, [clickedCard]);
useDebugValue('triggerEventsOnClickEffect');



  return (
    <div className="App" key={gameId}>
      <header className="App-header">
        <p>Enter your name below</p>
     <InputName onChange={(e) => setName(e.target.value)} name={name} />
     <div className="info">
       Find where 1 is hidding. You have 2 guesses.<br/>
       Click the button to start the game.
     </div>

     { !isGameOn || gameStatus !=='active'
     ? (<CardsPlate cards = {cards} gameStatus={gameStatus} />) 
     : (<CardsPlate 
          cards = {cards} 
          gameStatus={gameStatus} 
          onClick={(e) => {
            setClickedCard(Number(e.currentTarget.getAttribute("card")));
            }
          }          
         
              
        />) 
      }
     
   
   <StartButton onClick={handleStartButton} />
  

   <Message gameStatus={gameStatus} message = {message}/>

     
    
      </header>
    </div>
  );
}

export default App;
