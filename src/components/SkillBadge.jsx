import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiGit,
  SiGithub,
  SiDocker,
  // SiAmazonaws,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

// Skill configuration with icons and colors
const skillConfig = {
  // Frontend
  'React': { icon: SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', darkColor: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', darkColor: '#F7DF1E' },
  'HTML': { icon: SiHtml5, color: '#E34F26', darkColor: '#E34F26' },
  'CSS': { icon: SiCss3, color: '#1572B6', darkColor: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', darkColor: '#06B6D4' },
  'Tailwind': { icon: SiTailwindcss, color: '#06B6D4', darkColor: '#06B6D4' },
  'Three.js': { icon: SiThreedotjs, color: '#000000', darkColor: '#FFFFFF' },
  
  // Backend
  'Node.js': { icon: SiNodedotjs, color: '#339933', darkColor: '#339933' },
  'Express': { icon: SiExpress, color: '#000000', darkColor: '#FFFFFF' },
  'Python': { icon: SiPython, color: '#3776AB', darkColor: '#3776AB' },
  'Django': { icon: SiDjango, color: '#092E20', darkColor: '#0C4B33' },
  'Flask': { icon: SiFlask, color: '#000000', darkColor: '#FFFFFF' },
  
  // Database
  'MongoDB': { icon: SiMongodb, color: '#47A248', darkColor: '#47A248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', darkColor: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1', darkColor: '#4479A1' },
  'Redis': { icon: SiRedis, color: '#DC382D', darkColor: '#DC382D' },
  
  // API & Tools
  'GraphQL': { icon: SiGraphql, color: '#E10098', darkColor: '#E10098' },
  'REST API': { icon: FaServer, color: '#009688', darkColor: '#009688' },
  'Git': { icon: SiGit, color: '#F05032', darkColor: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#181717', darkColor: '#FFFFFF' },
  'Docker': { icon: SiDocker, color: '#2496ED', darkColor: '#2496ED' },
  // 'AWS': { icon: SiAmazonaws, color: '#FF9900', darkColor: '#FF9900' },
  
  // Default fallback
  'default': { icon: BiCodeBlock, color: '#6B7280', darkColor: '#9CA3AF' }
};

const SkillBadge = ({ name, isDark }) => {
  const config = skillConfig[name] || skillConfig['default'];
  const Icon = config.icon;
  const accentColor = isDark ? config.darkColor : config.color;
  
  return (
    <div
      className={`
        px-4 py-2 rounded-lg font-medium text-sm
        transition-all duration-200 hover:scale-105
        ${isDark 
          ? 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700' 
          : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
        }
      `}
      style={{
        borderLeft: `3px solid ${accentColor}`
      }}
    >
      <span className="inline-flex items-center gap-2">
        <Icon style={{ color: accentColor }} className="text-base" />
        {name}
      </span>
    </div>
  );
};

// Skills Section Component
const SkillsSection = ({ title, skills, isDark }) => {
  if (title === "Skills") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <p
          className={`mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          Technologies and tools I work with:
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <SkillBadge key={i} name={skill} isDark={isDark} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Currently Learning</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="Next.js" isDark={isDark} />
            <SkillBadge name="Three.js" isDark={isDark} />
            <SkillBadge name="GraphQL" isDark={isDark} />
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export { SkillBadge };