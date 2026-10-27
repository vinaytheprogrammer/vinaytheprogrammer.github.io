import React from 'react';
import { Trophy, Award, Sparkles, Medal, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { tutorData } from '../../data/tutorData';
import './TutorAchievements.css';

const TutorAchievements = () => {
  const getAchievementIcon = (id) => {
    switch (id) {
      case 'jmi-jamia':
        return <Trophy size={24} className="achieve-icon trophy-gold" />;
      case 'nimcet':
        return <Award size={24} className="achieve-icon award-emerald" />;
      case 'tancet':
        return <Sparkles size={24} className="achieve-icon sparkles-cyan" />;
      case 'bps-kcnit':
      default:
        return <Medal size={24} className="achieve-icon medal-purple" />;
    }
  };

  return (
    <section id="achievements" className="section tutor-achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge tutor-badge">Academic & Competitive Track Record</span>
          <h2 className="section-title">
            Past Competitive & Academic{' '}
            <span className="text-gradient tutor-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Mentorship grounded in proven examination success and disciplined problem-solving—from securing top All India Ranks to graduating from premier institutions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="tutor-achievements-grid">
          {tutorData.achievements.map((item) => (
            <div key={item.id} className="achievement-card glass-card">
              
              <div className="achievement-top-row">
                <div className="achievement-icon-wrapper">
                  {getAchievementIcon(item.id)}
                </div>
                <div className="achievement-score-badge">
                  <span className="score-type-label">{item.scoreType}</span>
                  <span className="score-value-highlight">{item.score}</span>
                </div>
              </div>

              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-subtitle">{item.subtitle}</p>

                <div className="achievement-meta">
                  <div className="meta-badge date-badge">
                    <Calendar size={14} className="meta-icon" />
                    <span>{item.date}</span>
                  </div>
                  <div className="meta-badge assoc-badge">
                    <Building2 size={14} className="meta-icon" />
                    <span>{item.association}</span>
                  </div>
                </div>

                <p className="achievement-desc">{item.description}</p>
              </div>

              <div className="achievement-footer-tag">
                <CheckCircle2 size={14} />
                <span>{item.badge}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TutorAchievements;
