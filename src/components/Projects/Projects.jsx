import React, { useState } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { sweData } from '../../data/sweData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All SWE Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'genai', label: 'GenAI & Multi-Agent' },
    { id: 'enterprise', label: 'Enterprise & Micro-Frontends' },
    { id: 'backend', label: 'Backend & Systems' },
  ];

  const filteredProjects = sweData.projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'genai') return project.badge.toLowerCase().includes('genai') || project.badge.toLowerCase().includes('ai');
    if (filter === 'enterprise') return project.badge.toLowerCase().includes('enterprise') || project.badge.toLowerCase().includes('micro-frontend') || project.badge.toLowerCase().includes('angular') || project.badge.toLowerCase().includes('healthcare');
    if (filter === 'backend') return project.badge.toLowerCase().includes('backend') || project.badge.toLowerCase().includes('infrastructure');
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Production Systems</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of production-grade platforms, multi-agent AI systems, and microservices I have engineered.
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
                  {project.sourceCode ? (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="View Source Code"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                  ) : (
                    <span
                      className="project-link-disabled"
                      title="Enterprise Proprietary / Internal Repository"
                    >
                      <Lock size={16} />
                    </span>
                  )}

                  {project.livePreview ? (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="View Live Deployment"
                      title="Live Preview"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
