import React from 'react';
import CharSummary from './CharSummary';
import useFetch from '../hooks/useFetch';

const Character = ({ selectedChar, side }) => {
  const [isLoading, error, charData] = useFetch(
    `https://swapi.dev/api/people/${selectedChar}/`
  );

  const loadedChar = charData
    ? {
        id: selectedChar,
        name: charData.name,
        height: charData.height,
        colors: {
          hair: charData.hair_color,
          skin: charData.skin_color,
        },
        birthYear: charData.birth_year,
        gender: charData.gender,
        movieCount: charData.films.length,
      }
    : null;

  let content = <p>Loading Character...</p>;

  if (!isLoading && !error && loadedChar) {
    content = (
      <CharSummary
        side={side}
        name={loadedChar.name}
        gender={loadedChar.gender}
        height={loadedChar.height}
        hairColor={loadedChar.colors.hair}
        skinColor={loadedChar.colors.skin}
        birthYear={loadedChar.birthYear}
        movieCount={loadedChar.movieCount}
      />
    );
  } else if (!isLoading && error) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

export default React.memo(Character);
