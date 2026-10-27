import React from 'react';
import FreelancerHero from '../components/Freelancer/FreelancerHero';
import FreelancerCaseStudies from '../components/Freelancer/FreelancerCaseStudies';
import FreelancerServices from '../components/Freelancer/FreelancerServices';
import FreelancerTechStack from '../components/Freelancer/FreelancerTechStack';
import {
  FreelancerProcess,
  FreelancerPricing,
  FreelancerFaq,
} from '../components/Freelancer/FreelancerProcessAndPricing';
import Contact from '../components/Contact/Contact';
import { freelancerData } from '../data/freelancerData';

const FreelancerView = () => {
  return (
    <div className="freelancer-view">
      <FreelancerHero />
      <FreelancerServices />
      <FreelancerCaseStudies />
      <FreelancerProcess />
      <FreelancerTechStack />
      <FreelancerPricing />
      <FreelancerFaq />
      <Contact
        badge="Hire Vinay / Contract Inquiries"
        title="Ready to build your"
        highlightText="MVP or AI System?"
        subtitle="Schedule a free 15-minute discovery consultation or request a fixed-scope milestone quotation."
        email={freelancerData.email}
        linkedin={freelancerData.linkedin}
        github={freelancerData.github}
        availabilityText="Available for high-impact Freelance Projects: Full-Stack MVPs (2–4 weeks), React Native & Expo Mobile Apps, GenAI Agents & MCP integrations, and full-stack architecture advisory."
        formSubjectPrefix="Freelance & MVP Project Inquiry"
      />
    </div>
  );
};

export default FreelancerView;
