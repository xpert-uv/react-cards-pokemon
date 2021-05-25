import React from "react";
import useFlip from "./useFlip";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  //Custome hook created;
  const [flip, setFlip] = useFlip();

  return (
    <div onClick={setFlip} className="PokemonCard Card">
      {flip ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
