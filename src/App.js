import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collections from "./collections";

function App() {
  return(
    <div className="App">
      <div className="unknown">
        <header className="App-header">
          <Collections />
        </header> 
        <div className="App-body">
        Welcome
        </div>
      </div>
    </div>
  )






  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //   <div>
  //     HADUKEN
  //     </div>  

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
