import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: 0,
      letters: ["र", "ज", "त", "ब"],
    };
  }
  drawLetter(direction) {
    let letters = this.state.letters.slice();
    console.log(direction);
    let currentLetter = this.state.currentLetter;
    let nextLetter;
    if (direction === "next") {
      nextLetter = currentLetter + 1;
    } else {
      if (currentLetter === 0) {
        nextLetter = letters.length - 1;
      } else {
        nextLetter = currentLetter - 1;
      }
    }
    console.log(nextLetter);
    if (nextLetter >= letters.length) {
      nextLetter = 0;
    }
    console.log(nextLetter);
    this.setState({ currentLetter: nextLetter, letters: letters });
  }

  render() {
    return (
      <div className="App">
        <header className="page">
          <h1>Learn to Read Marathi</h1>
          <div className="letterBoard">
            <div className="letter">
              {this.state.letters[this.state.currentLetter]}
            </div>
          </div>
          <div class="controller">
            <button onClick={() => this.drawLetter("pervious")}>
              Previous
            </button>
            <button onClick={() => this.drawLetter("next")}>Next</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
