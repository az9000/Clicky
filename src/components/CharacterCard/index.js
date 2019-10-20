import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    
      <div className="col mb-3">
        <img alt={props.name} src={props.image} />
      </div>
    
  );
}

export default CharacterCard;
