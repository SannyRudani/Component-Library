import React, { useState } from "react";
import "./card.css";
import Checkbox from "../checkbox/Checkbox";

const Card = ({ label = "Card" }) => {
  const [state, setState] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setState((prevState) => (prevState + 1) % 3);
  };
  console.log(state, hovered);
  return (
    <div
      className="card-wrapper"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="cardText">{label}</div>
      <Checkbox defaultHovered={hovered} defaultState={state} />
    </div>
  );
};

export default Card;
