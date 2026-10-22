export const header = {
  title: 'VG.',
  brand: 'Vinay Gupta',
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
};

export const about = {
  name: 'Vinay Gupta',
  role: 'Full Stack Software Engineer',
  tagline: 'Designing robust backend architectures, distributed services, and responsive web applications.',
  education: 'National Institute of Technology (NIT), Jamshedpur',
  bio: [
    'I am a Full Stack Software Engineer and alumnus of NIT Jamshedpur with a strong passion for designing resilient systems, scalable microservices, and modern user-centric interfaces.',
    'My core expertise spans the JavaScript/TypeScript ecosystem (Node.js, Express, React, LoopBack 4), Go, and C++, with comprehensive experience in database design, authentication mechanisms, and API performance optimization.',
    'Always eager to solve complex engineering challenges and collaborate on impactful, high-scale products.',
  ],
  resume: 'https://drive.google.com/file/d/19om4OGT9LOv5YrqcTWmNHxF7rEnUkMQ0/view',
  location: 'India',
  availableForHire: true,
  social: {
    github: 'https://github.com/vinaytheprogrammer',
    linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',
    email: 'vinaygupta.nitjsr@gmail.com',
  },
  metrics: [
    { label: 'Public Repositories', value: '50+' },
    { label: 'Core Languages', value: 'JavaScript • TypeScript • C++ • Go' },
    { label: 'Alma Mater', value: 'NIT Jamshedpur' },
    { label: 'Focus', value: 'Full Stack & Distributed Systems' },
  ],
};

export const experienceAndEducation = [
  {
    type: 'education',
    title: 'National Institute of Technology (NIT), Jamshedpur',
    subtitle: 'Postgraduate / Computer Applications & Software Engineering',
    period: 'NIT Jamshedpur, India',
    description:
      'Rigorous academic coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Object-Oriented System Design.',
    highlights: [
      'Built algorithmic problem-solving skills across C++ and Data Structures.',
      'Active developer in collegiate tech initiatives and project collaborations.',
    ],
  },
  {
    type: 'work',
    title: 'LegisForum',
    subtitle: 'Freelance Full Stack Developer',
    period: 'Client Engagement',
    description:
      'Engineered a complete legal workload management and customer query resolution platform from ground up.',
    highlights: [
      'Implemented responsive UI with custom styling and seamless user interaction workflows.',
      'Constructed backend services for issue tracking, query handling, and administrative dashboards.',
    ],
  },
  {
    type: 'work',
    title: 'Open Source & Independent Engineering',
    subtitle: 'Software Creator & Contributor',
    period: 'Ongoing',
    description:
      'Developed and deployed over 50 projects spanning AI-powered web tools, API proxies, management portals, and algorithmic utilities.',
    highlights: [
      'Created ChitChat AI leveraging Google Gemini API with conversational context.',
      'Architected campus Dispensary Management System managing inventories and patient records.',
    ],
  },
];

export const skills = {
  languages: [
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'TypeScript', level: 'Proficient' },
    { name: 'C++', level: 'Proficient' },
    { name: 'Go (Golang)', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Proficient' },
    { name: 'HTML5 & CSS3', level: 'Advanced' },
  ],
  frontend: [
    { name: 'React.js', level: 'Advanced' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Proficient' },
    { name: 'Responsive Web Design', level: 'Advanced' },
    { name: 'EJS & Template Engines', level: 'Proficient' },
  ],
  backend: [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'LoopBack 4', level: 'Proficient' },
    { name: 'RESTful API Architecture', level: 'Advanced' },
    { name: 'JWT & OAuth2 Authentication', level: 'Proficient' },
    { name: 'Microservices Design', level: 'Intermediate' },
  ],
  databases: [
    { name: 'MongoDB & Mongoose', level: 'Advanced' },
    { name: 'MySQL', level: 'Proficient' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Redis (Caching)', level: 'Intermediate' },
  ],
  toolsAndDevops: [
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'CI/CD Pipelines', level: 'Intermediate' },
    { name: 'Linux / Bash', level: 'Proficient' },
    { name: 'Postman', level: 'Advanced' },
    { name: 'Cloudinary CDN', level: 'Proficient' },
  ],
};

