import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import { sweData } from '../data/sweData';

const SweView = () => {
  return (
    <div className="swe-view">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact
        badge="Engineering Opportunities"
        title="Let's build something"
        highlightText="remarkable"
        subtitle="Whether you have an open software engineering role, distributed systems challenge, or enterprise collaboration, feel free to reach out."
        email={sweData.email}
        linkedin={sweData.linkedin}
        github={sweData.github}
        availabilityText="Available for Full-time Software Engineering roles (Full Stack / GenAI), enterprise engineering teams, and open-source collaborations."
        formSubjectPrefix="Software Engineer Inquiry"
      />
    </div>
  );
};

export default SweView;
