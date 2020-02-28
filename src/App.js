import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from './navmenu'

function App() {

const el =[{title:"Home"}, {title:"services",dropdown:["For entrepreneur","For Students","For Hobbyists"]},{title:"Contact"}]


  return (
    <div className="App">
      <header className="App-header">
        <Navmenu nav={el}/>
        <img src={logo} className="App-logo" alt="logo" />
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
