export const blogContent = {
  "dev-environments": {
    sections: [
      {
        type: "intro",
        content: "Nothing kills productivity like spending your first day at a new project fighting with environment setup. After setting up dev environments for personal projects, P&P Optica's complex system, and helping teammates with their setups, I've learned what actually works."
      },
      {
        type: "heading",
        content: "The Foundation: Version Managers"
      },
      {
        type: "text",
        content: "Never install Node.js, Python, or Ruby directly on your system. Use version managers instead."
      },
      {
        type: "subheading",
        content: "Node.js with fnm (Fast Node Manager)"
      },
      {
        type: "code",
        language: "bash",
        content: `# Install fnm
curl -fsSL https://fnm.vercel.app/install | bash

# Restart terminal, then install Node versions
fnm install 18.17.0
fnm install 20.9.0
fnm use 20.9.0

# Auto-switch based on .nvmrc files
echo "20.9.0" > .nvmrc
fnm use  # Automatically uses version from .nvmrc`
      },
      {
        type: "subheading",
        content: "Python with pyenv"
      },
      {
        type: "code",
        language: "bash",
        content: `# Install pyenv (macOS)
brew install pyenv

# Install Python versions
pyenv install 3.11.5
pyenv install 3.12.0
pyenv global 3.11.5

# Project-specific Python version
echo "3.11.5" > .python-version`
      },
      {
        type: "heading",
        content: "Project Structure That Scales"
      },
      {
        type: "text",
        content: "Consistent project structure saves mental overhead:"
      },
      {
        type: "code",
        language: "plaintext",
        content: `project-name/
├── .env.example              # Template for environment variables
├── .env.local                # Local development overrides
├── .nvmrc                    # Node version for this project
├── .gitignore
├── README.md                # Setup instructions
├── package.json
├── docker-compose.yml       # Local development services
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── types/
├── tests/
├── docs/
└── scripts/
    ├── setup.sh             # One-command environment setup
    ├── dev.sh               # Start development servers
    └── test.sh              # Run all tests`
      },
      {
        type: "heading",
        content: "The One-Command Setup Script"
      },
      {
        type: "text",
        content: "Create scripts/setup.sh that handles everything:"
      },
      {
        type: "code",
        language: "bash",
        content: `#!/bin/bash
set -e

echo "🚀 Setting up development environment..."

# Check for required tools
command -v node >/dev/null 2>&1 || { echo "Node.js required"; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "Docker required"; exit 1; }

# Copy environment file
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "📝 Created .env.local. Please update with your values."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup database
echo "🗄️  Setting up database..."
docker-compose up -d postgres
sleep 5
npm run db:migrate
npm run db:seed

echo "✅ Setup complete! Run 'npm run dev' to start."`
      },
      {
        type: "heading",
        content: "Docker for Development Services"
      },
      {
        type: "text",
        content: "Don't install Postgres, Redis, or other services directly. Use Docker:"
      },
      {
        type: "code",
        language: "yaml",
        content: `version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: myapp_dev
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7
    ports:
      - "6379:6379"

volumes:
  postgres_data:`
      },
      {
        type: "heading",
        content: "Key Principles"
      },
      {
        type: "list",
        items: [
          "One command setup: New developers should be productive in minutes, not hours",
          "Consistent across projects: Same patterns, same commands, same structure",
          "Self-documenting: Good defaults, clear error messages, helpful documentation",
          "Version controlled: All configuration should be in git (except secrets)",
          "Cross-platform: Works on macOS, Linux, and Windows"
        ]
      },
      {
        type: "text",
        content: "The best development environment is the one you forget about because it just works. Invest time upfront to save countless hours of frustration later."
      }
    ]
  },
  "git-workflows": {
    sections: [
      {
        type: "intro",
        content: "After working on team projects at P&P Optica and managing collaboration on personal projects, I've learned that good Git workflows can make or break team productivity. Here's what actually works in practice."
      },
      {
        type: "heading",
        content: "Why Git Workflow Matters"
      },
      {
        type: "text",
        content: "Bad Git practices don't just create messy history—they create real problems:"
      },
      {
        type: "list",
        items: [
          "Merge conflicts that take hours to resolve",
          "Features that break other people's work",
          "Lost code from poorly managed branches",
          "Deployment issues from unstable main branches",
          "Time wasted on Git archaeology instead of building features"
        ]
      },
      {
        type: "text",
        content: "The right workflow prevents these problems before they happen."
      },
      {
        type: "heading",
        content: "The Feature Branch Workflow"
      },
      {
        type: "text",
        content: "This is what we used at P&P Optica and it scaled well with our team of 6 developers:"
      },
      {
        type: "code",
        language: "bash",
        content: `# Always start from latest main
git checkout main
git pull origin main

# Create feature branch with descriptive name
git checkout -b feature/csv-upload-validation

# Work on your feature with logical commits
git add .
git commit -m "Add file type validation for CSV uploads"

git add .
git commit -m "Handle malformed CSV rows with user feedback"

# Push feature branch
git push origin feature/csv-upload-validation`
      },
      {
        type: "subheading",
        content: "Naming Conventions That Work"
      },
      {
        type: "text",
        content: "Good branch names save time and confusion:"
      },
      {
        type: "code",
        language: "bash",
        content: `# Feature branches
feature/user-authentication
feature/incident-dashboard
feature/csv-bulk-import

# Bug fixes
fix/pagination-race-condition
fix/memory-leak-large-files

# Hotfixes (urgent production fixes)
hotfix/security-patch-auth
hotfix/data-corruption-fix

# Chores/refactoring
chore/update-dependencies
refactor/extract-api-service`
      },
      {
        type: "heading",
        content: "Commit Message Standards"
      },
      {
        type: "text",
        content: "Your future self will thank you for clear commit messages:"
      },
      {
        type: "code",
        language: "bash",
        content: `# Good: Clear, specific, actionable
git commit -m "Fix pagination bug causing duplicate page creation"
git commit -m "Add error handling for failed S3 uploads"
git commit -m "Update user dashboard to show processing status"

# Bad: Vague, uninformative
git commit -m "Fix bug"
git commit -m "Updates"
git commit -m "WIP"`
      },
      {
        type: "subheading",
        content: "The Conventional Commits Format"
      },
      {
        type: "code",
        language: "bash",
        content: `# Structure: type(scope): description
feat(auth): add two-factor authentication
fix(api): resolve timeout issues with large requests
docs(readme): update installation instructions
test(dashboard): add unit tests for filter components
refactor(utils): extract date formatting functions`
      },
      {
        type: "heading",
        content: "Handling Conflicts Like a Pro"
      },
      {
        type: "text",
        content: "Conflicts are inevitable. Handle them systematically:"
      },
      {
        type: "code",
        language: "bash",
        content: `# When merge conflicts occur
git status  # Shows conflicted files

# Resolve conflicts manually, then:
git add resolved-file.js
git commit -m "Resolve merge conflicts in CSV validation"`
      },
      {
        type: "subheading",
        content: "Preventing Conflicts"
      },
      {
        type: "code",
        language: "bash",
        content: `# Regularly sync your feature branch with main
git checkout feature/csv-upload-validation
git fetch origin
git rebase origin/main

# Push the updated feature branch
git push origin feature/csv-upload-validation --force-with-lease`
      },
      {
        type: "heading",
        content: "What We Learned"
      },
      {
        type: "text",
        content: "Good Git workflows aren't just about tools—they're about team communication and shared standards. The best workflow is the one your team actually follows consistently."
      },
      {
        type: "text",
        content: "Start simple, iterate based on pain points, and remember that perfect Git history isn't the goal—productive development is."
      },
      {
        type: "text",
        content: "Your future self debugging a production issue will thank you for that clear commit message and well-organized branch history."
      }
    ]
  }
};
