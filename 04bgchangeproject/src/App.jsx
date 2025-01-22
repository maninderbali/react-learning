import { useState } from 'react';
import './App.css';

function App() {
  const [color, setBgColor] = useState('olive');

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex clex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-3'>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'Red' }}
            onClick={() => setBgColor('red')}
          >
            Red
          </button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-3'>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}
            onClick={() => setBgColor('green')}
          >
            Green
          </button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-3'>
          <button
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'white' }}
            onClick={() => setBgColor('white')}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
