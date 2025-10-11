import React from 'react';
import { motion } from 'framer-motion';
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
  SiFirebase,
  SiFramer,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';
import { MdEmail, MdDevices, MdSecurity, MdIntegrationInstructions } from 'react-icons/md';
import { AiOutlineBgColors } from 'react-icons/ai';


// SINGLE SOURCE OF TRUTH FOR ALL SKILLS
const skillsData = {
  mainSkills: [
    { name: "React", icon: SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
    { name: "JavaScript", icon: SiJavascript, color: '#F7DF1E', darkColor: '#F7DF1E' },
    { name: "TypeScript", icon: SiTypescript, color: '#3178C6', darkColor: '#3178C6' },
    { name: "Node.js", icon: SiNodedotjs, color: '#339933', darkColor: '#339933' },
    { name: "Express.js", icon: SiExpress, color: '#000000', darkColor: '#FFFFFF' },
    { name: "MongoDB", icon: SiMongodb, color: '#47A248', darkColor: '#47A248' },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: '#06B6D4', darkColor: '#06B6D4' },
    { name: "HTML", icon: SiHtml5, color: '#E34F26', darkColor: '#E34F26' },
    { name: "CSS", icon: SiCss3, color: '#1572B6', darkColor: '#1572B6' },
    { name: "Git & GitHub", icon: SiGit, color: '#F05032', darkColor: '#F05032' },
    { name: "REST APIs", icon: FaServer, color: '#009688', darkColor: '#009688' },
    { name: "Firebase", icon: SiFirebase, color: '#FFCA28', darkColor: '#FFCA28' },
    { name: "Nodemailer", icon: MdEmail, color: '#339933', darkColor: '#339933' },
    { name: "Framer Motion", icon: SiFramer, color: '#0055FF', darkColor: '#0055FF' },
    { name: "Responsive Design", icon: MdDevices, color: '#8B5CF6', darkColor: '#A78BFA' },
    { name: "Authentication & Authorization", icon: MdSecurity, color: '#10B981', darkColor: '#34D399' },
    { name: "API Integration", icon: MdIntegrationInstructions, color: '#4285F4', darkColor: '#4285F4' },
    { name: "UI/UX Implementation", icon: AiOutlineBgColors, color: '#EC4899', darkColor: '#F472B6' },
  ],
  
  currentlyLearning: [
    { name: "Next.js", icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: "Three.js", icon: SiThreedotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: "GraphQL", icon: SiGraphql, color: '#E10098', darkColor: '#E10098' },
  ],
  
  // Additional skills (not currently displayed but available)
  otherSkills: [
    { name: "Python", icon: SiPython, color: '#3776AB', darkColor: '#3776AB' },
    { name: "Django", icon: SiDjango, color: '#092E20', darkColor: '#0C4B33' },
    { name: "Flask", icon: SiFlask, color: '#000000', darkColor: '#FFFFFF' },
    { name: "PostgreSQL", icon: SiPostgresql, color: '#4169E1', darkColor: '#4169E1' },
    { name: "MySQL", icon: SiMysql, color: '#4479A1', darkColor: '#4479A1' },
    { name: "Redis", icon: SiRedis, color: '#DC382D', darkColor: '#DC382D' },
    { name: "Docker", icon: SiDocker, color: '#2496ED', darkColor: '#2496ED' },
    // { name: "AWS", icon: SiAmazonaws, color: '#FF9900', darkColor: '#FF9900' },
  ]
};

// Skill Badge Component
const SkillBadge = ({ skill, isDark }) => {
  const Icon = skill.icon;
  const accentColor = isDark ? skill.darkColor : skill.color;
  
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
        {skill.name}
      </span>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Skills Section Component
const SkillsSection = ({ isDark }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="">
      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Technical Skills</motion.h2>
      <motion.p
        variants={itemVariants} className={`mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
      >
        Technologies and tools I work with:
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        {skillsData.mainSkills.map((skill, i) => (
          <SkillBadge key={i} skill={skill} isDark={isDark} />
        ))}
      </motion.div>
      <motion.div variants={containerVariants} className="mt-8">
        <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-3">Currently Learning</motion.h3>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {skillsData.currentlyLearning.map((skill, i) => (
            <SkillBadge key={i} skill={skill} isDark={isDark} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
export { SkillBadge };