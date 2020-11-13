import React, { useState } from 'react';
import Header from './Header';
import CharPicker from './CharPicker';
import PlanetPicker from './PlanetPicker';
import Character from './Character';
import Planet from './Planet';

const App = () => {
  const [chosenEntity, setChosenEntity] = useState('character');
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [side, setSide] = useState('light');
  const [destruction, setDestruction] = useState(false);

  const sideHandler = (side) => {
    setSide(side);
  };

  const charSelectHandler = (event) => {
    const charId = event.target.value;
    setChosenEntity('character');
    setSelectedCharacter(charId);
    setSelectedPlanet('');
  };

  const planetSelectHandler = (event) => {
    const planetId = event.target.value;
    setChosenEntity('planet');
    setSelectedPlanet(planetId);
    setSelectedCharacter('');
  };

  const initiateDestruction = () => {
    setDestruction(true);
  };

  const revertDestruction = () => {
    setDestruction(false);
    setSide('light');
  };

  let content = (
    <>
      <Header />
      <div style={{ marginTop: '5rem' }} className="content-container">
        <div className="grid-auto">
          <CharPicker
            chosenEntity={chosenEntity}
            side={side}
            selectedChar={selectedCharacter}
            onCharSelect={charSelectHandler}
          />
          <PlanetPicker
            chosenEntity={chosenEntity}
            side={side}
            selectedPlanet={selectedPlanet}
            onPlanetSelect={planetSelectHandler}
          />
        </div>
        {chosenEntity === 'character' && (
          <Character selectedChar={selectedCharacter} side={side} />
        )}
        {chosenEntity === 'planet' && (
          <div>
            <Planet selectedPlanet={selectedPlanet} side={side} />
          </div>
        )}
        <button className="button " onClick={() => sideHandler('light')}>
          Light Side
        </button>
        <button
          className="button button--secondary"
          onClick={() => sideHandler('dark')}
        >
          Dark Side
        </button>
        {side === 'dark' && (
          <button className="button button--dark" onClick={initiateDestruction}>
            DESTROY!
          </button>
        )}
      </div>
    </>
  );

  if (destruction) {
    content = (
      <>
        <Header />
        <div style={{ marginTop: '5rem' }} className="content-container">
          <h1>Total destruction!</h1>
          <button className="button" onClick={revertDestruction}>
            Back To Light!
          </button>
        </div>
      </>
    );
  }
  return content;
};

export default App;
