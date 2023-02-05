import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './navbar/navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Grid from './grid/grid'
import Home from './home/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/test" element={<Grid/>}/>
      </Routes>
    </div>
  )
}

export default App
