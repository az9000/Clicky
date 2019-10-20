import React from "react";
import "./App.css";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

const deepSkyBlueColor = {
  color: "deepskyblue"
};

function App() {
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
              <span style={deepSkyBlueColor}>Guess status here</span>
            </h1>
          </div>
          <div className="col-3 offset-1">
            <h1>
              <span style={deepSkyBlueColor}>Score: 0 | Top Score: 0</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Image cards here */}
      <div className="container mt-5 ml-auto">
        <div className="row mb-3">
          {characters.map((character, index) => {
            return <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
            />;
          })}
        </div>
        
      </div>

      
    </React.Fragment>
  );
}

export default App;
