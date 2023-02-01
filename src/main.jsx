import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/navbar'
import App from './App'
import FrontSection from './section/front-section'
import Grid from './grid/grid'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <FrontSection />
    <Grid />
    <App />
  </React.StrictMode>,
)
