import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [activePopup, setActivePopup] = useState(null); // 'about' | 'projects' | 'skills' | 'contact' | null
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar openPopup={setActivePopup} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero openPopup={setActivePopup} />
      </main>
      <Footer openPopup={setActivePopup} />

      <Modal isOpen={!!activePopup} onClose={() => setActivePopup(null)}>
        {activePopup === 'about' && <About />}
        {activePopup === 'projects' && <Projects />}
        {activePopup === 'skills' && <Skills />}
        {activePopup === 'contact' && <Contact />}
      </Modal>
    </>
  );
}
