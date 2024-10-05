import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import End from './End';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/next" element={<End/>} />
    </Routes>
  </Router>
  );
}

export default App;