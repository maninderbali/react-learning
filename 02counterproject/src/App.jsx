import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 20) {
      setCounter(20);
      return;
    }
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter === 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
