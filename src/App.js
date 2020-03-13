import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const developers = ['Fullstack', 'Frontend', 'Backend'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Developer name='A.H. Jewell' job='Software'/>
        <Developer name='Jhankar Mahbub' job='React'/>
        <Developer name='Karim Sheikh' job={developers[0]}/>
        <Developer name='Ajgar' job={developers[1]}/>
      </header>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  
  return(
    <div style={{border: '2px solid green', margin: '10px', padding: '10px'}}>
      <h2>{props.name}</h2>
      <h3>{props.job} Developer</h3>
    </div>
  );
}

export default App;
