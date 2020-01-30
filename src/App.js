import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return(
    <div className= "App">
      <Person name="Nishank" age="27"><br></br></Person>
      <Person name="Prashant" age="28"><br></br></Person>
    </div>
    );
  // return React.createElement(
    // 'div',{className: 'App'},'Hello : Prashant'
   //);
}

export default App;
