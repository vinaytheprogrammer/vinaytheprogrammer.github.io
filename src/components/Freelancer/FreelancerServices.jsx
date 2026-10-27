import React from 'react';
import { Rocket, Sparkles, RefreshCw, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { freelancerData } from '../../data/freelancerData';
import './FreelancerServices.css';

const FreelancerServices = () => {
  const icons = [
    <Rocket size={24} className="service-icon" key="0" />,
    <Sparkles size={24} className="service-icon" key="1" />,
    <RefreshCw size={24} className="service-icon" key="2" />,
    <Cpu size={24} className="service-icon" key="3" />,
  ];

  return (
    <section id="services" className="section freelancer-services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">What I Deliver</span>
          <h2 className="section-title">
            Consulting & Engineering <span className="text-gradient freelance-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Tailored offerings to accelerate product releases, automate intelligent workflows, and eliminate legacy technical debt.
          </p>
        </div>

        <div className="services-grid">
          {freelancerData.services.map((service, idx) => (
            <div key={idx} className="service-card glass-card">
              <div className="service-top-row">
                <div className="service-icon-box">{icons[idx % icons.length]}</div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <h4 className="deliverables-heading">Key Deliverables:</h4>
              <ul className="service-deliverables">
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx}>
                    <CheckCircle2 size={15} className="deliverable-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-inquire-link">
                <span>Inquire About This Service</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerServices;
