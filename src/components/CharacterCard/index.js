import React, { Component } from "react";
import "./style.css";

class CharacterCard extends Component {

  render() {
    return (
        <div className="col-3 mb-3">        
          <img alt={this.props.name} src={this.props.image} onClick={this.props.handleClick} style={this.props.style} />          
        </div>
    );
  }
}

export default CharacterCard;
