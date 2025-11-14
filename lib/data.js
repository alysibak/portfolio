export const projects = [
  {
    title: "PocketChange - Smart Financial Goal Tracking",
    description: "Comprehensive fintech platform with manual transaction entry and premium bank integration via Plaid API. Track spending, set financial goals (donate, invest, save, emergency funds), connect to 25+ investment platforms. Freemium model with automated bank connections for premium users.",
    techStack: "React, TypeScript, Node.js, Express, SQLite, Plaid API, Railway, Vercel",
    githubLink: "https://github.com/alysibak/pocketchange",
    liveLink: "https://pocketchange.vercel.app",
    status: "In Development",
    category: "FinTech"
  },
  {
    title: "3D Interactive Fitness App",
    description: "Comprehensive fitness web application mapping 50+ muscle groups to targeted exercises with 3D visual representations. Interactive responsive design with anatomical accuracy and progression tracking.",
    techStack: "React, Next.js, CSS",
    githubLink: "https://github.com/alysibak/3d-fitness-app",
    status: "In Development",
    category: "Health & Fitness"
  },
  {
    title: "ePortfolio Investment Manager",
    description: "Java application managing stock and mutual fund portfolios with automated transaction processing and fee calculation. Advanced search with multi-criteria filtering using object-oriented design patterns.",
    techStack: "Java, OOP",
    githubLink: "https://github.com/alysibak/portfolio-manager",
    status: "Completed",
    category: "Finance"
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
      "Engineered full-stack admin dashboard (React, TypeScript, PostgreSQL) serving global customer base across North America, Europe, and Australia for hyperspectral imaging systems processing millions of pounds of food products daily",
      "Developed high-performance CSV processing system handling files up to 50MB, reducing bulk incident editing from days to minutes of automated processing",
      "Leveraged AWS (S3, EC2) extensively for debugging, testing, and data collection—exported files, modified UNIX timestamps, and implemented custom fixes",
      "Built dynamic material management interface enabling teams to add/remove materials without deployments, optimizing workflow efficiency by 30%",
      "Automated deployment scripts reducing release time by 75% (2 hours to 30 minutes) for 20+ global facilities, integrating RESTful APIs and optimizing PostgreSQL queries using Agile methodologies"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Guelph",
    duration: "Sep – Dec 2024",
    location: "Guelph, ON",
    description: [
      "Evaluated 250+ student assignments in discrete mathematics, providing detailed feedback on formal logic, proof techniques, and algorithm analysis",
      "Conducted weekly office hours with 80%+ attendance and facilitated exam review sessions for 100+ students",
      "Collaborated with teaching team on grading rubrics, ensuring consistency and quality"
    ]
  }
];

// Blog posts - personal stories
export const blogPosts = [
  {
    id: "finding-internships",
    title: "The Brutal Truth About Finding Internships",
    date: "2024-12-15",
    category: "Career",
    excerpt: "It's hard. Really hard. Here's what nobody tells you about the internship hunt.",
    readTime: "5 min read",
    published: true
  },
  {
    id: "csv-processing-aws",
    title: "Processing 50MB CSVs Without Crashing: What I Learned at P&P",
    date: "2024-12-10",
    category: "Tech Tutorial",
    excerpt: "A real-world tutorial on handling massive CSV files in production with TypeScript and AWS.",
    readTime: "8 min read",
    published: true
  },
  {
    id: "soccer-life",
    title: "Why Soccer Keeps Me Sane During Dev Sprints",
    date: "2024-12-05",
    category: "Life",
    excerpt: "How playing soccer helps me debug better and think clearer.",
    readTime: "4 min read",
    published: true
  },
  {
    id: "swimming-meditation",
    title: "Swimming: My Moving Meditation",
    date: "2024-11-28",
    category: "Life",
    excerpt: "The pool is where I solve my hardest coding problems.",
    readTime: "3 min read",
    published: true
  },
  {
    id: "gym-consistency",
    title: "Lifting Weights Taught Me How to Code Better",
    date: "2024-11-20",
    category: "Life",
    excerpt: "Lessons from the gym that apply directly to software development.",
    readTime: "6 min read",
    published: true
  }
];
