import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ openPopup, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (id === 'home') {
      openPopup(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      openPopup(id);
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          
        </a>

        <button
          className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle btn btn-outline" onClick={toggleTheme} aria-label="Toggle theme" style={{ padding: '0.5rem', borderRadius: '50%', borderColor: 'transparent' }}>
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </li>
          <li>
            <a href="#contact" className="btn btn-primary navbar__cta" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
