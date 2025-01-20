import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
const anotherUser = 'chai aur react';

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google',
// };

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to visit google..',
  anotherUser
);

ReactDom.createRoot(document.getElementById('root')).render(<App />);
