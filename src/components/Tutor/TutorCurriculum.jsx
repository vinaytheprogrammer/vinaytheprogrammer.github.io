import React, { useState } from 'react';
import { BookOpen, Clock, Code, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { tutorData } from '../../data/tutorData';
import './TutorCurriculum.css';

const TutorCurriculum = () => {
  const [selectedCourse, setSelectedCourse] = useState(tutorData.courses[0].id);

  const activeCourse =
    tutorData.courses.find((c) => c.id === selectedCourse) || tutorData.courses[0];

  return (
    <section id="curriculum" className="section tutor-curriculum-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge tutor-badge">Syllabus & Modules</span>
          <h2 className="section-title">
            Curriculum Built for <span className="text-gradient tutor-gradient">Real Understanding</span>
          </h2>
          <p className="section-subtitle">
            Structured courses from fundamentals to placement-level mastery. Choose a module below to inspect the syllabus.
          </p>

          {/* Course Selector Tabs */}
          <div className="curriculum-tabs">
            {tutorData.courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`curriculum-tab ${selectedCourse === course.id ? 'active' : ''}`}
              >
                <span className="tab-title">{course.title}</span>
                <span className="tab-badge">{course.badge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Course Deep Dive Card */}
        <div className="course-detail-card glass-card">
          <div className="course-header-row">
            <div>
              <div className="course-meta-pills">
                <span className="course-pill">
                  <Award size={14} />
                  <span>{activeCourse.level}</span>
                </span>
                <span className="course-pill">
                  <Clock size={14} />
                  <span>{activeCourse.duration}</span>
                </span>
                <span className="course-pill">
                  <Code size={14} />
                  <span>{activeCourse.languages}</span>
                </span>
              </div>
              <h3 className="course-detail-title">{activeCourse.title}</h3>
              <p className="course-detail-desc">{activeCourse.description}</p>
            </div>

            <a
              href="#contact"
              className="btn btn-primary tutor-btn-primary course-enroll-btn"
            >
              <span>Enroll / Inquire</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="syllabus-container">
            <h4 className="syllabus-heading">Topics & Key Concepts Covered:</h4>
            <div className="topics-grid">
              {activeCourse.topics.map((topic, idx) => (
                <div key={idx} className="topic-item">
                  <CheckCircle2 size={16} className="topic-icon" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorCurriculum;
