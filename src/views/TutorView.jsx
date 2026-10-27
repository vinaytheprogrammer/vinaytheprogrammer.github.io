import React from 'react';
import TutorHero from '../components/Tutor/TutorHero';
import TutorExperience from '../components/Tutor/TutorExperience';
import TutorCurriculum from '../components/Tutor/TutorCurriculum';
import { TutorMethodology, TutorFaq } from '../components/Tutor/TutorMethodology';
import Contact from '../components/Contact/Contact';
import { tutorData } from '../data/tutorData';

const TutorView = () => {
  return (
    <div className="tutor-view">
      <TutorHero />
      <TutorExperience />
      <TutorCurriculum />
      <TutorMethodology />
      <TutorFaq />
      <Contact
        badge="Mentorship & Tutoring Inquiries"
        title="Ready to master"
        highlightText="Computer Science?"
        subtitle="Book a 1:1 mentorship session, discuss upcoming DSA / CS batches, or ask questions about roadmap and syllabus."
        email={tutorData.email}
        linkedin={tutorData.linkedin}
        github={tutorData.github}
        availabilityText="Enrolling students for 1:1 Data Structures & Algorithms mentorship, university exam preparation (BCA/MCA/B.Tech), and UGC NET JRF Computer Science coaching."
        formSubjectPrefix="Tutoring / Mentorship Inquiry"
      />
    </div>
  );
};

export default TutorView;
