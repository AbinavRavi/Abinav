import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show nav when near the top (within 100px)
      if (currentScrollY < 100) {
        setIsNavVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && isNavVisible) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY && !isNavVisible) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavVisible, lastScrollY]);

  return (
    <Router>
      <nav style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex', 
        gap: '1rem', 
        padding: '1rem', 
        borderBottom: '1px solid #eee',
        zIndex: 1000,
        transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="https://abinavr.substack.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        <Link to="/about">About</Link>
        <a href="https://abinavravi.github.io/resources/Abinav_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
      <div style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
