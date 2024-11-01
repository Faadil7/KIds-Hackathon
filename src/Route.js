import React from 'react'
import App from "./App"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import Kelapa from './components/Kelapa'


const router = createBrowserRouter([
    {
        path: "/",
        children: [

            {
                index: true,
                element: <App/>,
            },
            
            {
                path: "/Kelapa",
                element: <Kelapa/>,
            },
            
        ]
    }
])

const Route = () => {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/Kelapa">Kelapa</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/Kelapa" component={Kelapa} />
      <Route path="/about" component={About} />
      <Route component={NotFound} /> {/* Untuk halaman tidak ditemukan */}
    </Switch>
  </Router>
  )
}

export default Route