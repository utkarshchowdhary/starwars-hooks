import React from 'react';

const CharSummary = (props) => {
  return (
    <div className={`content-outline ${props.side}`}>
      <h1 className="content-outline__title">{props.name}</h1>
      <p>
        Gender: <span>{props.gender}</span>
      </p>
      <p>
        Height: <span>{props.height}</span>
      </p>
      <p>
        Birth Year: <span>{props.birthYear}</span>
      </p>
      <p>
        Hair Color / Skin Color: <span>{props.hairColor}</span> /{' '}
        <span>{props.skinColor}</span>
      </p>
      <p>
        Appears in # Movies: <span>{props.movieCount}</span>
      </p>
    </div>
  );
};

export default CharSummary;
