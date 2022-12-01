
import './App.css';
import { useState } from "react";
import players from "./assets/players.json";
import {player} from "./components/player"




function App() {


  return (
    <div className="App">

      <div className="header">
        <div className="arsenal-logo">

        </div>
        <div className="title">
          Arsenal Football Club Roster
        </div>
        <div className="desc">
          We are winning the league 
        </div>
      </div>


      <div id="root">
      <div className="main-container">
        

        <div className="main-grid">
          <div className="sidebar">

          </div>

          <div className="item-grid">

          </div>
        </div>

      </div>
    </div>
    </div>

    
  );
}

export default App;
