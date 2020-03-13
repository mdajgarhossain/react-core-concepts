import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'Jewell',
    job: 'Software Developer'
  };
  var style = {
    color: 'maroon',
    backgroundColor: 'yellow'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: 'green'}}>{`${person.job}`}</h1>
        <h2 style={style}>Web Development</h2>
        <Developer />
        <Developer />
      </header>
    </div>
  );
}

function Developer() {
  return(
    <div style={{border: '2px solid green', margin: '10px', padding: '10px'}}>
      <h2>A.H. Jewell</h2>
      <h3>React Developer</h3>
    </div>
  );
}

export default App;
