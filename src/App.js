import React from 'react';
import CharacterContainer from './containers/CharacterContainer';
import './App.css';
import BreakingBad from './BreakingBad.jpg';

function App() {
  return (
    <div className="App">
     <h1>Breaking Bad Characters</h1>
     <CharacterContainer/>
     <img src={BreakingBad} className='BBimg' alt="logo"/>
    </div>
  );
}

export default App;
