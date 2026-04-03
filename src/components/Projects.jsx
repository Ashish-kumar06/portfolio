import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Java Technology Upgrade Project',
    description: 'Migrating legacy web applications (Struts/JSP/Java) to a contemporary Spring MVC stack, addressing security vulnerabilities and ensuring smooth transition without performance loss.',
    tags: ['Java', 'Spring MVC', 'Struts', 'JSP'],
    color: '#6c63ff',
    emoji: '🔄',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'PayTimePlus',
    description: 'A full-stack web application enabling organizations to manage employees efficiently with responsive design, robust backend, and scalability.',
    tags: ['Angular', 'Spring Boot', 'SQL', 'TypeScript'],
    color: '#06b6d4',
    emoji: '⏱️',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'RentAll',
    description: 'Full-stack web application designed to make equipment rentals easy for all, with functional web solutions and production deployment.',
    tags: ['Angular', 'Spring Boot', 'Bootstrap', 'SQL'],
    color: '#10b981',
    emoji: '🏗️',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'E-commerce Website (Front-End)',
    description: 'Developed a responsive e-commerce website using Angular, HTML, CSS, and Bootstrap.',
    tags: ['Angular', 'Bootstrap', 'HTML/CSS'],
    color: '#f472b6',
    emoji: '🛒',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Café Management System',
    description: 'System to handle orders, inventory, billing, and staff efficiently with real-time tracking and reporting features.',
    tags: ['Java', 'Frontend'],
    color: '#f59e0b',
    emoji: '☕',
    github: '#',
    live: '#',
    featured: false,
  },
];

const filters = ['All', 'Featured', 'Angular', 'Spring Boot', 'Java'];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ '--card-accent': project.color }}
    >
      <div className="project-card__header">
        <span className="project-emoji">{project.emoji}</span>
        {project.featured && <span className="featured-badge">★ Featured</span>}
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        <a href={project.github} className="project-link" aria-label="GitHub">
          <FiGithub /> Code
        </a>
        <a href={project.live} className="project-link project-link--live" aria-label="Live demo">
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = projects.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">A selection of things I&apos;ve built recently</p>
        </div>

        <div className="projects__filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
