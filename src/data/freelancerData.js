export const freelancerData = {
  persona: 'freelancer',
  title: 'Full Stack & GenAI Freelance Consultant',
  name: 'Vinay Gupta',
  brand: 'Vinay Gupta',
  brandBadge: 'VG',
  badge: 'Accepting New Contracts & MVP Builds',
  tagline:
    'Helping founders, startups, and product teams build production-grade web applications, multi-agent AI systems, and complex framework migrations with speed, security, and precision.',
  education: 'NIT Jamshedpur (MCA) • 2+ Yrs Production Experience',
  location: 'Remote (Worldwide Delivery)',
  email: 'vinaygupta.nitjsr@gmail.com',
  github: 'https://github.com/vinaytheprogrammer',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',

  navLinks: [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Hire Me', href: '#contact' },
  ],

  metrics: [
    { label: 'Average MVP Delivery', value: '2–4 Weeks Turnaround' },
    { label: 'Delivery Track Record', value: '100% On-Time Delivery' },
    { label: 'Core Capabilities', value: 'Full Stack & GenAI Agents' },
    { label: 'Framework Migrations', value: 'Angular 13→19 • React' },
  ],

  bio: [
    'I am an Independent Full Stack & Generative AI Technical Consultant and NIT Jamshedpur (MCA) alumnus with over 2 years of enterprise engineering experience.',
    'I partner with ambitious founders, business owners, and engineering teams to turn ideas into scalable web applications, deploy autonomous multi-agent AI systems, and execute complex framework migrations without production downtime.',
    'My work spans diverse industries and technical challenges—from architecting end-to-end legal tech intake platforms (LegisForum) and maritime micro-frontend analytics (Fleet Management Ltd) to upgrading enterprise vendor portals (Rakuten Group) and engineering secure API gateways.',
    'Whether you need a full-stack MVP delivered in 3 weeks, custom AI agents connected to your database via pgvector & MCP, or an experienced engineer to unblock critical technical debt, I provide transparent communication, weekly demo builds, and clean code you can scale.',
  ],

  services: [
    {
      id: 'mvp',
      title: 'Full-Stack MVP Development (2–4 Weeks)',
      badge: 'Most In-Demand',
      description:
        'Transform your product concept into a launch-ready, secure, and responsive web application with complete database architecture, authentication, and deployment.',
      deliverables: [
        'Complete end-to-end architecture (React 18 / Next.js + Node.js / Fastify)',
        'Database schema design & migrations (PostgreSQL, MongoDB, Prisma ORM)',
        'Enterprise-grade authentication (OAuth 2.0, JWT, cookies, role-based access)',
        'Payment gateway / intake forms / automated email integrations',
        'Production deployment on AWS, Vercel, or DigitalOcean with CI/CD',
      ],
    },
    {
      id: 'genai',
      title: 'Generative AI & Multi-Agent Systems',
      badge: 'High Value',
      description:
        'Automate complex workflows and supercharge your product with production-grade AI agents, RAG pipelines, and Model Context Protocol (MCP) integrations.',
      deliverables: [
        'Multi-agent orchestration (Mastra Framework, AWS Bedrock AgentCore)',
        'RAG knowledge retrieval using pgvector, embeddings, and semantic re-ranking',
        'Model Context Protocol (MCP) tool servers for external API integration',
        'Context engineering: token-budget management & Zod structured output validation',
        'End-to-end conversational UI with markdown streaming and citation badges',
      ],
    },
    {
      id: 'migrations',
      title: 'Enterprise Framework Migrations & Modernization',
      badge: 'Specialized',
      description:
        'Upgrade legacy codebases to modern LTS versions with zero business interruption, resolving breaking changes and security vulnerabilities.',
      deliverables: [
        'Angular upgrades (Angular 12–14 to Angular 19 LTS) with zero workflow regression',
        'Legacy AngularJS / jQuery migrations to modern React 18 or Vite',
        'Material UI / CSS refactoring and responsive design restoration',
        'Trivy & SonarQube vulnerability remediation and dependency auditing',
        'Code modularization and test coverage improvements',
      ],
    },
    {
      id: 'backend',
      title: 'High-Throughput APIs & Cloud Infrastructure',
      badge: 'Performance',
      description:
        'Build and scale backend services, reverse proxies, and microservices engineered for low latency, high concurrency, and cost-effective cloud scaling.',
      deliverables: [
        'Fastify and Express REST APIs with rigorous request validation (Zod / JSON Schema)',
        'Redis cache-aside architectures and token-bucket rate-limiting gateways',
        'Security hardening against IDOR, CSRF, and injection attacks',
        'Real-time streaming (SSE / WebSockets) and transactional job queues',
        'Docker containerization and automated GitHub Actions workflows',
      ],
    },
  ],

  caseStudies: [
    {
      title: 'LegisForum — Legal Tech Intake & Workload Platform',
      category: 'Full Stack Web Platform',
      badge: 'End-to-End Client MVP',
      client: 'Legal Startup & Practice Group',
      summary:
        'Engineered a bespoke legal query resolution and workload management platform from initial requirements gathering to production release.',
      impact:
        'Reduced client intake processing time by 60%, providing advocates with an automated triage dashboard, secure document attachments, and multi-role access controls.',
      highlights: [
        'Engineered responsive client intake flows with dynamic form validation and document uploads.',
        'Built administrative dashboard for query assignment, case status tracking, and advocate workload balancing.',
        'Implemented secure role-based access control (RBAC) protecting sensitive legal inquiries.',
      ],
      stack: ['React 18', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    },
    {
      title: 'Fleet Management Ltd — Maritime Micro-Frontend & Analytics',
      category: 'Enterprise Micro-Frontend',
      badge: 'Maritime SaaS',
      client: 'Fleet Management Ltd',
      summary:
        'Engineered a Single-SPA micro-frontend application for maritime QHSE compliance documents, featuring in-browser PDF rendering and interactive D3.js/Highcharts vessel tracking.',
      impact:
        'Eliminated external PDF viewer dependencies for thousands of shipboard officers and enabled real-time port-of-discharge tracking across global fleets.',
      highlights: [
        'Single-SPA micro-frontend integration adhering to strict enterprise security gates.',
        'In-browser PDF/image rendering engine using pdfjs-dist and Pdf-lib with automated email dispatch.',
        'Interactive Highcharts and D3.js visualization POCs for real-time vessel monitoring.',
      ],
      stack: ['React.js', 'Single-SPA', 'Highcharts', 'D3.js', 'Pdf-lib', 'REST APIs'],
    },
    {
      title: 'Rakuten Group — Enterprise Angular 13 → 19 Migration',
      category: 'Enterprise Modernization',
      badge: 'Framework Migration',
      client: 'Rakuten Group, Inc.',
      summary:
        'Spearheaded the complete version upgrade of Rakuten’s vendor management portal from Angular 13 to Angular 19, resolving breaking Material CSS component changes.',
      impact:
        'Zero regressions in critical vendor purchasing flows; reduced bundle size and eliminated deprecated dependencies.',
      highlights: [
        'Refactored legacy Material CSS components to comply with Angular 19 design tokens.',
        'Maintained 100% feature parity and cross-browser consistency across all modules.',
        'Executed thorough QA test walkthroughs and edge-case regression validation.',
      ],
      stack: ['Angular 19', 'Angular 13', 'TypeScript', 'Material CSS', 'Claude Code'],
    },
    {
      title: 'Custom GenAI Agents & Model Context Protocol (MCP)',
      category: 'Generative AI & LLMs',
      badge: 'AI Automation',
      client: 'AI SaaS & Developer Tooling',
      summary:
        'Engineered autonomous multi-agent systems and custom Model Context Protocol (MCP) servers enabling LLMs to safely query databases and execute multi-step business actions.',
      impact:
        'Enabled autonomous workflow generation with structured Zod outputs, eliminating prompt hallucinations.',
      highlights: [
        'Built pgvector RAG semantic search with document sanitization and re-ranking.',
        'Contributed RESTful mutation capabilities (POST, PATCH, DELETE) to open-source MCP tooling.',
        'Engineered token-budget management layers to prevent context overflow in long-running agent loops.',
      ],
      stack: ['Mastra', 'AWS Bedrock', 'pgvector', 'MCP', 'Fastify', 'Zod', 'LangSmith'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Discovery & Architecture Blueprint',
      description:
        'We kick off with a thorough discovery call to define exact requirements, technical constraints, milestones, and deliver a clear architecture specification.',
      duration: 'Day 1 – 3',
    },
    {
      step: '02',
      title: 'Agile Sprints & Weekly Live Previews',
      description:
        'Development begins in transparent milestones. You get private staging preview links every week so you can test features and provide feedback early.',
      duration: 'Week 1 – 3',
    },
    {
      step: '03',
      title: 'Security Hardening & Quality Assurance',
      description:
        'Before release, code undergoes rigorous security audits: Trivy CVE checks, IDOR vulnerability protection, cross-browser testing, and performance optimization.',
      duration: 'Week 3 – 4',
    },
    {
      step: '04',
      title: 'Production Deployment & Complete Handover',
      description:
        'We deploy to your production cloud domain (AWS, Vercel, DigitalOcean), configure CI/CD pipelines, and deliver clean documentation with 100% IP transfer.',
      duration: 'Final Delivery',
    },
  ],

  pricingModels: [
    {
      name: 'Fixed-Scope MVP',
      badge: 'Best for Startups',
      description:
        'Ideal for new products, feature launches, or well-defined platforms needing a guaranteed turnaround.',
      features: [
        'Fixed milestone-based payment schedule',
        'Defined scope & timeline guarantee (2–4 weeks)',
        'Weekly live staging demos',
        'Production cloud deployment & documentation',
        '2 weeks post-launch bug warranty included',
      ],
    },
    {
      name: 'Sprint / Hourly Retainer',
      badge: 'Best for Growing Teams',
      description:
        'Flexible monthly commitment for ongoing feature development, migrations, or fractional technical consulting.',
      features: [
        'Dedicated hours per week or sprint',
        'Direct Slack / Discord / WhatsApp communication',
        'Daily or bi-weekly syncs & code reviews',
        'Framework migrations, bug fixes & feature velocity',
        'Roll over unused sprint hours',
      ],
    },
    {
      name: 'Dedicated Contractor',
      badge: 'Full Capacity',
      description:
        'Full-time senior full-stack & AI engineering capacity embedded directly into your agile product team.',
      features: [
        'Full integration with your sprint rituals and standups',
        'High-velocity code contributions across frontend & backend',
        'Multi-agent AI & RAG architecture leadership',
        'Priority emergency support & issue remediation',
        'Flexible monthly agreements',
      ],
    },
  ],

  faqs: [
    {
      question: 'How quickly can we kick off a project?',
      answer:
        'I can typically start within 2–5 business days after our discovery call and agreed-upon milestone roadmap.',
    },
    {
      question: 'Do I own all the source code and intellectual property?',
      answer:
        'Yes, 100%. All code, repositories, cloud configurations, and design assets belong entirely to you from day one. Full IP assignment is guaranteed.',
    },
    {
      question: 'How do we communicate throughout the project?',
      answer:
        'I maintain high transparency. We set up a dedicated Slack, Discord, or WhatsApp channel for day-to-day updates, coupled with weekly video walkthroughs and live staging URLs.',
    },
    {
      question: 'Can you work with our existing codebase or legacy systems?',
      answer:
        'Absolutely. Having led complex migrations (such as upgrading enterprise portals from Angular 13 to 19 and integrating micro-frontends), I am very comfortable auditing, refactoring, and modernizing existing codebases.',
    },
    {
      question: 'What happens if there are bugs after delivery?',
      answer:
        'All fixed-scope projects include a complimentary 14-day post-launch support and bug warranty window to guarantee smooth operations after going live.',
    },
  ],
};
