import './App.css'
import Example from './Example';
import Fun from './Fun';

function App() {
    let color = 'green';
    let name = "Hiroki";
    let colors = ['red', 'yellow', 'green', 'blue'];
    let favoriteNumbers = [7, 77, 43, 90, 81];
    function hola() {
      // alert('Hola!!!!!')
    }
    function onLeaveFavoriteColor() {
      console.log('leaving favorite colors')
    }
    return (
      <>
      <h1>My favorite color is: {color}</h1>
      <h2>hi {name}</h2>
      <Fun name={name}/>
      <Example color={name}/>
      <ol onMouseOver={hola}>
        {favoriteNumbers.map(n => {
          return <li key={n}>{n}</li>
        })}
      </ol>
      <ul onMouseLeave={onLeaveFavoriteColor}>
        {colors.map((c, index) => {
          return <li key={index}>{c}</li>

        })}
      </ul>
      <button onClick={hola} >Hola!</button>
      </>
      );
}

export default App
