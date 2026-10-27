import React from 'react';
import { Briefcase, CheckCircle2, GitPullRequest, Award, Users, BookOpen } from 'lucide-react';
import { tutorData } from '../../data/tutorData';
import './TutorExperience.css';

const TutorExperience = () => {
  return (
    <section id="experience" className="section tutor-experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge tutor-badge">Teaching Background</span>
          <h2 className="section-title">
            Educator at <span className="text-gradient tutor-gradient">Codingbits</span> & Mentorship
          </h2>
          <p className="section-subtitle">
            Backed by 2+ years of enterprise software engineering experience, NIT Jamshedpur MCA, and active UGC NET JRF preparation.
          </p>
        </div>

        {/* Why Learn From an Industry Engineer Callout */}
        <div className="tutor-callout-card glass-card">
          <div className="callout-header">
            <Award size={24} className="callout-icon" />
            <div>
              <h3 className="callout-title">The Industry Engineer Advantage</h3>
              <p className="callout-subtitle">
                Why learn from a practicing developer rather than a theoretical instructor?
              </p>
            </div>
          </div>
          <div className="callout-grid">
            <div className="callout-item">
              <span className="callout-check">✓</span>
              <div>
                <strong>Production Standards:</strong> You learn clean code, modular design, and real-world edge cases that pass company code reviews.
              </div>
            </div>
            <div className="callout-item">
              <span className="callout-check">✓</span>
              <div>
                <strong>Git & Pull Request Workflows:</strong> Assignments are submitted and reviewed via GitHub PRs just like in top engineering teams.
              </div>
            </div>
            <div className="callout-item">
              <span className="callout-check">✓</span>
              <div>
                <strong>Interview Realism:</strong> Mock interviews simulate actual hiring rounds at product companies, not generic multiple-choice quizzes.
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="tutor-experience-grid">
          {tutorData.teachingExperience.map((exp, idx) => (
            <div key={idx} className="tutor-exp-card glass-card">
              <div className="tutor-exp-header">
                <div>
                  <span className="tutor-exp-role">{exp.role}</span>
                  <h3 className="tutor-exp-title">{exp.title}</h3>
                </div>
                <span className="tutor-exp-period">{exp.period}</span>
              </div>

              <p className="tutor-exp-summary">{exp.summary}</p>

              <ul className="tutor-exp-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="tutor-check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* GitHub Teaching Repository Feature Box */}
        <div className="teaching-repo-card glass-card">
          <div className="repo-info">
            <div className="repo-badge">
              <GitPullRequest size={16} />
              <span>Open Source Teaching Workflow</span>
            </div>
            <h3 className="repo-title">
              Interactive Assignment Reviews via GitHub
            </h3>
            <p className="repo-desc">
              Explore the public teaching repository where mentees fork code, submit solutions through GitHub Pull Requests, and receive granular line-by-line engineering feedback on time complexity, naming conventions, and edge cases.
            </p>
          </div>
          <a
            href={tutorData.teachingRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary tutor-btn-primary repo-cta"
          >
            <BookOpen size={16} />
            <span>Visit github.com/vinaytheprogrammer/Teaching</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TutorExperience;
