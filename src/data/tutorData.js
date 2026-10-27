export const tutorData = {
  persona: 'tutor',
  title: 'Computer Science Educator & Technical Mentor',
  name: 'Vinay Gupta',
  brand: 'Vinay Gupta',
  brandBadge: 'VG',
  badge: 'Enrolling for 1:1 Mentorship & DSA Cohorts',
  tagline:
    'Bridging the gap between college theory and real-world software engineering. Learn Data Structures, Core CS Fundamentals, and Full-Stack Development from an engineer with 2+ years of production experience.',
  education: 'NIT Jamshedpur (MCA) • UGC NET JRF Aspirant (CS Code 87)',
  location: 'India (Online 1:1 & Cohort Classes)',
  teachingRepo: 'https://github.com/vinaytheprogrammer/Teaching',
  email: 'vinaygupta.nitjsr@gmail.com',
  github: 'https://github.com/vinaytheprogrammer',
  linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',

  navLinks: [
    { name: 'About Teaching', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book Session', href: '#contact' },
  ],

  metrics: [
    { label: 'Industry Experience', value: '2+ Years Production SWE' },
    { label: 'Startup Teaching', value: 'Codingbits (Trainer)' },
    { label: 'Academic Standing', value: 'NIT Jamshedpur MCA' },
    { label: 'Exam Focus', value: 'UGC NET JRF Aspirant' },
  ],

  bio: [
    'I am a Computer Science Educator, Technical Mentor, and active Software Engineer with 2+ years of industry experience building enterprise platforms and Generative AI systems.',
    'I hold a Master of Computer Applications (MCA) from the National Institute of Technology (NIT), Jamshedpur, and am actively preparing for the UGC NET JRF Examination in Computer Science & Applications (Subject Code 87)—bringing both academic rigor and industry execution to my teaching.',
    'As an educator at Codingbits (an EdTech startup) and through personal 1-on-1 mentorship, I have guided college students, postgraduates, and career-switchers to master Data Structures & Algorithms, Core CS subjects (DBMS, OS, Networks), and Full-Stack Engineering.',
    'Unlike traditional rote-learning courses, my mentorship uses an interactive, production-grade GitHub PR review workflow (via github.com/vinaytheprogrammer/Teaching) where students write clean code, receive line-by-line feedback, and develop the instincts needed to clear top technical interviews.',
  ],

  teachingExperience: [
    {
      title: 'Codingbits (Startup)',
      role: 'Technical Trainer & CS Educator',
      period: '2024 – Present',
      summary:
        'Led hands-on training batches and student mentorship at Codingbits, designing structured curricula in programming fundamentals, Data Structures & Algorithms, and modern web development.',
      highlights: [
        'Curriculum Delivery: Taught intensive live coding sessions on Data Structures, Time & Space Complexity analysis, and Object-Oriented System Design.',
        'Hands-on Mentorship: Conducted regular problem-solving bootcamps helping students transition from basic syntax to competitive coding patterns.',
        'Placement Coaching: Guided students through technical screening rounds, code debugging drills, and mock technical interviews with personalized actionable feedback.',
        'Student Engagement: Created structured assignment sets, debugging challenges, and progress trackers that dramatically increased student problem-solving consistency.',
      ],
    },
    {
      title: 'Independent 1:1 CS Mentorship & Cohort Teaching',
      role: 'Private Computer Science Tutor & Mentor',
      period: '2023 – Present',
      summary:
        'Providing tailored 1-on-1 coaching and small-group mentorship for students across NITs, Tier-1/2/3 colleges, and working professionals preparing for software engineering transitions.',
      highlights: [
        'GitHub PR-Based Learning Workflow: Built the open-source Teaching Repository (github.com/vinaytheprogrammer/Teaching) where students submit coding assignments via Pull Requests and receive rigorous line-by-line code reviews.',
        'Customized Student Roadmaps: Developed personalized learning roadmaps based on each student’s current level—from zero coding experience to cracking LeetCode medium/hard patterns.',
        'Core CS Deep Dives: Taught university & competitive-exam level Database Systems (SQL, Normalization, ACID), Operating Systems (CPU Scheduling, Concurrency, Paging), and Computer Networks.',
        'High Student Conversion: Mentored students who successfully secured on-campus placement offers and internship roles in software development.',
      ],
    },
    {
      title: 'UGC NET JRF Aspirant (Computer Science & Applications)',
      role: 'Subject Code 87 Research & Conceptual Depth',
      period: '2024 – Present',
      summary:
        'Rigorous theoretical preparation covering the entire breadth of foundational Computer Science at the national fellowship level.',
      highlights: [
        'Mastery across Discrete Mathematics, Theory of Computation (Automata & Formal Languages), Compiler Design, Advanced DBMS, and Distributed Systems.',
        'Ability to break down complex mathematical proofs, asymptotic notation, and abstract computer science concepts into clear, intuitive mental models.',
      ],
    },
  ],

  courses: [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms (Zero to Placement)',
      badge: 'Most Popular',
      level: 'Beginner to Advanced',
      duration: '8–12 Weeks (Flexible)',
      languages: 'C++, Java, Python, or JavaScript',
      description:
        'A comprehensive, problem-solving-first course designed to build pattern recognition for LeetCode, Codeforces, and top-tier technical interviews.',
      topics: [
        'Time & Space Complexity (Asymptotic Notation, Recurrence Relations)',
        'Arrays, Strings, Two Pointers, Sliding Window & Prefix Sums',
        'Hashing, Bit Manipulation, Math & Number Theory',
        'Linked Lists, Stacks, Queues & Monotonic Deque',
        'Recursion, Backtracking & Branch and Bound',
        'Binary Trees, BSTs, Traversals & Tree DP',
        'Heaps, Priority Queues & Greedy Algorithms',
        'Graphs: BFS, DFS, Dijkstra, Bellman-Ford, Disjoint Set Union (DSU)',
        'Dynamic Programming: 1D, 2D, Knapsack, Longest Common Subsequence, DP on Trees',
      ],
    },
    {
      id: 'core-cs',
      title: 'Core Computer Science Fundamentals',
      badge: 'Academic & Gate/NET',
      level: 'Intermediate',
      duration: '6–8 Weeks',
      languages: 'Theory + SQL / Terminal Labs',
      description:
        'Master the theoretical bedrock of computer science required for university exams, UGC NET, GATE, and senior technical interview rounds.',
      topics: [
        'DBMS: Relational Algebra, ER Diagrams, 1NF to BCNF Normalization, Indexing (B+ Trees)',
        'Transactions: ACID properties, Concurrency Control, Deadlock handling, SQL Queries',
        'Operating Systems: Processes, Threads, CPU Scheduling (FCFS, SJF, RR), Synchronization (Semaphores & Mutex)',
        'Memory Management: Virtual Memory, Paging, Page Replacement Algorithms (LRU, FIFO)',
        'Computer Networks: OSI vs TCP/IP Layers, IPv4/IPv6, Subnetting, Routing (Distance Vector, Link State)',
        'Application Protocols: HTTP/HTTPS, WebSockets, DNS, TCP Handshake, SSL/TLS Handshake',
      ],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web Engineering with Production Standards',
      badge: 'Job Ready',
      level: 'All Levels',
      duration: '8–10 Weeks',
      languages: 'JavaScript, TypeScript, React 18, Node.js',
      description:
        'Learn how to build, test, and deploy modern web applications using the same stack and architectural patterns used in top tech startups.',
      topics: [
        'Modern JavaScript (ES6+), Event Loop, Promises, Async/Await',
        'TypeScript Fundamentals: Types, Interfaces, Generics, and Type Narrowing',
        'React 18: Components, Hooks (useState, useEffect, useMemo, useCallback), Custom Hooks',
        'Backend Engineering: Node.js, Express, Fastify, REST API design, Middleware',
        'Database Modeling: MongoDB with Mongoose, PostgreSQL with Prisma ORM',
        'Authentication & Security: JWT, Cookies, OAuth 2.0, Rate Limiting, OWASP basics',
        'Production Tooling: Git, GitHub Pull Requests, Vite, Docker basics, Cloud Deployment',
      ],
    },
    {
      id: 'mock-interviews',
      title: 'Placement Coaching & Mock Technical Interviews',
      badge: 'High Impact',
      level: 'Placement Aspirants',
      duration: '1–4 Weeks / Per Session',
      languages: 'Candidate Choice',
      description:
        'Simulate real Google / Microsoft / startup technical interview rounds with immediate behavioral and algorithmic feedback.',
      topics: [
        '1-on-1 Live Coding Interview (45–60 mins) under realistic pressure',
        'Evaluation on Problem Solving, Code Cleanliness, and Communication',
        'Systematic hints when stuck without giving away the solution',
        'In-depth ATS-friendly Resume Review and Project Audit',
        'Behavioral & Cultural Interview coaching using the STAR method',
      ],
    },
  ],

  methodology: [
    {
      step: '01',
      title: 'Intuition Before Code',
      description:
        'We never jump straight into code or memorize templates. We visualize the problem on a whiteboard, trace small inputs, and discover the optimal pattern organically.',
    },
    {
      step: '02',
      title: 'Dry-Running Edge Cases',
      description:
        'Learn how senior engineers avoid bugs by dry-running empty inputs, single elements, duplicates, and boundary limits before writing a single line.',
    },
    {
      step: '03',
      title: 'Production-Grade GitHub PRs',
      description:
        'Submit assignments through Git branches and Pull Requests. You receive line-by-line feedback on naming conventions, modularity, and asymptotic efficiency.',
    },
    {
      step: '04',
      title: 'Continuous Retention & Revision',
      description:
        'Spaced repetition problem sets and weekly recap challenges ensure you retain difficult concepts long after the lecture is finished.',
    },
  ],

  faqs: [
    {
      question: 'Who are these tutoring & mentorship sessions for?',
      answer:
        'My sessions are designed for BCA, MCA, and B.Tech students preparing for placements, working professionals wanting to transition into software development, and students preparing for university exams or UGC NET Computer Science.',
    },
    {
      question: 'How do the 1-on-1 sessions work?',
      answer:
        'Sessions are conducted online via Google Meet or Zoom with shared interactive code editors (Live Share / screen share). Every session includes hands-on coding, live question resolution, and post-session assignment reviews on GitHub.',
    },
    {
      question: 'What programming languages can I learn in?',
      answer:
        'I teach Data Structures & Algorithms in C++, Java, Python, or JavaScript based on your preference. For web development, we focus on JavaScript and TypeScript.',
    },
    {
      question: 'What makes your teaching different from recorded YouTube videos or bootcamps?',
      answer:
        'I have 2+ years of active software engineering experience at companies like SourceFuse, Rakuten, and Fleet Management Ltd. I teach how software is built and reviewed in the real world. You get personal attention, live code debugging, and GitHub PR reviews that no pre-recorded video can provide.',
    },
    {
      question: 'How can I book a session or join an upcoming batch?',
      answer:
        'You can send an inquiry directly through the form below or email vinaygupta.nitjsr@gmail.com with your current background, goals, and preferred subjects. We will schedule a free introductory call to assess your roadmap.',
    },
  ],
};
