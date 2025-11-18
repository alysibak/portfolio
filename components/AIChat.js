"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaTrash, FaLightbulb } from "react-icons/fa";

// Comprehensive knowledge base with hundreds of responses
const knowledgeBase = {
  // TECHNICAL SKILLS - Frontend
  frontend: {
    keywords: ["react", "frontend", "front-end", "ui", "user interface", "nextjs", "next.js", "tailwind", "css", "html", "javascript framework"],
    responses: [
      "Aly specializes in React and Next.js! He's built several production applications including his portfolio, PocketChange, and the 3D Fitness App. He loves Next.js for its server-side rendering and API routes.",
      "His frontend skills include React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript (ES6+). He's particularly skilled at creating responsive, accessible interfaces.",
      "Aly has been working with React for 2+ years and Next.js for over a year. He's experienced with hooks, context API, custom hooks, and performance optimization techniques.",
      "He's a big fan of Tailwind CSS! If you look at his portfolio, you'll see he uses it extensively. He loves the utility-first approach and how it speeds up development.",
      "Aly believes in component-driven development. He creates reusable, modular components and follows React best practices like proper state management and avoiding prop drilling."
    ]
  },

  // TECHNICAL SKILLS - Backend
  backend: {
    keywords: ["backend", "back-end", "server", "api", "node", "nodejs", "node.js", "express", "database"],
    responses: [
      "Aly's backend expertise includes Node.js, Express, PostgreSQL, and SQLite. He's built RESTful APIs and integrated them with frontend applications.",
      "At P&P Optica, he works extensively with PostgreSQL databases. He's optimized queries and designed efficient database schemas for production applications.",
      "He's experienced with Express.js for building APIs. PocketChange uses a Node.js/Express backend with database integration and authentication.",
      "Aly has worked with both SQL (PostgreSQL, SQLite) and NoSQL (MongoDB) databases. He understands when to use each type based on project requirements.",
      "His backend work includes authentication systems, data processing pipelines, and API integrations with third-party services like Plaid."
    ]
  },

  // TECHNICAL SKILLS - Languages
  languages: {
    keywords: ["typescript", "javascript", "java", "python", "c", "programming language", "coding language"],
    responses: [
      "Aly's primary languages are TypeScript and JavaScript. He's also proficient in Java (used for the Investment Portfolio Manager) and has experience with Python and C.",
      "TypeScript is his go-to for modern web development! He appreciates the type safety and better IDE support it provides. All his recent projects use TypeScript.",
      "He's been coding in JavaScript for 3+ years and picked up TypeScript about 1.5 years ago. The transition made his code more maintainable and bug-free.",
      "Aly learned Java and C through his Computer Science program at University of Guelph. He's comfortable with object-oriented programming and data structures.",
      "For scripting and automation, he uses Python. For systems programming and academic projects, he's worked with C. But for web development, TypeScript is his favorite!"
    ]
  },

  // TECHNICAL SKILLS - Cloud & DevOps
  cloud: {
    keywords: ["aws", "cloud", "deployment", "deploy", "hosting", "vercel", "railway", "docker", "devops"],
    responses: [
      "Aly works with AWS daily at P&P Optica, specifically S3 for storage and EC2 for compute. He's also deployed projects on Vercel and Railway.",
      "For deployment, he uses Vercel for frontend apps (like his portfolio) and Railway for full-stack apps (like PocketChange). Both platforms make deployment super smooth!",
      "He's automated deployment scripts at P&P Optica, reducing release time from 2 hours to 30 minutes across 20+ facilities. Pretty impressive optimization!",
      "Aly has experience with Docker for containerization and has worked on CI/CD pipelines. He understands the importance of automated testing and deployment.",
      "His cloud skills include AWS (S3, EC2), understanding of serverless architectures, and experience with various PaaS platforms like Vercel and Railway."
    ]
  },

  // PROJECTS - PocketChange
  pocketchange: {
    keywords: ["pocketchange", "pocket change", "financial", "finance app", "plaid", "fintech"],
    responses: [
      "PocketChange is Aly's pride and joy! It's a full-stack FinTech app that helps users track spending, set financial goals, and connect to 25+ investment platforms via Plaid API.",
      "The tech stack is impressive: React + TypeScript frontend, Node.js/Express backend, SQLite database, Plaid API integration, deployed on Vercel and Railway.",
      "PocketChange has both free and premium tiers. Free users can manually enter transactions, while premium users get automatic bank account synchronization through Plaid.",
      "The app features real-time investment tracking, goal-based savings (save, invest, donate), and beautiful data visualizations. Check it out at pocket-change-75dq.vercel.app!",
      "Building PocketChange taught Aly about secure financial data handling, API integration, and creating intuitive UX for complex financial workflows.",
      "Fun fact: PocketChange processes and securely stores financial data using industry-standard encryption. Security was a top priority during development!"
    ]
  },

  // PROJECTS - 3D Fitness App
  fitness: {
    keywords: ["3d fitness", "fitness app", "3d app", "muscle", "anatomy", "workout", "exercise"],
    responses: [
      "The 3D Fitness App is unique! It maps 50+ muscle groups to exercises with interactive 3D visualizations. Click on any muscle to see recommended exercises.",
      "Aly built this with React and Next.js, focusing on creating an engaging, educational fitness experience. It's perfect for people who want to understand anatomy while working out.",
      "The app uses 3D models to visualize the human body. Users can rotate, zoom, and click on specific muscles to learn which exercises target them.",
      "Building this project taught Aly about 3D rendering in the browser, complex state management for interactive visualizations, and UX for educational apps.",
      "Fun fact: Aly actually uses this app himself when working out! Talk about dogfooding your own product. 💪",
      "The app includes detailed exercise instructions, proper form tips, and muscle group categorization. It's like having an anatomy textbook and workout guide combined!"
    ]
  },

  // PROJECTS - Investment Portfolio Manager
  investment: {
    keywords: ["investment", "portfolio manager", "java project", "stocks", "mutual funds"],
    responses: [
      "The Investment Portfolio Manager is a Java application Aly built for managing stock and mutual fund portfolios. It handles transaction processing and fee calculations automatically.",
      "This was a school project that actually works! It features automated transaction processing, multi-criteria portfolio search, and detailed fee calculations.",
      "Built entirely in Java using OOP principles, the app demonstrates Aly's understanding of object-oriented design, data structures, and algorithmic thinking.",
      "The portfolio manager includes features like buying/selling stocks, calculating gains/losses, managing multiple portfolios, and generating reports.",
      "This project showcases Aly's ability to build desktop applications with Java, not just web apps. Full-stack really means full-stack!"
    ]
  },

  // EXPERIENCE - P&P Optica
  optica: {
    keywords: ["p&p optica", "p&p", "optica", "current job", "work", "job", "employer"],
    responses: [
      "Aly is currently killing it at P&P Optica! He's a Software Developer Co-op building admin dashboards with React, TypeScript, and PostgreSQL for hyperspectral imaging systems.",
      "His achievements at P&P Optica are impressive: 75% faster deployments (2 hours → 30 minutes), CSV processing optimized to handle 50MB files in minutes instead of days!",
      "He's automated deployments across 20+ global facilities and improved workflow efficiency by 30%. His work directly impacts users worldwide!",
      "At P&P Optica, Aly works with AWS daily (S3 and EC2), builds production dashboards, and solves complex data processing challenges.",
      "The hyperspectral imaging systems he works on are used by facilities around the world. His code helps scientists and researchers analyze data more efficiently.",
      "Working at P&P Optica has taught Aly about enterprise software development, working with legacy systems, and building scalable solutions for global users."
    ]
  },

  // EXPERIENCE - Teaching Assistant
  teaching: {
    keywords: ["teaching assistant", "ta", "teacher", "tutor", "university of guelph", "discrete math"],
    responses: [
      "Aly was a Teaching Assistant for discrete mathematics at University of Guelph (Sep - Dec 2024), helping 250+ students master complex concepts.",
      "He graded assignments and exams, conducted weekly office hours, and ran review sessions. It was rewarding to see students have 'aha!' moments!",
      "Being a TA taught Aly patience, clear communication, and how to explain complex topics simply - skills that transfer directly to writing clean, understandable code.",
      "He helped develop grading rubrics with the teaching team, ensuring fair and consistent evaluation of student work.",
      "Teaching 250+ students while balancing his own coursework and projects required excellent time management and organization skills."
    ]
  },

  // EDUCATION
  education: {
    keywords: ["education", "school", "university", "degree", "student", "study", "guelph", "uog", "computer science"],
    responses: [
      "Aly is studying Computer Science at the University of Guelph. He's balancing coursework with real-world experience at P&P Optica.",
      "University of Guelph has a strong Computer Science program. Aly's learning everything from algorithms and data structures to software engineering principles.",
      "He's currently seeking Summer 2026 co-op opportunities to gain more industry experience and apply his skills to real-world problems!",
      "Aly's academic background in CS complements his practical development experience. He understands both theory and implementation.",
      "At UoG, he's taking courses in data structures, algorithms, software design, and more. The combination of theory and practice makes him a well-rounded developer."
    ]
  },

  // AVAILABILITY & HIRING
  availability: {
    keywords: ["hire", "available", "hiring", "co-op", "coop", "summer", "2026", "opportunity", "work with", "recruit", "position", "job opening"],
    responses: [
      "Perfect timing! Aly is actively seeking Summer 2026 Co-op positions. He's looking for challenging full-stack roles where he can make real impact.",
      "He's especially interested in FinTech, HealthTech, or innovative startups. Companies building products that solve real problems excite him!",
      "Aly is available for Summer 2026. Reach out at asibak@uoguelph.ca - he's always happy to chat about opportunities!",
      "Looking for a developer who can hit the ground running? Aly has production experience with React, TypeScript, Node.js, PostgreSQL, and AWS.",
      "He's open to remote, hybrid, or on-site positions. Location-wise, he's based in Waterloo, ON, but is flexible for the right opportunity!",
      "What makes Aly stand out? He's proven he can deliver real results (75% faster deployments, 30% workflow improvements) and ships production code.",
      "If your company values developers who are passionate about building quality software and continuous learning, Aly would be a great fit!"
    ]
  },

  // CONTACT & NETWORKING
  contact: {
    keywords: ["contact", "email", "reach", "linkedin", "github", "connect", "get in touch", "talk", "message", "reach out"],
    responses: [
      "You can reach Aly at:\n📧 Email: asibak@uoguelph.ca\n💼 LinkedIn: linkedin.com/in/aly-sibak-721b85252\n💻 GitHub: github.com/alysibak",
      "Best way to reach him is email at asibak@uoguelph.ca. He responds quickly and would love to connect!",
      "Connect with Aly on LinkedIn at linkedin.com/in/aly-sibak-721b85252 - he's active there and posts about his projects and learnings.",
      "Check out his code on GitHub at github.com/alysibak! All his projects are open source. Seeing code is the best way to evaluate a developer.",
      "For quick questions or opportunities, email (asibak@uoguelph.ca) is fastest. For networking and staying updated, LinkedIn is great!",
      "Aly believes in building relationships, not just collecting connections. He's genuinely interested in meaningful conversations about tech and opportunities."
    ]
  },

  // ACHIEVEMENTS & IMPACT
  achievements: {
    keywords: ["achievements", "accomplishments", "proud", "best work", "results", "impact", "success"],
    responses: [
      "Aly's standout achievements: 75% faster deployments at P&P Optica, processing 50MB CSV files in minutes (used to take days!), and 30% workflow improvements.",
      "He's made real impact - automating deployments across 20+ facilities worldwide. His work directly helps scientists and researchers work more efficiently!",
      "Building PocketChange from scratch and deploying it to production shows his ability to take an idea from concept to working product.",
      "His 3D Fitness App demonstrates creativity in solving problems - combining fitness and education in an innovative way.",
      "At just the start of his career, Aly's already delivered measurable business value. Imagine what he'll accomplish with more experience!",
      "Teaching 250+ students while maintaining his own projects shows exceptional time management and dedication."
    ]
  },

  // PERSONALITY & WORK STYLE
  personality: {
    keywords: ["personality", "hobbies", "interests", "fun", "about aly", "who is", "person", "character", "work style"],
    responses: [
      "Aly gets excited about turning complex problems into simple, elegant solutions. He's the type of developer who refactors code for fun!",
      "When he's not coding, you'll find him working out (using his own 3D fitness app!), exploring new technologies, or diving deep into productivity tools.",
      "He's passionate about building things that make a difference. Whether it's a financial tracker or a fitness app, impact matters to him.",
      "Aly loves learning new technologies. His GitHub shows he's always experimenting with new tools and frameworks.",
      "He believes in clean code, good documentation, and building products that users actually enjoy using. UX matters!",
      "Fun fact: Aly actually uses his own apps. The 3D Fitness App helps him track workouts, and he dogfoods everything he builds.",
      "He's naturally curious and asks 'why' a lot. Understanding the problem deeply leads to better solutions."
    ]
  },

  // PROBLEM SOLVING
  problemSolving: {
    keywords: ["problem solving", "debugging", "challenges", "difficult", "complex problem", "solve", "approach"],
    responses: [
      "Aly's approach to problem-solving: understand the problem deeply, break it down into smaller pieces, tackle each piece systematically.",
      "When facing a bug, he uses debugging tools effectively, reads error messages carefully, and isn't afraid to dig into documentation or source code.",
      "His CSV processing optimization at P&P Optica is a great example - he identified bottlenecks, profiled the code, and reduced processing time from days to minutes!",
      "Aly believes in the power of console.log() for quick debugging, but also knows when to use proper debugging tools like Chrome DevTools or VS Code debugger.",
      "He's not afraid to ask for help when stuck, but always tries to solve problems independently first. Growth happens outside the comfort zone!",
      "Complex problems excite him. They're opportunities to learn new techniques and tools."
    ]
  },

  // LEARNING & GROWTH
  learning: {
    keywords: ["learning", "study", "improve", "growth", "develop", "currently learning", "what are you learning"],
    responses: [
      "Aly is currently learning advanced React patterns, performance optimization techniques, cloud architecture with AWS, and system design principles.",
      "He's diving deep into Next.js App Router, Server Components, and modern React patterns. Staying current with the ecosystem is important!",
      "Cloud architecture fascinates him - he's learning about scalability, load balancing, caching strategies, and building systems that can handle millions of users.",
      "System design and scalability are his current focus. How do you build systems that scale from 10 to 10 million users? That's the kind of challenge he loves!",
      "Aly learns best by building. Every project teaches him something new - PocketChange taught API integration, the fitness app taught 3D rendering.",
      "He follows industry blogs, watches tech talks, reads documentation, and most importantly, writes code every day. Consistency is key!"
    ]
  },

  // FAVORITE TECHNOLOGIES
  favorites: {
    keywords: ["favorite", "love", "prefer", "best technology", "like most"],
    responses: [
      "Aly's favorite tech stack: React + TypeScript + Next.js for frontend, Node.js + Express for backend, PostgreSQL for database, Tailwind for styling.",
      "TypeScript is a game-changer! The type safety catches bugs before runtime and makes refactoring so much easier.",
      "He loves Next.js for its developer experience - file-based routing, API routes, server-side rendering, and easy deployment to Vercel.",
      "Tailwind CSS speeds up his development significantly. Utility-first CSS just makes sense, and his portfolio is proof of how beautiful it can be!",
      "For databases, PostgreSQL is his go-to for production apps. It's reliable, feature-rich, and has great tooling.",
      "VS Code is his editor of choice, with extensions like ESLint, Prettier, and GitHub Copilot making him more productive."
    ]
  },

  // TEAMWORK & COLLABORATION
  teamwork: {
    keywords: ["team", "collaborate", "work with others", "team player", "collaboration", "pair programming"],
    responses: [
      "Aly has experience working in teams at P&P Optica and as a TA collaborating with teaching staff.",
      "He believes in clear communication, documenting decisions, and writing self-explanatory code that his teammates can understand.",
      "Code reviews are valuable to him - both giving and receiving feedback helps everyone grow as developers.",
      "At P&P Optica, he works with distributed teams across 20+ facilities. Clear communication and good documentation are essential!",
      "He's comfortable with Git workflows, PR reviews, and async collaboration - essential skills for modern development teams.",
      "Aly values diverse perspectives. The best solutions often come from combining different viewpoints and experiences."
    ]
  },

  // TOOLS & SETUP
  tools: {
    keywords: ["tools", "setup", "environment", "editor", "ide", "vs code", "workflow"],
    responses: [
      "Aly's development setup: VS Code with extensions like ESLint, Prettier, GitLens, and GitHub Copilot. Chrome DevTools for debugging.",
      "His workflow includes Git for version control, npm for package management, Postman for API testing, and various CLI tools.",
      "He's a keyboard shortcut enthusiast! Efficiency in the editor means more time for actual problem-solving.",
      "For database work, he uses tools like pgAdmin for PostgreSQL and various SQL clients. Visual tools help when designing schemas.",
      "Aly uses Jira and Bitbucket at P&P Optica for project management and code collaboration.",
      "His terminal is zsh with various aliases for common commands. Automation wherever possible!"
    ]
  },

  // ADVICE FOR OTHERS
  advice: {
    keywords: ["advice", "tip", "suggestion", "recommend", "should i", "how to", "beginner"],
    responses: [
      "Aly's advice for aspiring developers: build projects, lots of them! Theory is important, but you learn by doing.",
      "Don't get stuck in tutorial hell. Follow one tutorial to learn basics, then build your own project applying those concepts.",
      "Focus on fundamentals first - JavaScript, data structures, algorithms. Frameworks come and go, but fundamentals last.",
      "Read other people's code! GitHub is full of well-written open source projects. Learn from experienced developers.",
      "Don't be afraid to deploy your projects. Getting something live, even if imperfect, teaches you so much about real-world development.",
      "Aly recommends finding a community - whether Discord, Reddit, or local meetups. Learning with others is more fun and effective!",
      "Document your learning journey. A blog or dev.to posts help you process knowledge and build your online presence.",
      "Be patient with yourself. Everyone starts as a beginner. Consistency over time beats cramming and burnout."
    ]
  },

  // INSPIRATION & MOTIVATION
  inspiration: {
    keywords: ["inspire", "motivation", "why", "passion", "drive", "what motivates"],
    responses: [
      "What drives Aly? Seeing people use software he built and having it actually solve their problems. Impact motivates him!",
      "He's inspired by developers who build in public, share their knowledge, and contribute to open source. Giving back to the community matters.",
      "The idea that code written today can help thousands of people tomorrow - that's powerful and motivating!",
      "Aly's passion comes from the creative aspect of coding. Building something from nothing, seeing it come to life, is incredibly satisfying.",
      "He's motivated by continuous learning. Technology moves fast, and there's always something new to explore and master.",
      "Knowing that his work at P&P Optica helps researchers and scientists around the world keeps him motivated every day."
    ]
  },

  // FUN FACTS
  funFacts: {
    keywords: ["fun fact", "interesting", "random", "tell me more", "cool"],
    responses: [
      "Fun fact: Aly actually uses his own 3D Fitness App when working out! Talk about eating your own dog food. 💪",
      "He's optimized CSV processing from DAYS to MINUTES at P&P Optica. Imagine the time saved across 20+ facilities!",
      "Aly's portfolio website itself is a showcase of his skills - custom SVG animations, AI chatbot, interactive components. Meta!",
      "He helped 250+ students as a TA while juggling his own coursework and building projects. Time management level: expert!",
      "His GitHub shows he's been consistently coding for years. Green squares everywhere = dedication!",
      "Aly built PocketChange to scratch his own itch - he wanted better financial tracking. Best projects solve personal problems first!"
    ]
  },

  // CHALLENGES & FAILURES
  challenges: {
    keywords: ["challenge", "difficult", "hard", "struggle", "failure", "mistake", "learn from"],
    responses: [
      "One of Aly's biggest challenges was optimizing the CSV processing at P&P Optica. It took days of profiling and iteration, but reducing processing time from days to minutes was worth it!",
      "Integrating Plaid API into PocketChange had its moments. Financial APIs require careful error handling and security considerations. He learned a lot about API integrations!",
      "Balancing TA work, classes, projects, and P&P Optica taught him about prioritization and time management. Not every day is perfect, but consistency wins.",
      "He's learned that premature optimization is real. Sometimes it's better to ship first, then optimize based on actual usage patterns.",
      "Early on, Aly didn't document his code well. Returning to old projects taught him the value of good comments and documentation!",
      "Failures and challenges are learning opportunities. Every bug fixed makes you a better debugger. Every performance issue solved teaches optimization."
    ]
  },

  // FUTURE PLANS & GOALS
  future: {
    keywords: ["future", "goal", "plan", "dream", "aspiration", "5 years", "career"],
    responses: [
      "Aly's short-term goal: land an amazing Summer 2026 co-op where he can grow, learn, and make real impact!",
      "Long-term, he wants to work on products that help millions of people. Whether that's at a startup or big tech, impact matters most.",
      "He's interested in fintech and healthtech - areas where technology can directly improve people's lives.",
      "Aly plans to keep building projects, contributing to open source, and sharing his learning journey with the community.",
      "Eventually, he'd love to lead engineering teams and mentor junior developers. Giving back is important to him!",
      "His dream? Build a product that solves a real problem for people, grows to serve millions, and makes a positive impact on the world."
    ]
  },

  // LOCATION & WORK PREFERENCES
  location: {
    keywords: ["location", "where", "based", "live", "city", "remote", "office", "hybrid"],
    responses: [
      "Aly is based in Waterloo, Ontario - the heart of Canadian tech! He works at P&P Optica here and studies at University of Guelph.",
      "He's open to remote, hybrid, or on-site positions for Summer 2026. Flexible on location for the right opportunity!",
      "Waterloo has a great tech scene with companies like Shopify, Google, and many startups. Being here keeps him connected to the tech community.",
      "While based in Waterloo, Aly has worked with distributed teams at P&P Optica (20+ global facilities). Remote collaboration is second nature!",
      "For co-op positions, he's willing to relocate temporarily if it's an amazing opportunity and learning experience."
    ]
  },

  // GREETINGS & PLEASANTRIES
  greeting: {
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "sup", "yo"],
    responses: [
      "Hello! 👋 I'm here to help you learn about Aly. Feel free to ask about his skills, projects, experience, or anything else!",
      "Hi there! Happy to answer any questions about Aly's work, skills, availability, or projects. What would you like to know?",
      "Hey! Great to chat with you. I can tell you all about Aly's experience, technical skills, projects, and more. What interests you?",
      "Good to see you! I'm Aly's AI assistant and I know everything about his work. Ask away!",
      "Greetings! Ready to learn about an awesome developer? Fire away with your questions!"
    ]
  },

  // THANKS & APPRECIATION
  thanks: {
    keywords: ["thank", "thanks", "appreciate", "helpful", "awesome", "great", "perfect"],
    responses: [
      "You're welcome! Feel free to reach out to Aly directly at asibak@uoguelph.ca if you have more questions. 😊",
      "Happy to help! Don't hesitate to contact Aly if you'd like to chat further - he responds quickly!",
      "Glad I could help! If you're interested in working with Aly, definitely reach out. He's actively seeking Summer 2026 opportunities!",
      "My pleasure! Check out his projects on GitHub (github.com/alysibak) to see his code. That's the best way to evaluate a developer!",
      "Anytime! Connect with Aly on LinkedIn or shoot him an email. He'd love to hear from you!"
    ]
  },

  // GENERAL SKILLS
  skills: {
    keywords: ["skills", "tech stack", "technologies", "languages", "frameworks", "what do you know", "what can you do", "technical"],
    responses: [
      "Aly's tech stack is solid: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, SQLite, AWS (S3, EC2), Tailwind CSS, Git, Docker, and more!",
      "He's a true full-stack developer - comfortable with frontend (React, Next.js, TypeScript), backend (Node.js, Express), and databases (PostgreSQL, MongoDB).",
      "Programming languages: TypeScript/JavaScript (expert), Java (proficient), Python (proficient), C (familiar). Plus HTML, CSS, SQL.",
      "Aly's cloud skills include AWS (S3, EC2), deployment on Vercel and Railway, Docker for containerization, and CI/CD automation.",
      "He's experienced with modern dev tools: Git, VS Code, Chrome DevTools, Postman, Jira, Bitbucket, npm, and various CLI tools.",
      "His skill set covers: Frontend development, Backend APIs, Database design, Cloud deployment, DevOps automation, and Performance optimization."
    ]
  },

  // ALL PROJECTS
  projects: {
    keywords: ["projects", "portfolio", "what did you build", "what have you made", "work", "built"],
    responses: [
      "Aly has built some impressive projects! PocketChange (FinTech app), 3D Fitness App (interactive anatomy), Investment Portfolio Manager (Java), and this amazing portfolio!",
      "Check out PocketChange at pocket-change-75dq.vercel.app - a full-stack financial tracking app with Plaid API integration. It's live and working!",
      "His 3D Fitness App maps 50+ muscle groups to exercises with interactive 3D visualizations. Perfect blend of fitness and tech!",
      "The Investment Portfolio Manager shows his Java skills - automated transaction processing, fee calculations, and portfolio management.",
      "Even this portfolio is a project! Custom SVG animations, AI chatbot (that's me!), interactive skill badges, and timeline visualization.",
      "All his projects are on GitHub at github.com/alysibak. Check them out - the code quality speaks for itself!",
      "Each project solved a real problem: PocketChange for financial tracking, 3D Fitness for workout education, Portfolio Manager for investment management."
    ]
  },

  // EXPERIENCE GENERAL
  experience: {
    keywords: ["experience", "work", "job", "employment", "co-op", "career"],
    responses: [
      "Aly is currently a Software Developer Co-op at P&P Optica (May 2025 - Present) and was a TA at University of Guelph (Sep - Dec 2024).",
      "At P&P Optica, he's achieved: 75% faster deployments, 30% workflow improvements, and optimized CSV processing from days to minutes!",
      "His work impacts users globally - he's automated deployments across 20+ facilities worldwide at P&P Optica.",
      "As a TA, Aly helped 250+ students master discrete mathematics while developing his communication and teaching skills.",
      "Real production experience with React, TypeScript, PostgreSQL, AWS, and Node.js. He's shipped code that serves users worldwide!",
      "The combination of development work at P&P Optica and teaching experience as a TA makes him well-rounded - he can build AND explain complex concepts."
    ]
  },

  // SALARY & COMPENSATION (tactful responses)
  salary: {
    keywords: ["salary", "pay", "compensation", "wage", "money", "cost"],
    responses: [
      "Aly is focused on finding opportunities where he can learn, grow, and make real impact. For specific compensation discussions, best to reach out to him directly!",
      "He's looking for fair market compensation for co-op positions. The most important factors are learning opportunities and work culture!",
      "Compensation is important, but Aly values growth, mentorship, and working on meaningful projects just as much. Let's chat about the opportunity!",
      "For Summer 2026 co-op salary expectations, Aly is flexible and more interested in the right fit. Contact him at asibak@uoguelph.ca to discuss!"
    ]
  },

  // DEFAULT RESPONSES (when no keywords match)
  default: {
    keywords: [],
    responses: [
      "I'm not sure about that, but I can tell you about Aly's skills, experience, projects, or how to contact him. What would you like to know?",
      "Hmm, I don't have information about that. Try asking about his tech stack, work experience at P&P Optica, or his cool projects like PocketChange!",
      "I can help you learn about Aly's experience, skills, projects, availability, or how to reach him. What interests you most?",
      "That's outside my knowledge base! But I'm an expert on Aly's work. Ask me about his projects, technical skills, or achievements!",
      "Not sure about that one! How about asking me about Aly's React expertise, his work at P&P Optica, or his Summer 2026 availability?",
      "I specialize in Aly-related questions! Try asking about his skills, projects, experience, or future goals. 😊"
    ]
  }
};

