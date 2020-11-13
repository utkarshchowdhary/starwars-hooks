import React from 'react';

const PlanetSummary = (props) => {
  return (
    <div className={`content-outline ${props.side}`}>
      <h1 className="content-outline__title">{props.name}</h1>
      <p>
        Diameter: <span>{props.diameter}</span>
      </p>
      <p>
        Climate: <span>{props.climate}</span>
      </p>
      <p>
        Population: <span>{props.population}</span>
      </p>
      <p>
        Terrain: <span>{props.terrain}</span>
      </p>
      <p>
        Appears in # Movies: <span>{props.movieCount}</span>
      </p>
    </div>
  );
};

export default PlanetSummary;
