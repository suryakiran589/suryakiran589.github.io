import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
}

export default App;