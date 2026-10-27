export const sweData = {
  persona: 'swe',
  title: 'Full Stack & Generative AI Software Engineer',
  name: 'Vinay Gupta',
  brand: 'Vinay Gupta',
  brandBadge: 'VG',
  badge: 'Available for Full-time Roles & Engineering Teams',
  tagline:
    'Architecting multi-agent LLM systems, enterprise micro-frontends, high-throughput microservices, and distributed cloud applications.',
  education: 'NIT Jamshedpur (MCA 2025)',
  location: 'India',
  resumeUrl: 'https://drive.google.com/file/d/19om4OGT9LOv5YrqcTWmNHxF7rEnUkMQ0/view',
  email: 'vinaygupta.nitjsr@gmail.com',
  github: 'https://github.com/vinaytheprogrammer',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',

  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],

  metrics: [
    { label: 'Current Role', value: 'SourceFuse Tech' },
    { label: 'GenAI & Multi-Agent', value: 'Mastra • Bedrock • MCP' },
    { label: 'Frontend & Micro-Frontends', value: 'React 18 • Angular 19' },
    { label: 'Academic Depth', value: 'NIT Jamshedpur (MCA)' },
  ],

  bio: [
    'I am a Full Stack and Generative AI Developer at SourceFuse Technologies and an alumnus of National Institute of Technology (NIT), Jamshedpur (MCA 2025).',
    'Specialized in Generative AI engineering—architecting production-grade multi-agent LLM systems with Mastra and AWS Bedrock AgentCore, pgvector RAG pipelines, and Model Context Protocol (MCP) server tooling.',
    'Production-proven across enterprise client engagements including Rakuten Group (migrated enterprise vendor portal from Angular 13 to 19 with zero regressions) and Fleet Management Ltd (engineered Single-SPA maritime document management micro-frontends and D3.js/Highcharts visualization POCs).',
    'Deeply focused on software reliability, enterprise auth (OAuth 2.0, PKCE, JWT with Redis token rotation), IDOR vulnerability elimination, and Trivy security remediation across modern TypeScript, Fastify, and React ecosystems.',
  ],

  pillars: [
    {
      id: 'genai',
      badge: 'Multi-Agent LLMs',
      title: 'Generative AI & Multi-Agent Systems',
      description:
        'Architecting production multi-agent LLM systems with Mastra and AWS Bedrock AgentCore, coordinating control-plane, critic, and document-generator agents with human-in-the-loop gatekeepers.',
      capabilities: [
        'Parallel multi-agent execution with Mastra & Bedrock AgentCore',
        'pgvector RAG pipeline with semantic re-ranking & PII sanitization',
        'Context token budgeting, prompt caching & Zod structured schemas',
      ],
      tech: ['Mastra', 'AWS Bedrock', 'pgvector', 'MCP', 'LangSmith', 'Zod'],
    },
    {
      id: 'backend',
      badge: 'Distributed Systems',
      title: 'Enterprise Backend & Microservices',
      description:
        'Designing high-throughput APIs, fault-tolerant polling architectures, and microservices engineered for low latency, security, and high reliability.',
      capabilities: [
        'High-concurrency services using Fastify, Node.js, and Express',
        'Cache-aside architecture & token-bucket rate limiting via Redis',
        'PostgreSQL & MongoDB schema modeling with Prisma & LoopBack 4',
      ],
      tech: ['Fastify', 'Node.js', 'PostgreSQL', 'Redis', 'Prisma', 'REST APIs'],
    },
    {
      id: 'frontend',
      badge: 'Scalable UI',
      title: 'Frontend & Micro-Frontends',
      description:
        'Engineering modular Single-SPA micro-frontend architectures, executing large-scale enterprise framework upgrades, and crafting interactive data dashboards.',
      capabilities: [
        'Single-SPA micro-frontends with in-browser PDF/image rendering',
        'Zero-regression framework migrations: Angular 13 → 19 LTS',
        'Interactive analytics dashboards using D3.js and Highcharts',
      ],
      tech: ['React 18', 'Angular 19', 'Single-SPA', 'TypeScript', 'Highcharts', 'Tailwind'],
    },
    {
      id: 'security',
      badge: 'Zero-Trust Security',
      title: 'Enterprise Security & Hardening',
      description:
        'Implementing bulletproof authentication layers, eliminating multi-tenant authorization flaws, and proactively remediating security vulnerabilities.',
      capabilities: [
        'Google OAuth 2.0 + PKCE with Redis refresh token rotation',
        'IDOR vulnerability elimination across multi-tenant API routes',
        'Trivy CVE remediation and SonarQube code quality enforcement',
      ],
      tech: ['OAuth 2.0', 'PKCE', 'JWT Rotation', 'RBAC', 'Trivy', 'SonarQube'],
    },
  ],

  experiences: [
    {
      type: 'work',
      title: 'SourceFuse Technologies India Pvt Ltd',
      role: 'Junior Software Engineer',
      period: 'Jan 2025 – Present',
      summary:
        'Core engineer across enterprise client engagements (Rakuten Group, Fleet Management Ltd) and internal Generative AI SaaS platforms (ARC AI Agent, SourceLoop Microservices).',
      highlights: [
        'ARC AI Agent (May 2026 – Present): Architected multi-agent parallel execution using Mastra and AWS Bedrock AgentCore, coordinating control-plane, application-plane, question-critic, and document-generator agents with human-in-the-loop gatekeeper.',
        'RAG & Context Engineering: Designed pgvector RAG pipeline with re-ranking algorithms, PII sanitization, token budgeting, tool-output summarization, and LangSmith / OpenTelemetry observability.',
        'Enterprise Auth & Resilience: Built Google OAuth 2.0 + PKCE with Redis refresh token rotation; resolved critical IDOR vulnerabilities and converted unstable real-time SSE streaming into a fault-tolerant polling architecture with transactional job claiming.',
        'Rakuten Group Migration (Feb – Mar 2026): Spearheaded framework upgrade of Rakuten’s vendor management portal from Angular 13 to Angular 19, refactoring Material CSS breaking changes with zero business regression.',
        'Fleet Management Ltd (Aug 2025 – Jan 2026): Engineered Single-SPA micro-frontend for maritime QHSE document management (Pdf-lib, pdfjs-dist) and interactive D3.js/Highcharts vessel tracking maps.',
      ],
    },
    {
      type: 'work',
      title: 'Open Source Creator & Security Contributor',
      role: 'Public Repository Contributor',
      period: 'Ongoing',
      summary:
        'Actively publishing and maintaining open-source developer tooling, AI integrations, and security patches in public.',
      highlights: [
        'Extended Model Context Protocol (MCP) server tooling with RESTful resource mutation operations (POST, PATCH, DELETE, and resource deletion by ID).',
        'Built ChitChat AI (Google Gemini streaming conversational agent) and API Proxy Server (Redis caching & token-bucket rate limiting gateway).',
        'Proactively remediating security CVEs (Trivy) and SonarQube quality gates across open-source codebases.',
      ],
    },
    {
      type: 'education',
      title: 'National Institute of Technology (NIT), Jamshedpur',
      role: 'Master of Computer Applications (MCA)',
      period: '2022 – 2025',
      summary:
        'Rigorous postgraduate curriculum in Data Structures & Algorithms, Distributed Systems, Database Management Systems, Computer Networks, and Object-Oriented System Design.',
      highlights: [
        'Strong algorithmic foundation across C++ and Data Structures; active on LeetCode and Codeforces.',
        'Engineered collegiate Dispensary Management System handling patient records and stock alerts.',
        'Graduated with strong technical and academic standing.',
      ],
    },
    {
      type: 'education',
      title: 'Chhatrapati Shahuji Maharaj University, Kanpur',
      role: 'Bachelor of Computer Applications (BCA)',
      period: '2017 – 2020',
      summary:
        'Academic foundation in Computer Science, software engineering methodologies, database design, and object-oriented programming.',
      highlights: [
        'Built early foundations in web development, database modeling, and software architectures.',
        'Graduated with distinction in core computing subjects.',
      ],
    },
  ],

  projects: [
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
      name: 'API Proxy Server & Rate Limiter',
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
  ],

  skills: {
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
      { name: 'Angular (13 → 19)', level: 'Proficient' },
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
  },
};
