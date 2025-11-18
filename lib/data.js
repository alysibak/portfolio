export const projects = [
  {
    title: "PocketChange",
    description: "Financial tracking app with Plaid integration. Set goals (save, invest, donate), track spending, connect to 25+ investment platforms. Free tier with manual entry, premium for bank automation.",
    techStack: "React, TypeScript, Node.js, Express, SQLite, Plaid API, Railway, Vercel",
    githubLink: "https://github.com/alysibak/pocketchange",
    liveLink: "https://pocket-change-75dq.vercel.app/dashboard",
    status: "In Development",
    category: "FinTech",
    year: "2024",
    impact: "Secure financial tracking for personal wealth management",
    highlights: [
      "Bank account integration via Plaid API",
      "Real-time investment tracking",
      "Goal-based savings automation"
    ]
  },
  {
    title: "3D Fitness App",
    description: "Fitness tracker mapping 50+ muscle groups to exercises with 3D visuals. Click a muscle, see the exercises. Built to learn anatomy while working out.",
    techStack: "React, Next.js, CSS",
    githubLink: "https://github.com/alysibak/3d-fitness-app",
    status: "In Development",
    category: "Health & Fitness",
    year: "2024",
    impact: "Interactive anatomy education for fitness enthusiasts",
    highlights: [
      "50+ muscle groups mapped",
      "3D interactive visualization",
      "Exercise recommendations per muscle"
    ]
  },
  {
    title: "Investment Portfolio Manager",
    description: "Java app for managing stock and mutual fund portfolios. Automated transaction processing, fee calculation, and multi-criteria search. School project that actually works.",
    techStack: "Java, OOP",
    githubLink: "https://github.com/alysibak/ePortfolio",
    status: "Completed",
    category: "Finance",
    year: "2024",
    impact: "Portfolio management tool with automated calculations",
    highlights: [
      "Automated fee calculations",
      "Multi-criteria portfolio search",
      "Transaction processing engine"
    ]
  }
];

// Binary skills - you know it or you don't
export const technicalSkills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS"],
  backend: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "SQLite", "SQL", "Java", "Python", "C"],
  cloudAndAPIs: ["AWS (S3, EC2)", "Plaid API", "JWT Authentication", "Vercel", "Railway"],
  tools: ["Git", "Jira", "Bitbucket", "VS Code", "Chrome DevTools", "Metabase"]
};

export const experience = [
  {
    title: "Software Developer Co-op",
    company: "P&P Optica",
    duration: "May 2025 – Present",
    location: "Waterloo, ON",
    description: [
      "Building admin dashboard with React, TypeScript, and PostgreSQL for hyperspectral imaging systems used globally",
      "Built CSV processing system that handles 50MB files—turned what used to take days into minutes",
      "Work with AWS (S3, EC2) daily for debugging and data collection",
      "Created interface for managing materials without redeploying, which cut workflow time by 30%",
      "Automated deployment scripts, dropping release time from 2 hours to 30 minutes across 20+ facilities"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Guelph",
    duration: "Sep – Dec 2024",
    location: "Guelph, ON",
    description: [
      "Graded assignments and exams for 250+ students in discrete math",
      "Ran weekly office hours and review sessions",
      "Helped develop grading rubrics with the teaching team"
    ]
  }
];

// Key achievements and metrics
export const stats = [
  {
    value: "75%",
    label: "Faster Deployments",
    description: "Cut release time from 2hrs to 30min"
  },
  {
    value: "30%",
    label: "Workflow Improvement",
    description: "Material management efficiency gain"
  },
  {
    value: "50MB",
    label: "Data Processing",
    description: "CSV files handled in minutes, not days"
  },
  {
    value: "20+",
    label: "Global Facilities",
    description: "Deployment automation impact"
  }
];

// Blog posts - tech writings
export const blogPosts = [
  {
    id: "dev-environments",
    title: "Setting Up Development Environments That Don't Suck",
    date: "October 29, 2025",
    category: "Development",
    excerpt: "Nothing kills productivity like fighting with environment setup on day one. Here's what actually works.",
    readTime: "12 min read",
    published: true
  },
  {
    id: "git-workflows",
    title: "Git Workflows That Actually Work for Team Development",
    date: "November 1, 2025",
    category: "Development",
    excerpt: "Working on team projects taught me that Git workflows can make or break productivity. Here's what works.",
    readTime: "10 min read",
    published: true
  }
];
