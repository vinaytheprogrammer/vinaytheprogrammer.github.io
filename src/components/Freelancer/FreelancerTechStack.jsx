import React, { useState } from 'react';
import {
  Smartphone,
  Layout,
  Sparkles,
  Server,
  Database,
  CreditCard,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import { freelancerData } from '../../data/freelancerData';
import './FreelancerTechStack.css';

const categoryIcons = {
  mobile: <Smartphone size={20} />,
  frontend: <Layout size={20} />,
  genai: <Sparkles size={20} />,
  backend: <Server size={20} />,
  database: <Database size={20} />,
  payments: <CreditCard size={20} />,
};

const FreelancerTechStack = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: <Layers size={16} /> },
    { id: 'mobile', label: 'Mobile & Expo', icon: <Smartphone size={16} /> },
    { id: 'frontend', label: 'Frontend & Web', icon: <Layout size={16} /> },
    { id: 'genai', label: 'GenAI & Agents', icon: <Sparkles size={16} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={16} /> },
    { id: 'database', label: 'Cloud & DBs', icon: <Database size={16} /> },
    { id: 'payments', label: 'Payments & Auth', icon: <CreditCard size={16} /> },
  ];

  const filteredStack =
    selectedFilter === 'all'
      ? freelancerData.techStack
      : freelancerData.techStack.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="tech-stack" className="section freelancer-tech-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">Full-Stack & Mobile Arsenal</span>
          <h2 className="section-title">
            Production-Grade <span className="text-gradient freelance-gradient">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested technologies selected for rapid MVP delivery, low cloud overhead, airtight security, and enterprise maintainability.
          </p>

          {/* Category Filter Tabs */}
          <div className="freelance-tech-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`freelance-tech-tab ${selectedFilter === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="freelance-tech-grid">
          {filteredStack.map((group) => (
            <div key={group.id} className="tech-group-card glass-card">
              <div className="tech-group-header">
                <div className="tech-group-title-row">
                  <div className="tech-icon-box">
                    {categoryIcons[group.id] || <Cpu size={20} />}
                  </div>
                  <div>
                    <h3 className="tech-group-name">{group.category}</h3>
                    <span className="tech-group-badge">{group.badge}</span>
                  </div>
                </div>
              </div>

              {/* Value Highlight Box */}
              <div className="tech-highlight-box">
                <ShieldCheck size={16} className="tech-shield-icon" />
                <span className="tech-highlight-text">{group.highlight}</span>
              </div>

              <p className="tech-group-desc">{group.description}</p>

              {/* Skills Grid */}
              <div className="tech-skills-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="tech-skill-item">
                    <div className="tech-skill-left">
                      <CheckCircle2 size={15} className="tech-check-icon" />
                      <span className="tech-skill-name">{skill.name}</span>
                    </div>
                    <span className="tech-skill-tag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Advisory Callout */}
        <div className="tech-advisory-banner glass-card">
          <div className="tech-advisory-content">
            <h4 className="tech-advisory-title">Have a specific tech stack or custom cloud infrastructure?</h4>
            <p className="tech-advisory-desc">
              Whether you need to build on your existing codebase, integrate with legacy microservices, or configure proprietary cloud environments (AWS, GCP, DigitalOcean), I adapt to your technical ecosystem.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary freelance-btn-primary tech-advisory-btn">
            <span>Discuss Architecture</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreelancerTechStack;
