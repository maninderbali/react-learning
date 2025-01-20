import { useState } from 'react';
import './App.css';

function App() {
  let counter = 15;

  const addValue = () => {
    console.log('clicked', counter);
    counter = counter + 1;
  };
  const removeValue = () => {
    console.log('Value Removed');
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <br />
      <button>Remove Value</button>
    </>
  );
}

export default App;
