import React, {useState, useEffect} from 'react'
import './App.css';
import Selection from './components/Selection.js'
import ReactDOM from 'react-dom';
import Table from './components/Table.js'

function App() {

  const [click, setClick] = useState(0);
  var player1 = -1;
  var player2 = -2;
  useEffect (
    () => {

    }, [click]);

  if(click === 1) {
    return (ReactDOM.render(<Table playerSelect = {click} />, document.getElementById('root')));
  } else if (click === 2) {
    return (ReactDOM.render(<Table playerSelect = {click} />, document.getElementById('root')));
  } else {
    return (
      <div className='selection-table'>
        <h1><code>Select X or O</code></h1>
        <div className='row'>
            <Selection playerType = {player1} click={[click,setClick]} />
            <Selection playerType = {player2} click={[click,setClick]} /> 
        </div>
      </div>
    );
  }
}

export default App;