// Updated quick questions with more variety
const quickQuestionSets = [
  ["What are your skills?", "Tell me about your projects", "Are you available for hire?", "What's your experience?"],
  ["What's your tech stack?", "Tell me about PocketChange", "What did you achieve at P&P Optica?", "What are your goals?"],
  ["What technologies do you use?", "Tell me about the 3D Fitness App", "Why should we hire you?", "What are you learning?"],
  ["Do you know React?", "What's your best project?", "Are you seeking co-op opportunities?", "Tell me about yourself"]
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Aly's AI assistant with extensive knowledge about his experience, skills, and projects. Ask me anything! 👋",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [quickQuestions, setQuickQuestions] = useState(quickQuestionSets[0]);
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Rotate quick questions periodically
  useEffect(() => {
    if (isOpen && messages.length > 3) {
      const randomSet = quickQuestionSets[Math.floor(Math.random() * quickQuestionSets.length)];
      setQuickQuestions(randomSet);
    }
  }, [messages.length, isOpen]);

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Track matching categories for better responses
    const matchingCategories = [];

    // Check each category
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category === "default") continue;

      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        matchingCategories.push({ category, data });
      }
    }

    // If multiple categories match, pick the most specific one (most keywords matched)
    if (matchingCategories.length > 0) {
      const bestMatch = matchingCategories.sort((a, b) => {
        const aMatches = a.data.keywords.filter(k => lowerMessage.includes(k)).length;
        const bMatches = b.data.keywords.filter(k => lowerMessage.includes(k)).length;
        return bMatches - aMatches;
      })[0];

      const responses = bestMatch.data.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Default response
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      type: "user",
      text: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const response = findResponse(messageText);
      const botMessage = {
        type: "bot",
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 1000);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
    setShowSuggestions(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        type: "bot",
        text: "Hi! I'm Aly's AI assistant with extensive knowledge about his experience, skills, and projects. Ask me anything! 👋",
        timestamp: new Date()
      }
    ]);
    setInputValue("");
    setShowSuggestions(false);
    // Randomize quick questions on clear
    const randomSet = quickQuestionSets[Math.floor(Math.random() * quickQuestionSets.length)];
    setQuickQuestions(randomSet);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 smooth-transition hover:scale-110 flex items-center justify-center group"
          aria-label="Open AI Chat Assistant"
        >
          <FaRobot className="text-2xl md:text-3xl group-hover:rotate-12 smooth-transition" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            ref={chatWindowRef}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-96 h-[70vh] md:h-[600px] max-h-[calc(100vh-3rem)] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in"
            role="dialog"
            aria-label="AI Chat Assistant"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FaRobot className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Aly's AI Assistant</h3>
                  <p className="text-white/80 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online • 100+ Responses
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 1 && (
                  <button
                    onClick={handleClearChat}
                    className="text-white/70 hover:text-white smooth-transition p-2"
                    aria-label="Clear chat history"
                    title="Clear chat"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white smooth-transition p-2"
                  aria-label="Close chat"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.type === "user"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
                        : "bg-slate-800/50 text-white/90 border border-white/10"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions / Suggestions */}
            {(messages.length === 1 || showSuggestions) && !isTyping && (
              <div className="px-4 pb-2 border-t border-white/5 pt-3 flex-shrink-0 animate-slide-down">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-white/50 font-medium">Quick questions:</p>
                  {messages.length > 1 && (
                    <button
                      onClick={() => setShowSuggestions(false)}
                      className="text-xs text-white/50 hover:text-white/70"
                    >
                      Hide
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/30 border border-white/10 text-white/70 hover:text-white hover:bg-slate-800/50 hover:border-white/20 smooth-transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestion Button */}
            {messages.length > 1 && !showSuggestions && !isTyping && (
              <div className="px-4 pb-2 flex-shrink-0">
                <button
                  onClick={() => setShowSuggestions(true)}
                  className="text-xs text-white/50 hover:text-white/70 smooth-transition flex items-center gap-1"
                >
                  <FaLightbulb className="text-yellow-400" />
                  Show suggestions
                </button>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 smooth-transition"
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-white/30 mt-2 text-center">
                Press Escape to close • Enter to send
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
