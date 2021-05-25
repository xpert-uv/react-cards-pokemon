import React from "react";
import backOfCard from "./back.png";
import useFlip from './useFlip';
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  //Custome hook is implemented;
  const [flip, setFlip] = useFlip();

  return (
    <img
      src={flip ? front : back}
      alt="playing card"
      onClick={setFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
