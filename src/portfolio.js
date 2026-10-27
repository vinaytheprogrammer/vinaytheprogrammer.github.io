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
  role: 'Full Stack & Generative AI Developer | Freelancer & CS Educator',
  tagline: 'Architecting multi-agent LLM systems, full-stack enterprise platforms, open-source tooling, and mentoring future engineers.',
  education: 'NIT Jamshedpur (MCA) • UGC NET JRF Aspirant',
  bio: [
    'I am a Full Stack and Generative AI Developer at SourceFuse Technologies, an active Open Source Contributor, Freelance Consultant, and an alumnus of NIT Jamshedpur (MCA 2025).',
    'Specialized in Generative AI engineering—designing production-grade multi-agent LLM systems (Mastra, AWS Bedrock AgentCore), RAG pipelines with pgvector, and Model Context Protocol (MCP) integrations for enterprise SaaS platforms.',
    'On the client & freelance front, I help founders and businesses build high-performance full-stack MVPs, cross-platform Expo mobile apps, integrate custom AI agents, and build scalable microservices using Fastify, Node.js, Express, React 18, and PostgreSQL.',
    'Passionate about computer science education—rigorously preparing for the UGC NET JRF (Computer Science & Applications) and actively mentoring students in Data Structures, Algorithms, System Design, and Full-Stack Engineering.',
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
    { label: 'Current Role', value: 'SourceFuse Tech' },
    { label: 'GenAI & Agents', value: 'Mastra • Bedrock • MCP' },
    { label: 'Academic & Teaching', value: 'UGC NET JRF Prep • NIT JSR' },
    { label: 'Freelance & Open Source', value: 'Active Consultant & Builder' },
  ],
};

