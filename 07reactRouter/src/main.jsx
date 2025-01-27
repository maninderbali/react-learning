import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { User } from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

// Method 1 to create Routes

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Method 2 to create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
    >
      <Route
        path=''
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='user/:userId'
        element={<User />}
      />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
