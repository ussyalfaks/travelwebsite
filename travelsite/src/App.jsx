// index.jsx or App.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Hero from './components/hero';
import Aboutus from './components/aboutus';

function App() {
  return (
    <Router>
      <div>
       <div className='navbarhero-container'>
       <Navbar />
       <Hero/>
       </div>
       <Aboutus/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
