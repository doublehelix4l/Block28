import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import SpanishIn from './components/SpanishIn';
function App() {


  return (

    <div id="container">

      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/spanishin">Not Expected</Link>

      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/SpanishIn" element={<SpanishIn />}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
