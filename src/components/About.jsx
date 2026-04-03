import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap, FiDownload } from 'react-icons/fi';
import './About.css';

const stats = [
  { icon: <FiZap />, value: '2+', label: 'Years Experience' },
  { icon: <FiLayers />, value: '5+', label: 'Projects Done' },
  { icon: <FiCode />, value: '100%', label: 'Commitment' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p className="section-subtitle">A passionate developer building impactful digital experiences</p>
        </div>

        <div className="about__content">
          {/* Visual side */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="about__img-wrap">
              <div className="about__placeholder">
                <span>🧑‍💻</span>
                <p>Ashish V Kumar</p>
                <small>Software Developer</small>
              </div>
              <div className="about__img-badge">
                <span>💼</span> Available for work
              </div>
            </div>

            <div className="about__stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="about__heading">
              Achieving objectives through <span className="text-gradient">technology</span>
            </h3>
            <p>
              I am a Software Developer at DifferenTech Solutions with over 2 years of experience in 
              full-stack development. I am driven to achieve strategic and operational objectives by 
              utilizing modern technologies in challenging work environments.
            </p>
            <p>
              My experience encompasses both comprehensive UI development and robust backend engineering. 
              I am focused on seeking a responsible position where I can effectively optimize time, quality, 
              and resources, facilitating the growth of both myself and the organization.
            </p>

            <div className="about__highlights">
              {[
                '🎓 Bachelor of Engineering',
                '🏆 Full-stack Java development course from Jspiders',
                '🌍 Based in Mangaluru, Karnataka, IN',
                '💻 UI & Backend Architecture Expert',
              ].map(h => (
                <div key={h} className="highlight-item">{h}</div>
              ))}
            </div>

            <a href="#" className="btn btn-primary" style={{alignSelf:'flex-start'}}>
              <FiDownload /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
