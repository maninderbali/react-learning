import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import ThemeButton from './Components/ThemeButton';
import Card from './Components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('Light');

  const lightTheme = () => {
    setThemeMode('Light');
  };

  const darkTheme = () => {
    setThemeMode('Dark');
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode.toLowerCase());
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeButton />
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
