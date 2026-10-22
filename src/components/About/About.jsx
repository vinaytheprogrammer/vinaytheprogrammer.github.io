import React from 'react';
import { Sparkles, Server, Layout, ShieldCheck, Terminal, Award } from 'lucide-react';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Sparkles size={22} className="card-icon" />,
      title: 'Generative AI & Multi-Agent',
      description: 'Architecting multi-agent LLM systems with Mastra & AWS Bedrock AgentCore, MCP tool integrations, RAG pipelines with pgvector, and context engineering.',
    },
    {
      icon: <Server size={22} className="card-icon" />,
      title: 'Backend & Microservices',
      description: 'Designing high-throughput APIs, fault-tolerant polling systems, and microservices using Fastify, Node.js, Express, LoopBack 4, and Prisma.',
    },
    {
      icon: <Layout size={22} className="card-icon" />,
      title: 'Frontend & Micro-Frontends',
      description: 'Building responsive SPAs and Single-SPA micro-frontend platforms with React 18, Angular 19 migrations, and D3.js/Highcharts data visualizations.',
    },
    {
      icon: <ShieldCheck size={22} className="card-icon" />,
      title: 'Enterprise Security & Auth',
      description: 'Implementing Google OAuth 2.0, PKCE, JWT with Redis-backed refresh token rotation, IDOR vulnerability elimination, and Trivy security hardening.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Engineering scalable solutions with <span className="text-gradient">precision</span>
          </h2>
          <p className="section-subtitle">
            A look into my engineering philosophy, educational background, and technical drive.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Column */}
          <div className="about-bio-card glass-card">
            <h3 className="about-bio-title">
              Passionate Developer & NIT Jamshedpur Alumnus
            </h3>
            <div className="about-bio-text">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about-quote">
              <Terminal size={18} className="quote-icon" />
              <span>
                "Committed to writing maintainable, clean code that translates complex business requirements into elegant software."
              </span>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="about-strengths-grid">
            {highlights.map((item, index) => (
              <div key={index} className="strength-card glass-card">
                <div className="strength-icon-wrapper">{item.icon}</div>
                <h4 className="strength-title">{item.title}</h4>
                <p className="strength-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