export const experienceAndEducation = [
  {
    type: 'work',
    title: 'SourceFuse Technologies India Pvt Ltd',
    subtitle: 'Junior Software Engineer',
    period: 'Jan 2025 - Present',
    description:
      'Front-line engineer contributing across enterprise client engagements (Fleet Management Ltd, Rakuten Group) and internal Generative AI SaaS initiatives (ARC AI Agent, SourceLoop Microservices).',
    highlights: [
      'ARC AI Agent (May 2026 - Present): Architected multi-agent orchestration foundation using Mastra and AWS Bedrock AgentCore with orchestrator, specialized agents, human-in-the-loop gatekeeper, and Zod-validated structured outputs.',
      'RAG & Context Engineering: Designed pgvector RAG pipeline with re-ranking, PII data sanitization, token-budget management, and LangSmith / OpenTelemetry observability.',
      'Enterprise Auth & Resilience: Built Google OAuth 2.0 + PKCE + Redis-backed refresh token rotation, fixed critical IDOR security vulnerabilities, and re-architected streaming into a fault-tolerant polling system.',
      'Rakuten Group Migration (Feb - Mar 2026): Migrated enterprise vendor platform from Angular 13 to Angular 19, resolving Material CSS component inconsistencies and ensuring cross-browser stability.',
      'Fleet Management Ltd (Aug 2025 - Jan 2026): Developed Single-SPA micro-frontend for QHSE document management (Pdf-lib, CKEditor) and interactive D3.js/Highcharts vessel & POD managers.',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Engineering & Technical Consulting',
    subtitle: 'Full Stack & Generative AI Consultant',
    period: '2024 - Present',
    description:
      'Providing end-to-end software architecture, MVP development, AI integrations, and performance engineering for startups and global clients.',
    highlights: [
      'Delivered custom client platforms including LegisForum (full-stack legal query management portal with custom intake workflows).',
      'Consulting on Model Context Protocol (MCP) tool integrations, pgvector RAG pipelines, and multi-agent workflow automation.',
      'Architected OyeKake 3-in-1 food delivery platform mobile app (React Native & Expo) and healthcare dispensary management systems.',
      'Designing cost-effective, high-throughput backend architectures using Fastify, Node.js, Redis caching, and PostgreSQL.',
    ],
  },
  {
    type: 'education',
    title: 'Computer Science Educator & Technical Mentor',
    subtitle: 'UGC NET JRF Aspirant (Computer Science & Applications)',
    period: '2023 - Present',
    description:
      'Actively preparing for the UGC NET JRF examination while mentoring students in Data Structures & Algorithms, Core Computer Science, and Full-Stack Engineering.',
    highlights: [
      'UGC NET JRF Aspirant (Subject Code 87): Comprehensive theoretical mastery across Discrete Mathematics, DBMS, OS, Computer Networks, and Theory of Computation.',
      'Designed and delivered a Git/GitHub-based assignment submission and code-review curriculum (Teaching Repository) for mentee students.',
      'Conducted 1-on-1 and cohort mentorship sessions on algorithmic problem solving (C++, LeetCode, Codeforces) and placement preparation.',
    ],
  },
  {
    type: 'work',
    title: 'Open Source Creator & Contributor',
    subtitle: 'Active Community Developer',
    period: 'Ongoing',
    description:
      'Publishing and maintaining open-source developer tooling, AI integrations, and security patches in public.',
    highlights: [
      'Extended Model Context Protocol (MCP) server tooling with RESTful resource mutation operations.',
      'Created ChitChat AI (Google Gemini streaming assistant) and API Proxy Server (Redis caching & rate limiting).',
      'Proactively remediating security CVEs (Trivy) and contributing to modern developer ecosystems.',
    ],
  },
  {
    type: 'education',
    title: 'National Institute of Technology (NIT), Jamshedpur',
    subtitle: 'Master of Computer Applications (MCA)',
    period: '2022 - 2025',
    description:
      'Rigorous postgraduate coursework in Data Structures & Algorithms, Distributed Systems, Database Management Systems, Computer Networks, and Object-Oriented System Design.',
    highlights: [
      'Strong algorithmic problem-solving foundation across C++ and Data Structures.',
      'Active developer in collegiate technical initiatives; engineered the campus Dispensary Management System.',
      'Competitive programmer across LeetCode, Codeforces, and HackerRank.',
    ],
  },
  {
    type: 'education',
    title: 'Chhatrapati Shahuji Maharaj University, Kanpur',
    subtitle: 'Bachelor of Computer Applications (BCA)',
    period: '2017 - 2020',
    description:
      'Academic foundation in Computer Science, software engineering methodologies, database design, and object-oriented programming.',
    highlights: [
      'Built early foundations in web development, database modeling, and software architectures.',
      'Graduated with distinction in core computing subjects.',
    ],
  },
];

export const skills = {
  generativeAi: [
    { name: 'Mastra Framework', level: 'Advanced' },
    { name: 'Model Context Protocol (MCP)', level: 'Advanced' },
    { name: 'AWS Bedrock AgentCore', level: 'Advanced' },
    { name: 'RAG Pipelines & pgvector', level: 'Advanced' },
    { name: 'Multi-Agent Orchestration', level: 'Advanced' },
    { name: 'Context Engineering & Budgeting', level: 'Advanced' },
    { name: 'LangSmith & OpenTelemetry', level: 'Proficient' },
    { name: 'Zod (Structured Output Validation)', level: 'Advanced' },
  ],
  languages: [
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'C / C++', level: 'Proficient' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'HTML5 & CSS3 / SCSS', level: 'Advanced' },
    { name: 'Go (Golang)', level: 'Intermediate' },
  ],
  frontend: [
    { name: 'React.js (18+)', level: 'Advanced' },
    { name: 'Angular (13 -> 19)', level: 'Proficient' },
    { name: 'Single-SPA (Micro-Frontends)', level: 'Proficient' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Material CSS / UI', level: 'Proficient' },
    { name: 'Redux Toolkit & Vite', level: 'Advanced' },
    { name: 'Highcharts & D3.js', level: 'Proficient' },
  ],
  backend: [
    { name: 'Fastify', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'LoopBack 4', level: 'Proficient' },
    { name: 'Prisma ORM & Sequelize', level: 'Advanced' },
    { name: 'OAuth 2.0, JWT & PKCE', level: 'Advanced' },
    { name: 'REST & Serverless APIs', level: 'Advanced' },
  ],
  databases: [
    { name: 'PostgreSQL & pgvector', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Redis (Caching & Refresh Tokens)', level: 'Advanced' },
    { name: 'MySQL & SQLite', level: 'Proficient' },
  ],
  toolsAndDevops: [
    { name: 'AWS (Bedrock, S3, SES, Lambda)', level: 'Proficient' },
    { name: 'Git, GitHub & Bitbucket', level: 'Advanced' },
    { name: 'Claude Code', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Postman & API Testing', level: 'Advanced' },
    { name: 'Trivy & SonarQube', level: 'Proficient' },
  ],
};

export const projects = [
  {
    name: 'ARC AI Agent Platform',
    badge: 'GenAI • Multi-Agent SaaS',
    featured: true,
    description:
      'A full-stack enterprise SaaS platform where an LLM-driven multi-agent system transforms project intake forms into complete architecture blueprints in real time with PDF export.',
    highlights: [
      'Orchestrates specialized control-plane, question-critic, and document-generator agents using Mastra and AWS Bedrock AgentCore with human-in-the-loop gatekeeper.',
      'Engineered RAG pipeline with pgvector, re-ranking, static knowledge injection, and PII data sanitization.',
      'Designed multi-pillar context engineering layer: token-budget management, tool-output summarization, and Zod structured outputs.',
      'Built Google OAuth 2.0, JWT, PKCE, and Redis-backed refresh token rotation with multi-tenant access control.',
    ],
    stack: ['React 18', 'Fastify', 'TypeScript', 'Mastra', 'AWS Bedrock', 'Prisma', 'PostgreSQL (pgvector)', 'Redis', 'LangSmith'],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: 'Fleet QHSE Document Management',
    badge: 'Enterprise • Micro-Frontend',
    featured: true,
    description:
      'A Single-SPA micro-frontend platform engineered for Fleet Management Ltd for secure maritime document management, granular role-based permissions, and in-browser previewing.',
    highlights: [
      'Architected role-based user access controls to restrict document visibility across multi-tenant fleet operations.',
      'Implemented in-browser PDF and image rendering using pdfjs-dist and Pdf-lib.',
      'Integrated secure document sharing via automated email dispatch across modular UI components.',
    ],
    stack: ['React.js', 'Single-SPA', 'Pdf-lib', 'pdfjs-dist', 'CKEditor', 'REST APIs'],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: 'Fleet Vessel & POD Interactive Visualizer',
    badge: 'Frontend • Data Visualization',
    featured: true,
    description:
      'Interactive maritime data visualization and analytics dashboard built for Fleet Management Ltd, delivering real-time vessel monitoring and port-of-discharge tracking.',
    highlights: [
      'Engineered dynamic Highcharts and D3.js visualization proof of concepts adhering to maritime analytics standards.',
      'Optimized application responsiveness across shipboard and desktop devices with SonarQube quality refactoring.',
      'Wrote comprehensive unit and component test cases to safeguard visual accuracy and prevent regressions.',
    ],
    stack: ['React.js', 'Highcharts', 'D3.js', 'SonarQube', 'JavaScript'],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: 'Rakuten Vendor Manager Migration',
    badge: 'Enterprise • Angular 19',
    featured: false,
    description:
      'Large-scale enterprise migration of Rakuten’s vendor management portal from Angular 13 to Angular 19, resolving breaking UI component changes and optimizing stability.',
    highlights: [
      'Upgraded Angular framework across enterprise modules while maintaining uninterrupted production workflows.',
      'Refactored Material CSS components to ensure seamless cross-browser consistency and modern design alignment.',
      'Conducted rigorous end-to-end regression testing and QA validation walkthroughs.',
    ],
    stack: ['Angular 19', 'TypeScript', 'Material CSS', 'Claude Code', 'Chrome DevTools'],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: 'Dispensary Management System',
    badge: 'Full Stack • Healthcare',
    featured: true,
    description:
      'Full-stack medical dispensary and inventory management web application with campus ID validation, patient medical history tracking, and automated stock alerts.',
    highlights: [
      'Role-based access control and patient authentication workflow using JWT and Express.',
      'Automated inventory replenishment tracking and historical medical event auditing.',
      'Responsive React interface with dynamic search and reporting filters.',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Dispensary_management_sys',
    livePreview: 'https://dispensary-management-sys.vercel.app/',
  },
  {
    name: 'ChitChat AI Assistant',
    badge: 'AI & Conversational',
    featured: false,
    description:
      'An intelligent chat application powered by Google Gemini API, delivering context-aware responses, clean markdown rendering, conversational memory, and smooth visual feedback.',
    highlights: [
      'Integrated Google Gemini LLM API with stream handling.',
      'Sleek dark-mode interface with instant message dispatch and animated state indicators.',
    ],
    stack: ['JavaScript', 'Google Gemini API', 'Node.js', 'CSS3', 'Express'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Chitchat',
    livePreview: 'https://chitchat-0tk9.onrender.com/',
  },
  {
    name: 'API Proxy Server',
    badge: 'Backend • Infrastructure',
    featured: false,
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
];

export const contact = {
  email: 'vinaygupta.nitjsr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',
  github: 'https://github.com/vinaytheprogrammer',
  location: 'India',
  availability: 'Available for Full-time roles, Freelance projects (GenAI & Full Stack), Open Source collaborations, and 1-on-1 Teaching / Mentorship sessions.',
};
