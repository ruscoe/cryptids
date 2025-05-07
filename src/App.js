import React, { useState } from 'react';
import cryptids from './cryptids.json';
import './App.css';

function App() {
  const [cryptid, setCryptid] = useState(getRandomCryptid());

  function getRandomCryptid() {
    return cryptids[Math.floor(Math.random() * cryptids.length)];
  }

  function handleNewCryptid() {
    setCryptid(getRandomCryptid());
  }

  return (
    <div>
      <h1>Random Cryptid</h1>
      <img class="cryptid-image" src={cryptid.image} alt={cryptid.name} />
      <h2>{cryptid.name}</h2>
      <p>Location: {cryptid.location}</p>
      <p>{cryptid.description}</p>
      <button onClick={handleNewCryptid}>Show Another Cryptid</button>
    </div>
  );
}

export default App;
