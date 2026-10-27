export const tutorData = {
  persona: 'tutor',
  title: 'Computer Science Educator & Technical Mentor',
  name: 'Vinay Gupta',
  brand: 'Vinay Gupta',
  brandBadge: 'VG',
  badge: 'Enrolling for 1:1 Mentorship & DSA Cohorts',
  tagline:
    'Bridging the gap between college theory and real-world software engineering. Learn Data Structures, Core CS Fundamentals, Full-Stack Development, and Open Source collaboration from an engineer with 2+ years of production experience.',
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
    { label: 'Mock Interviews', value: 'Junior Placement Coaching' },
    { label: 'Academic Standing', value: 'NIT Jamshedpur MCA' },
  ],

  bio: [
    'I am a Computer Science Educator, Technical Mentor, and active Software Engineer with 2+ years of industry experience building enterprise platforms, mobile applications, and Generative AI systems.',
    'I hold a Master of Computer Applications (MCA) from NIT Jamshedpur and am actively preparing for the UGC NET JRF Examination in Computer Science & Applications (Subject Code 87)—bringing both theoretical rigor and enterprise execution to my teaching.',
    'As an educator at Codingbits (an EdTech startup) and through personal 1-on-1 mentorship, I have conducted extensive mock technical interviews for collegiate juniors, guiding them to sharpen their algorithmic communication, pass stringent campus placement rounds, and build production-grade portfolios.',
    'I am deeply passionate about open source and actively teach students how to break into open source, understand large unfamiliar codebases, master collaborative Git workflows (branches, rebasing, Pull Requests), and work with distributed teams to gain real-world industry exposure before graduating.',
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
      title: 'NIT Jamshedpur Junior Placement Assistance & Mock Interviews',
      role: 'Campus Placement Mentor & Interviewer',
      period: '2023 – Present',
      summary:
        'Conducted simulated technical coding interviews and placement assistance drills for collegiate juniors at NIT Jamshedpur, preparing them to crack product and service software engineering hiring rounds.',
      highlights: [
        '1-on-1 Simulated Interviews: Conducted timed 45–60 minute coding interviews simulating real Google, Amazon, and startup technical rounds.',
        'Actionable Feedback: Evaluated problem-solving intuition, asymptotic complexity trade-offs, edge-case detection, and clear verbal communication.',
        'Resume & Portfolio Audits: Assisted students in structuring ATS-optimized technical resumes, highlighting real projects, and articulating architectural decisions.',
        'High Placement Conversion: Mentored multiple juniors who successfully secured on-campus placement offers and software engineering internships.',
      ],
    },
    {
      title: 'Open Source Mentorship & Team Collaboration Coaching',
      role: 'Open Source Advocate & Community Mentor',
      period: 'Ongoing',
      summary:
        'Empowering students and aspiring developers to contribute to real-world open-source repositories, gain industry exposure, and learn how professional engineering teams collaborate.',
      highlights: [
        'Repository Navigation: Taught students how to discover beginner-friendly issues (`good-first-issue`), read large unfamiliar production codebases, and understand project architectures.',
        'Professional Git Standards: Trained mentees in feature branching, semantic commit conventions, interactive rebasing, and authoring clear, descriptive Pull Requests.',
        'Collaborative Team Etiquette: Guided students on engaging respectfully with maintainers, addressing code review suggestions, and resolving merge conflicts.',
        'Public Proof of Work: Mentored students on leveraging open-source contributions as tangible proof of capability that stands out directly to tech recruiters and engineering leads.',
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
      id: 'mock-interviews',
      title: 'Junior Placement Coaching & Mock Interviews',
      badge: 'Campus Placement',
      level: 'Placement Aspirants',
      duration: '1–4 Weeks / Per Session',
      languages: 'Candidate Choice',
      description:
        'Simulate real Google, Amazon, and startup technical interview rounds with immediate algorithmic, code-quality, and communication feedback.',
      topics: [
        '1-on-1 Timed Live Coding Interviews (45–60 mins) under realistic pressure',
        'Evaluation on Problem Solving Intuition, Code Cleanliness, and Edge-Case Detection',
        'Hints management: how to navigate mental blocks during interviews',
        'ATS-optimized Technical Resume Review & Project Framing Audit',
        'Behavioral & Cultural Interview coaching using the STAR method',
      ],
    },
    {
      id: 'open-source',
      title: 'Open Source Contribution & Collaborative Git Workflows',
      badge: 'Team Exposure',
      level: 'All Levels',
      duration: '3–4 Weeks',
      languages: 'Git, GitHub, Any Tech Stack',
      description:
        'Learn how professional software teams collaborate. Discover open source projects, read real-world codebases, and submit production-ready Pull Requests.',
      topics: [
        'How to search & evaluate beginner-friendly issues (`good-first-issue`) on GitHub',
        'Reading & navigating large unfamiliar production repositories without getting overwhelmed',
        'Git Branching, Interactive Rebasing, Cherry-Picking, and Semantic Commit Messages',
        'Authoring professional Pull Requests with test plans and visual proof',
        'Code review etiquette: addressing maintainer feedback and resolving merge conflicts',
        'Building a public contribution graph that attracts tech recruiters and hiring leads',
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
        'Database Modeling & Migrations: MongoDB with Mongoose, PostgreSQL with Prisma ORM, and schema migration strategies',
        'Authentication & Security: JWT, Cookies, OAuth 2.0, Rate Limiting, OWASP basics',
        'Automation & Background Tasks: Scheduled cron jobs, task workers, and event processing',
        'Cloud Infrastructure & DevOps: Git, GitHub PRs, Docker basics, AWS services, and CI/CD pipelines',
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
      title: 'Open Source & Real Team Collaboration',
      description:
        'Bridge the gap between solo coding and team engineering by contributing to public repositories, reading code, and collaborating through issues and PRs.',
    },
  ],

  faqs: [
    {
      question: 'Who are these tutoring & mentorship sessions for?',
      answer:
        'My sessions are designed for BCA, MCA, and B.Tech students preparing for placements, working professionals wanting to transition into software development, and students preparing for university exams or UGC NET Computer Science.',
    },
    {
      question: 'Do you offer mock interview sessions for college placement drives?',
      answer:
        'Yes! I regularly conduct 1-on-1 mock interviews for collegiate juniors, simulating real-world technical screening and bar-raiser rounds with detailed feedback on algorithmic thinking, communication, and resume optimization.',
    },
    {
      question: 'How do you help students get started with Open Source?',
      answer:
        'I teach students how to find good beginner issues, understand repository architectures, use professional Git branching and PR etiquette, and interact productively with maintainers. Open-source contributions serve as tangible proof of capability for hiring managers.',
    },
    {
      question: 'How do the 1-on-1 sessions work?',
      answer:
        'Sessions are conducted online via Google Meet or Zoom with shared interactive code editors (Live Share / screen share). Every session includes hands-on coding, live question resolution, and post-session assignment reviews on GitHub.',
    },
    {
      question: 'What programming languages can I learn in?',
      answer:
        'I teach Data Structures & Algorithms in C++, Java, Python, or JavaScript based on your preference. For web development, we focus on JavaScript, TypeScript, React, and Node.js.',
    },
    {
      question: 'What makes your teaching different from recorded YouTube videos or bootcamps?',
      answer:
        'I have 2+ years of active software engineering experience at SourceFuse Technologies delivering production systems for global enterprise clients like Rakuten Group and Fleet Management Ltd. I teach how software is built and reviewed in the real world. You get personal attention, live code debugging, and GitHub PR reviews that no pre-recorded video can provide.',
    },
  ],
};
