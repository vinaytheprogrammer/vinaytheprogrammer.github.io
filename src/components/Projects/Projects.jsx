import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { projects } from '../../portfolio';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Systems' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'fullstack') return project.badge.toLowerCase().includes('full stack');
    if (filter === 'backend') return project.badge.toLowerCase().includes('backend') || project.badge.toLowerCase().includes('algorithms');
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of production-grade platforms, full-stack applications, and backend systems I have engineered.
          </p>

          {/* Filter Tabs */}
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-top">
                <span className="project-badge">{project.badge}</span>
                <div className="project-links">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      aria-label={`${project.name} Source Code on GitHub`}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.livePreview && project.livePreview !== '#' && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      aria-label={`${project.name} Live Demo`}
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project-footer">
                <div className="project-stack">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  {project.livePreview && project.livePreview !== '#' && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
