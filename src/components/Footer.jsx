import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer({ openPopup }) {
  const year = new Date().getFullYear();

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    const id = item.toLowerCase();
    if (id === 'home') {
      openPopup(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      openPopup(id);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            
          </span>
          <p>Crafting beautiful web experiences with passion and precision.</p>
        </div>

        <nav className="footer__nav">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="footer__link"
              onClick={e => handleLinkClick(e, item)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {[
            { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ashishvkumar', label: 'LinkedIn' },
            { icon: <FiTwitter />, href: '#', label: 'Twitter' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Ashish V Kumar. Made with <FiHeart className="heart-icon" /> using React & Framer Motion.</p>
      </div>
    </footer>
  );
}
