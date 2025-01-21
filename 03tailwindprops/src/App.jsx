import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let userDetails = { user: 'chaiAurCode', channel: 'chaiAurCode' };
  let locations = ['Noida', 'Saharanpur', 'Dehradun', 'Haridwar', 'Rishikesh'];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl3 mb-4'>
        Tailwind Test
      </h1>

      <Card
        userName='chaiAurCode'
        userDetails={userDetails}
        locations={locations}
        btnText='Check More'
      />

      <Card
        userName='chaiAurCode'
        userDetails={userDetails}
        locations={locations}
      />
    </>
  );
}

export default App;
