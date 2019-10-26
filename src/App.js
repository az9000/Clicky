import React, { Component } from "react";
import "./App.css";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import shuffle from './utils/utility';

const footerStyle = {
  height: '40px'
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      message: "Click an image to begin",
      messageStyle: {
        color: "deepskyblue"
      },
      score: 0,
      totalScore: 0,
      clicked: []
    };
    this.resetGame();
  }

  handleClick(event) {
    event.preventDefault();

    console.log(event.target.alt)

    let tempClicked = this.state.clicked;
    let tempScore = this.state.score + 1;
    this.imageStyle = {
      animation: "none"
    };

    if (this.state.clicked.indexOf(event.target.alt) === -1) {
      // add to the array
      this.setState({ clicked: tempClicked.concat(event.target.alt) });
      this.setState({ score: tempScore });
      this.setState({ message: "Click an image to begin" });

      tempClicked = this.state.clicked;
      if (tempClicked.length === 11) {
        this.newCharacters = shuffle(characters).slice(-12);
        let tempTotalScore = this.state.totalScore + 1;
        this.setState({ message: "Click an image to begin" });
        this.setState({
          messageStyle: {
            color: "deepskyblue"
          }
        });
        this.setState({ clicked: [] });
        this.setState({ score: 0 }); 
        this.setState({ totalScore: tempTotalScore });
      } else {
        this.newCharacters = shuffle(this.newCharacters);
      }
    } else {
      console.log("clicked already");
      this.setState({ message: "Image already clicked!" });
      this.imageStyle = {
        animation: "shake 0.5s",
        animationIterationCount: "1"
      };
      this.setState({
        messageStyle: {
          color: "red"
        }
      });
      setTimeout(() => {
        this.setState({ message: "Click an image to begin" });
        this.setState({
          messageStyle: {
            color: "deepskyblue"
          }
        });
        this.setState({ clicked: [] });
        this.setState({ score: 0 });        
      }, 1000);
      
      this.newCharacters = shuffle(characters).slice(-12);
    }
  }
  
  resetGame() {
    this.newCharacters = shuffle(characters).slice(-12);
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar navbar-inverse bg-dark">
          <div className="row container-fluid">
            <div className="col-3 offset-1">
              <h1>
                <span className="App-heading">Clicky Game</span>
              </h1>
            </div>
            <div className="col-3 offset-1">
              <h1>
                <span style={this.state.messageStyle}>{this.state.message}</span>
              </h1>
            </div>
            <Score score={this.state.score} totalScore={this.state.totalScore} />
          </div>
        </div>

        {/* Image cards here */}
        <div className="container mt-5 ml-auto">
          <div className="row mb-3">
            {this.newCharacters.map((character, index) => {
              return (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  handleClick={this.handleClick.bind(this)}
                  style={this.imageStyle}
                />
              );
            })}
          </div>
        </div>
        <div className="navbar fixed-bottom navbar-inverse bg-dark" style={footerStyle}></div>
      </React.Fragment>
    );
  }
}

export default App;
