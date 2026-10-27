export const freelancerData = {
  persona: 'freelancer',
  title: 'Full Stack & GenAI Freelance Consultant',
  name: 'Vinay Gupta',
  brand: 'Vinay Gupta',
  brandBadge: 'VG',
  badge: 'Accepting New Contracts, MVPs & Mobile Apps',
  tagline:
    'Helping founders, startups, and product teams build production-grade web applications, cross-platform Expo mobile apps, and multi-agent AI systems with speed, security, and precision.',
  education: 'NIT Jamshedpur (MCA) • 2+ Yrs Production Experience',
  location: 'Remote (Worldwide Delivery)',
  email: 'vinaygupta.nitjsr@gmail.com',
  github: 'https://github.com/vinaytheprogrammer',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',

  navLinks: [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],

  metrics: [
    { label: 'Average MVP Delivery', value: '2–4 Weeks Turnaround' },
    { label: 'Mobile & Web Stack', value: 'React Native Expo • React 18' },
    { label: 'GenAI & Microservices', value: 'Mastra • Bedrock • Fastify' },
    { label: 'Delivery Track Record', value: '100% On-Time Delivery' },
  ],

  bio: [
    'I am an Independent Full Stack, Mobile & Generative AI Technical Consultant and NIT Jamshedpur (MCA) alumnus with over 2 years of enterprise engineering experience.',
    'I partner with ambitious founders, business owners, and engineering teams to turn ideas into scalable web applications, deploy autonomous multi-agent AI systems, build cross-platform mobile apps using React Native & Expo, and engineer high-throughput backend services.',
    'My freelance consulting portfolio spans diverse technical challenges—from architecting end-to-end 3-in-1 food delivery mobile platforms (OyeKake) and bespoke legal intake portals (LegisForum) to autonomous AI agents (Mastra & MCP) and full-stack healthcare platforms.',
    'Whether you need a full-stack MVP delivered in 3 weeks, custom AI agents connected to your database via pgvector & MCP, an Expo Android app deployed to Google Play, or an experienced engineer to unblock critical technical debt, I provide transparent communication, weekly demo builds, and clean code you can scale.',
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
      id: 'mobile',
      title: 'Cross-Platform Mobile Apps (React Native & Expo)',
      badge: 'Android & iOS',
      description:
        'Engineer lean, high-performance mobile apps with React Native and Expo, featuring role-based workflows, in-app payments, and automated cloud builds.',
      deliverables: [
        'Single unified React Native / Expo codebase supporting multi-role in-app flows',
        'Offline caching, push notifications, and device hardware integrations (GPS, audio, camera)',
        'Native navigation intents (Google Maps, WhatsApp support launchers) to eliminate SDK overhead',
        'Payment gateway integration with Razorpay (UPI, cards, netbanking) & Stripe',
        'Standalone APK and production AAB compilation via Expo EAS Build with Google Play deployment',
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
      title: 'Codebase Modernization & Framework Refactoring',
      badge: 'Code Quality',
      description:
        'Modernize existing codebases, refactor outdated dependencies, and optimize performance and security without breaking production flows.',
      deliverables: [
        'Upgrading legacy React / Node.js applications to modern Vite and TypeScript',
        'UI component refactoring, Tailwind CSS modernization, and responsive optimization',
        'Security vulnerability remediation (Trivy CVEs, OWASP Top 10 hardening)',
        'Database query optimization, indexing, and connection pool tuning',
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
        'AWS cloud infrastructure provisioning using Terraform (EKS clusters, S3, IAM, EC2)',
        'Database migrations, schema versioning, and zero-downtime data synchronizations',
        'Scheduled cron job creation, background queues (BullMQ/K8s CronJobs), and worker deployments',
        'Security hardening against IDOR, CSRF, and injection attacks',
        'Docker containerization and automated GitHub Actions CI/CD workflows',
      ],
    },
  ],

  caseStudies: [
    {
      title: 'OyeKake — 3-in-1 Food Delivery Platform',
      category: 'Mobile & MERN Platform',
      badge: 'React Native & Expo Android',
      client: 'Food Tech Startup Client',
      summary:
        'Architected and delivered a lean, cost-efficient food delivery platform featuring a unified 3-in-1 Android mobile app (Customer, Kitchen, and Delivery Partner roles in one app) backed by a MERN web administration console.',
      impact:
        'Eliminated expensive recurring map SDK charges and multi-app overhead through smart scope engineering: 4-stage visual order tracking, 1-tap Google Maps navigation, and cloud EAS compilation within a strict ₹1.20L client budget.',
      highlights: [
        'Unified 3-in-1 Android App (Expo): Single React Native codebase delivering in-app roles for Customers (menu browsing & checkout), Kitchens (audio chime alerts & order acceptance), and Riders (pickup, navigation & OTP verification).',
        '4-Stage Order Status Tracker: Visual milestone tracking (Placed ➔ Cooking ➔ Out for Delivery ➔ Delivered) with secret 4-digit delivery confirmation OTP to prevent false drop-offs.',
        'MERN Super Admin & City Dispatch Portal: React 18 + Vite operations console managing 15% platform commission take-rate, vendor payout reconciliations, restaurant KYC, and live city delivery queues.',
        'Zero-Overhead Rider Navigation: 1-Tap Google Maps intent launching native turn-by-turn navigation without costly in-app map SDK licenses.',
        'Integrated Razorpay Payments: Supports UPI, debit/credit cards, netbanking, and Cash on Delivery (COD).',
      ],
      stack: ['React Native', 'Expo & EAS Build', 'Node.js', 'Express', 'MongoDB Atlas', 'Razorpay', 'Vite'],
      pocUrl: 'https://github.com/vinaytheprogrammer/oyekake-poc',
      quoteUrl: 'https://vinaytheprogrammer.github.io/oyekake-mvp-quotation/',
    },
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
    {
      title: 'Dispensary Management System',
      category: 'Full Stack Web Platform',
      badge: 'Healthcare & Inventory',
      client: 'Healthcare Operations',
      summary:
        'Full-stack medical dispensary and inventory management web application with campus ID validation, patient medical history tracking, and automated stock alerts.',
      impact:
        'Streamlined medication dispensing and automated low-stock replenishment warnings with comprehensive historical audit logs.',
      highlights: [
        'Role-based access control and patient authentication workflow using JWT and Express.',
        'Automated inventory replenishment tracking and historical medical event auditing.',
        'Responsive React interface with dynamic search and reporting filters.',
      ],
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      pocUrl: 'https://github.com/vinaytheprogrammer/Dispensary_management_sys',
      quoteUrl: 'https://dispensary-management-sys.vercel.app/',
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

  techStack: [
    {
      id: 'mobile',
      category: 'Mobile & Cross-Platform',
      badge: 'React Native & Expo',
      highlight: 'Unified Android & iOS Codebases • Google Play Deployment',
      description:
        'Lean, high-performance mobile apps built with React Native and Expo, featuring offline storage, push notifications, and device hardware integrations without recurring SDK license fees.',
      skills: [
        { name: 'React Native', level: 'Production Ready', tag: 'Core Mobile' },
        { name: 'Expo & EAS Build', level: 'Production Ready', tag: 'Cloud Compilation' },
        { name: 'Native Navigation Intents', level: 'Production Ready', tag: 'Zero-Cost Maps' },
        { name: 'Hardware APIs (GPS & Audio)', level: 'Production Ready', tag: 'Device APIs' },
        { name: 'In-App Push Notifications', level: 'Production Ready', tag: 'Retention' },
        { name: 'Google Play Store Releases', level: 'Production Ready', tag: 'CI/CD AAB' },
      ],
    },
    {
      id: 'frontend',
      category: 'Frontend & Modern Web',
      badge: 'React 18 & Next.js',
      highlight: 'High-Converting Responsive SPAs & Dashboards',
      description:
        'Modern, lightning-fast web applications engineered with React 18, Next.js, and TypeScript, featuring sleek dark modes, micro-animations, and clean component architectures.',
      skills: [
        { name: 'React 18', level: 'Production Ready', tag: 'Core Web' },
        { name: 'Next.js', level: 'Production Ready', tag: 'SSR & SSG' },
        { name: 'TypeScript', level: 'Production Ready', tag: 'Type Safety' },
        { name: 'Vite', level: 'Production Ready', tag: 'Fast Bundling' },
        { name: 'Tailwind CSS', level: 'Production Ready', tag: 'Modern Styling' },
        { name: 'State Management (Zustand/Context)', level: 'Production Ready', tag: 'State' },
      ],
    },
    {
      id: 'genai',
      category: 'Generative AI & LLMs',
      badge: 'Multi-Agent & RAG',
      highlight: 'Autonomous Workflows • Zero Hallucination Systems',
      description:
        'Production-grade multi-agent architectures, pgvector RAG pipelines, and Model Context Protocol (MCP) servers enabling LLMs to safely query databases and execute multi-step business actions.',
      skills: [
        { name: 'Mastra Multi-Agent Framework', level: 'Production Ready', tag: 'Agent Orchestration' },
        { name: 'AWS Bedrock AgentCore', level: 'Production Ready', tag: 'Foundation Models' },
        { name: 'pgvector RAG Pipelines', level: 'Production Ready', tag: 'Semantic Search' },
        { name: 'Model Context Protocol (MCP)', level: 'Production Ready', tag: 'Tool Servers' },
        { name: 'Structured Outputs (Zod)', level: 'Production Ready', tag: 'Guaranteed Schema' },
        { name: 'LangSmith & OpenTelemetry', level: 'Production Ready', tag: 'Tracing & Observability' },
      ],
    },
    {
      id: 'backend',
      category: 'Backend & High-Throughput APIs',
      badge: 'Fastify & Node.js',
      highlight: 'Low-Latency Microservices & Redis Caching',
      description:
        'Scalable backend services with token-bucket rate limiting, Redis cache-aside architectures, transaction safety, and rigorous input validation.',
      skills: [
        { name: 'Node.js', level: 'Production Ready', tag: 'Runtime' },
        { name: 'Fastify', level: 'Production Ready', tag: 'Low Overhead' },
        { name: 'Express.js', level: 'Production Ready', tag: 'RESTful Microservices' },
        { name: 'Redis Caching & Queues', level: 'Production Ready', tag: 'High Concurrency' },
        { name: 'OAuth 2.0 & JWT Security', level: 'Production Ready', tag: 'Zero-Trust Auth' },
        { name: 'WebSockets & SSE Streaming', level: 'Production Ready', tag: 'Real-Time Sync' },
      ],
    },
    {
      id: 'database',
      category: 'Databases & Cloud Infrastructure',
      badge: 'AWS, EKS & Terraform',
      highlight: 'AWS Cloud • Terraform IaC • Automated Migrations & Cron Jobs',
      description:
        'Relational and NoSQL database management, automated migrations, Infrastructure as Code with Terraform, Amazon EKS Kubernetes orchestration, and resilient scheduled cron jobs.',
      skills: [
        { name: 'AWS Services (EKS, Bedrock, S3, EC2)', level: 'Production Ready', tag: 'Cloud Infrastructure' },
        { name: 'Terraform (IaC)', level: 'Production Ready', tag: 'Infrastructure as Code' },
        { name: 'Kubernetes (Amazon EKS)', level: 'Production Ready', tag: 'Container Orchestration' },
        { name: 'Database Migrations (Prisma/SQL)', level: 'Production Ready', tag: 'Schema Reliability' },
        { name: 'Cron Jobs & Scheduled Tasks', level: 'Production Ready', tag: 'Background Workers' },
        { name: 'PostgreSQL & pgvector', level: 'Production Ready', tag: 'Relational DB' },
        { name: 'MongoDB Atlas', level: 'Production Ready', tag: 'Document DB' },
        { name: 'Docker Containerization', level: 'Production Ready', tag: 'DevOps' },
      ],
    },
    {
      id: 'payments',
      category: 'Payments, Auth & Integrations',
      badge: 'Razorpay & Stripe',
      highlight: 'Turnkey Monetization & Third-Party Connectors',
      description:
        'End-to-end integration of payment gateways, automated transactional notifications, and secure third-party SaaS webhooks.',
      skills: [
        { name: 'Razorpay (UPI, Cards, Netbanking)', level: 'Production Ready', tag: 'Payment Gateway' },
        { name: 'Stripe Payments', level: 'Production Ready', tag: 'Global Billing' },
        { name: 'Google OAuth 2.0 + PKCE', level: 'Production Ready', tag: 'SSO Login' },
        { name: 'Automated Email (Nodemailer / Resend)', level: 'Production Ready', tag: 'Notifications' },
        { name: 'Dynamic Invoicing & Receipts', level: 'Production Ready', tag: 'Billing PDF' },
        { name: 'Third-Party Webhook Handlers', level: 'Production Ready', tag: 'SaaS Connectors' },
      ],
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
        'Codebase refactoring, bug fixes & feature velocity',
        'Roll over unused sprint hours',
      ],
    },
    {
      name: 'Dedicated Contractor',
      badge: 'Full Capacity',
      description:
        'Full-time senior full-stack, mobile & AI engineering capacity embedded directly into your agile product team.',
      features: [
        'Full integration with your sprint rituals and standups',
        'High-velocity code contributions across web, mobile & backend',
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
      question: 'Can you build cross-platform mobile apps for iOS and Android?',
      answer:
        'Yes! I build native-performance mobile apps using React Native and Expo. For example, my OyeKake Food Delivery MVP unified Customer, Restaurant, and Rider experiences into a single Expo Android app with cloud EAS compilation.',
    },
    {
      question: 'How do we communicate throughout the project?',
      answer:
        'I maintain high transparency. We set up a dedicated Slack, Discord, or WhatsApp channel for day-to-day updates, coupled with weekly video walkthroughs and live staging URLs.',
    },
    {
      question: 'Can you work with our existing codebase or legacy systems?',
      answer:
        'Absolutely. I am very comfortable auditing, refactoring, and modernizing existing codebases, resolving technical debt, improving query performance, and updating frameworks.',
    },
    {
      question: 'What happens if there are bugs after delivery?',
      answer:
        'All fixed-scope projects include a complimentary post-launch support and bug warranty window (typically 14 to 30 days) to guarantee smooth operations after going live.',
    },
  ],
};
