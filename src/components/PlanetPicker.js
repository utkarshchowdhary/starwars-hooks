import React from 'react';
import useFetch from '../hooks/useFetch';

const PlanetPicker = (props) => {
  const [isLoading, error, planetData] = useFetch(
    'https://swapi.dev/api/planets/'
  );

  const selectedPlanets = planetData
    ? planetData.results.slice(0, 9).map((char, index) => ({
        name: char.name,
        id: index + 1,
      }))
    : [];

  let content = <p>Loading planets...</p>;

  if (!isLoading && !error && selectedPlanets) {
    let className = `dropdown dropdown--${props.side} ${
      props.chosenEntity === 'planet' ? 'active' : ''
    }`;
    content = (
      <select
        onChange={props.onPlanetSelect}
        value={props.selectedPlanet}
        className={className}
      >
        <option value="" disabled hidden>
          Choose a Planet
        </option>
        {selectedPlanets.map((planet) => (
          <option key={planet.id} value={planet.id}>
            {planet.name}
          </option>
        ))}
      </select>
    );
  } else if (!isLoading && error) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default PlanetPicker;
