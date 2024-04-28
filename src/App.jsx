import { useState } from 'react';
import './App.css'
import Example from './Example';
import Fun from './Fun';

function App() {
    let colorState = useState('green');
    let color = colorState[0];
    let setColor = colorState[1]
    const [ favoriteNumber, setFavoriteNumber ] = useState(7);
    const [show, setShow] = useState(true);
    let name = "Hiroki";
    let colors = ['red', 'yellow', 'green', 'blue'];
    let favoriteNumbers = [7, 77, 43, 90, 81];
    const ulStyles = {
      color: 'red',
      backgroundColor: 'purple', 
    }
    function hola() {
      setColor('pink');
    }
    function onLeaveFavoriteColor() {
      console.log('leaving favorite colors')
    }
    function toggleParagraph() {
      setShow((currentShow) => {
        return !currentShow;
      });
    }
    function favNumber() {
      setFavoriteNumber(13);
    } 

    return (
      <>
      <h1>My favorite color is: {color}</h1>
      <h2 style={{ color: show ? 'yellow' : 'aqua'}} >Favorite Number {favoriteNumber}</h2>
      <h2>hi {name}</h2>
      {show && <p>Hi this is my paragraph</p>}
      <Fun name={name}/>
      <Example color={color}/>
      <ol onMouseOver={hola}>
        {favoriteNumbers.map(n => {
          return <li key={n}>{n}</li>
        })}
      </ol>
      <ul 
        style={{ color: 'green', backgroundColor: color}} 
        onMouseLeave={onLeaveFavoriteColor}>
          {colors.map((c, index) => {
            return <li key={index}>{c}</li>

          })}
      </ul>
      <button onClick={favNumber}>Change Number</button>
      <button onClick={hola} >Hola!</button>
      <button onClick={toggleParagraph} >{ show ? 'Hide' : 'Show'} paragraph</button>
      </>
      );
}

export default App
