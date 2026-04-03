import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'Angular (13-19)', level: 90 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'HTML5 & CSS3 / Bootstrap', level: 95 },
    ],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Java / Spring Boot', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    category: 'Tools & Other',
    emoji: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 80 },
    ],
  },
];

const techIcons = [
  { name: 'Angular', emoji: '🅰️' },
  { name: 'Java', emoji: '☕' },
  { name: 'Spring Boot', emoji: '🍃' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'React', emoji: '⚛️' },
  { name: 'Python', emoji: '🐍' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'Git', emoji: '📦' },
  { name: 'Postman', emoji: '📮' },
  { name: 'Figma', emoji: '✏️' },
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-badge">My Toolkit</span>
          <h2 className="section-title">Skills & <span>Expertise</span></h2>
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Tech icon cloud */}
        <div className="tech-cloud">
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-chip glass-card"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <span>{tech.emoji}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15 + 0.3 }}
            >
              <div className="skill-category__header">
                <span className="cat-emoji">{cat.emoji}</span>
                <h3 className="cat-title">{cat.category}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    inView={inView}
                    delay={ci * 0.15 + si * 0.1 + 0.5}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
