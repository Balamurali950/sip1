import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navbar'; 
import Home from './components/Home';
import MyRecipe from './components/MyRecipe';
import AboutUs from './components/AboutUs'; 

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-recipe" element={<MyRecipe />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
