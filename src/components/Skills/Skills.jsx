import React, { useState } from 'react';
import { Sparkles, Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('generativeAi');

  const categories = [
    { id: 'generativeAi', label: 'GenAI & LLMs', icon: <Sparkles size={18} /> },
    { id: 'languages', label: 'Languages', icon: <Code2 size={18} /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout size={18} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={18} /> },
    { id: 'databases', label: 'Databases & ORMs', icon: <Database size={18} /> },
    { id: 'toolsAndDevops', label: 'Tools & DevOps', icon: <Wrench size={18} /> },
  ];

  const currentSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Stack</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of tools, frameworks, and programming languages I use to build scalable products.
          </p>

          {/* Category Tabs */}
          <div className="skills-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {currentSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>
              <div className="skill-progress-track">
                <div
                  className={`skill-progress-bar ${skill.level.toLowerCase()}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
