import React from 'react';
import PlanetSummary from './PlanetSummary';
import useFetch from '../hooks/useFetch';

const Planet = ({ selectedPlanet, side }) => {
  const [isLoading, error, planetData] = useFetch(
    `https://swapi.dev/api/planets/${selectedPlanet}/`
  );

  const loadedPlanet = planetData
    ? {
        id: selectedPlanet,
        name: planetData.name,
        diameter: planetData.diameter,
        climate: planetData.climate,
        population: planetData.population,
        terrain: planetData.terrain,
        movieCount: planetData.films.length,
      }
    : null;

  let content = <p>Loading planet...</p>;

  if (!isLoading && !error && loadedPlanet) {
    content = (
      <PlanetSummary
        side={side}
        name={loadedPlanet.name}
        diameter={loadedPlanet.diameter}
        climate={loadedPlanet.climate}
        population={loadedPlanet.population}
        terrain={loadedPlanet.terrain}
        movieCount={loadedPlanet.movieCount}
      />
    );
  } else if (!isLoading && error) {
    content = <p>Failed to fetch planet.</p>;
  }
  return content;
};

export default React.memo(Planet);
