import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/navbar'
import App from './App'
import FrontSection from './section/front-section'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <FrontSection />
    <App />
  </React.StrictMode>,
)