export const projects = [
  {
    name: 'Dispensary Management System',
    badge: 'Full Stack • Healthcare',
    featured: true,
    description:
      'A full-featured campus dispensary management system designed to streamline medical inventory, track historical patient records, validate university identifications, and automate supply alerts.',
    highlights: [
      'Role-based authentication & patient validation workflows using Passport.js.',
      'Automated inventory replenishment tracking and historical medical event logging.',
      'Responsive interface with Tailwind CSS and React.',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Passport.js'],
    sourceCode: 'https://github.com/vinaytheprogrammer/DispensaryMinor',
    livePreview: 'https://dispensary-management-sys.vercel.app/',
  },
  {
    name: 'ChitChat AI Assistant',
    badge: 'AI & Conversational',
    featured: true,
    description:
      'An intelligent chat application powered by Google Gemini API, delivering context-aware responses, clean markdown rendering, conversational memory, and smooth visual feedback.',
    highlights: [
      'Integrated Google Gemini LLM API with stream handling.',
      'Sleek dark-mode interface with instant message dispatch and animated state indicators.',
    ],
    stack: ['JavaScript', 'Gemini API', 'Node.js', 'CSS3', 'Express'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Chitchat',
    livePreview: 'https://chitchat-0tk9.onrender.com/',
  },
  {
    name: 'API Proxy Server',
    badge: 'Backend • Infrastructure',
    featured: true,
    description:
      'High-throughput API gateway and reverse proxy server featuring in-memory request caching, automated rate-limiting to protect upstream services, and header security sanitization.',
    highlights: [
      'Rate-limiting middleware preventing abuse and DDoS spikes.',
      'Configurable proxy routing with response caching mechanisms for latency reduction.',
    ],
    stack: ['Node.js', 'Express', 'Axios', 'REST API', 'Redis'],
    sourceCode: 'https://github.com/vinaytheprogrammer/API_Proxy_Server',
    livePreview: null,
  },
  {
    name: 'LegisForum',
    badge: 'Client Platform • Freelance',
    featured: false,
    description:
      'Custom web portal developed for a legal consulting firm to manage client inquiries, streamline case workload, and facilitate prompt legal query resolution.',
    highlights: [
      'Custom intake form validation with workload tracking.',
      'Client-first responsive design tested across mobile and desktop breakpoints.',
    ],
    stack: ['JavaScript', 'Bootstrap', 'CSS3', 'Node.js'],
    sourceCode: 'https://github.com/vinaytheprogrammer/legis_forum',
    livePreview: 'https://legisforum.org/',
  },
  {
    name: 'Blog Post Publishing Platform',
    badge: 'Full Stack • Publishing',
    featured: false,
    description:
      'A multi-user content publication engine featuring secure JWT authentication, rich text composition, nested commenting, profile customization, and administrative controls.',
    highlights: [
      'Complete CRUD operations with role-based access control and JWT session tokens.',
      'Server-side rendered dynamic views with EJS and Mongoose schemas.',
    ],
    stack: ['Node.js', 'Express', 'EJS', 'MongoDB', 'JWT', 'Mongoose'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Blog_Post',
    livePreview: 'https://blog-post-75ip.onrender.com/',
  },
  {
    name: 'Cryptographic C++ Engine',
    badge: 'Algorithms • Security',
    featured: false,
    description:
      'A custom encryption and decryption algorithmic suite in C++ utilizing custom mathematical mapping, emoji cipher layers, and robust file stream handling.',
    highlights: [
      'Designed custom substitution cipher logic with deterministic verification.',
      'High-performance C++ file stream I/O and STL memory management.',
    ],
    stack: ['C++', 'STL', 'File I/O', 'Data Structures', 'Cryptography'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Encryption_and_Decryption',
    livePreview: null,
  },
];

export const contact = {
  email: 'vinaygupta.nitjsr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',
  github: 'https://github.com/vinaytheprogrammer',
  location: 'India',
  availability: 'Available for full-time software engineering roles and high-impact freelance projects.',
};
