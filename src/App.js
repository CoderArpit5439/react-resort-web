import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resorts from './pages/Resorts';
import About from './pages/About';
import Contact from './pages/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <LandingPage  />
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/resorts" element={<Resorts />} /> */}
    //     {/* <Route path="/about" element={<About />} /> */}
    //     {/* <Route path="/contact" element={<Contact />} /> */}
    //   </Routes>
    //   <Footer  />
    // </Router>
  );
}

export default App;
