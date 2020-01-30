import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return(
    <div className= "App">
      <h2>Prashant Mote</h2>
      <h3>Nishank Rathod</h3>
      <Person name="Prashant" age="30"> </Person>
    </div>
    );
  // return React.createElement(
    // 'div',{className: 'App'},'Hello : Prashant'
   //);
}

export default App;
