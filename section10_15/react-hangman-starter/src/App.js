
import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman words={['apple','manzana','juice','headache','smallpox']}/>
      </div>
    );
  }
}

export default App;
