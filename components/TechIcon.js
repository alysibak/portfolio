import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiVercel,
  SiNextdotjs,
  SiCss3,
  SiJava,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiPython,
  SiC,
  SiAmazonaws,
  SiGit,
  SiJira,
  SiBitbucket,
} from 'react-icons/si';
import { FaDatabase, FaTrain, FaCode } from 'react-icons/fa';

const techIconMap = {
  'React': { icon: SiReact, color: 'text-cyan-400' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-400' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-400' },
  'Express': { icon: SiExpress, color: 'text-white' },
  'SQLite': { icon: SiSqlite, color: 'text-sky-400' },
  'Vercel': { icon: SiVercel, color: 'text-white' },
  'Railway': { icon: FaTrain, color: 'text-purple-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'CSS': { icon: SiCss3, color: 'text-blue-400' },
  'Java': { icon: SiJava, color: 'text-orange-400' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: 'text-yellow-400' },
  'HTML': { icon: SiHtml5, color: 'text-orange-400' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-400' },
  'SQL': { icon: FaDatabase, color: 'text-blue-400' },
  'Python': { icon: SiPython, color: 'text-blue-400' },
  'C': { icon: SiC, color: 'text-blue-400' },
  'AWS (S3, EC2)': { icon: SiAmazonaws, color: 'text-orange-400' },
  'Git': { icon: SiGit, color: 'text-orange-500' },
  'Jira': { icon: SiJira, color: 'text-blue-400' },
  'Bitbucket': { icon: SiBitbucket, color: 'text-blue-400' },
};

export default function TechIcon({ tech, size = 'text-base', showLabel = true }) {
  const techInfo = techIconMap[tech];

  if (!techInfo) {
    // Fallback for unknown tech
    return showLabel ? (
      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 font-mono hover:border-sky-400/40 hover:bg-sky-500/10 smooth-transition">
        {tech}
      </span>
    ) : null;
  }

  const Icon = techInfo.icon;

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-sky-500/10 smooth-transition group">
      <Icon className={`${size} ${techInfo.color} group-hover:scale-110 smooth-transition`} aria-hidden="true" />
      {showLabel && (
        <span className="text-xs text-white/60 font-mono">{tech}</span>
      )}
    </div>
  );
}
