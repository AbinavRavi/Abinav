import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="https://abinavravi.github.io" target="_blank" rel="noopener noreferrer">Blog</a>
        <Link to="/about">About</Link>
        <a href="https://abinavravi.github.io/resources/Abinav_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
