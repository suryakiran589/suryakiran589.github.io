import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Linkedin } from 'lucide-react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Home from './components/Home'
import Projects from './components/Projects'


function App() {
    const appRoute = createBrowserRouter([
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/projects",
        element:<Projects/>
      }
    ])

  return (
    <>
      <div>
          <RouterProvider router={appRoute}></RouterProvider>
      </div>
    </>
  )
}

export default App
