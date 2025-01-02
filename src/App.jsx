import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, Switch
import { HomePage } from '../src/Components/HomePage/HomePage';
import AboutsUSDetailed from './Components/AboutsUSDetailed/AboutsUSDetailed';
import { Categories } from './Components/Categories/Categories';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutsUSDetailed />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
