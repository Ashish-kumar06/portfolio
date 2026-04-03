import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const socials = [
  { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ashishvkumar', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:ashishvkumar06@gmail.com', label: 'Email' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero({ openPopup }) {
  return (
    <section id="home" className="hero">
      {/* Ambient blobs */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />
      <div className="hero-grid" />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__greeting">
            👋 Hello, I&apos;m
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__name">
            Ashish <span className="text-gradient">V Kumar</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero__roles">
            <span className="role-item">Software Developer</span>
            <span className="role-dot">·</span>
            <span className="role-item">Full Stack Engineer</span>
            <span className="role-dot">·</span>
            <span className="role-item">Java & Angular Expert</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero__bio">
            With <strong>2+ years</strong> of full-stack development experience, I effectively optimize time, quality, and resources to build comprehensive web solutions that drive business growth.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); openPopup('projects'); }}>
              View My Work <FiArrowDown />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); openPopup('contact'); }}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar side */}
        <motion.div
          className="hero__avatar-wrap"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <span className="avatar-emoji">🧑‍💻</span>
            </div>
            <motion.div
              className="float-badge float-badge--1"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <span>🅰️</span> Angular
            </motion.div>
            <motion.div
              className="float-badge float-badge--2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span>☕</span> SpringBoot
            </motion.div>
            <motion.div
              className="float-badge float-badge--3"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.5 }}
            >
              <span>⭐</span> 2+ Years Exp
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown />
        </motion.div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
}
