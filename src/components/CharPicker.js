import React from 'react';
import useFetch from '../hooks/useFetch';

const CharPicker = (props) => {
  const [isLoading, error, charData] = useFetch(
    'https://swapi.dev/api/people/'
  );

  const selectedCharacters = charData
    ? charData.results.slice(0, 9).map((char, index) => ({
        name: char.name,
        id: index + 1,
      }))
    : [];

  let content = <p>Loading characters...</p>;

  if (!isLoading && !error && selectedCharacters) {
    let className = `dropdown dropdown--${props.side} ${
      props.chosenEntity === 'character' ? 'active' : ''
    }`;
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={className}
      >
        <option value="" disabled hidden>
          Choose a Character
        </option>
        {selectedCharacters.map((char) => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (!isLoading && error) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default CharPicker;
