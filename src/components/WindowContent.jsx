import { Mail, Github, Linkedin, FileText, Wrench, MapPin, Compass, UserIcon, Rocket } from 'lucide-react';
import { FaMapPin } from "react-icons/fa6";
import { FaTools, FaBook, FaRocket } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiJourney } from "react-icons/gi";
import ProjectCard from './ProjectCard';
import SkillBadge from './SkillBadge';
import mypicture from '../assets/my picture.jpg'
export default function WindowContent({ title, isDark, projects, skills }) {


    if (title === "About Me") {
    return (
      <div>
        {/* Header with Profile */}
        <div className={`flex items-center gap-6 ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-6 rounded-2xl shadow-lg mb-6`}>
          <div className="flex-1">
            <h2 className="text-xl font-extrabold mb-2">
              Hi, <span className="inline-block">👋</span>
            </h2>
            <span className="block text-2xl font-bold">I'm Adeoluwa Adegoke</span>
          </div>
          <div className="flex-shrink-0">
            <div className={`w-24 h-24 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'} flex items-center justify-center shadow-lg text-4xl`}>
              <img src={mypicture} alt="Profile" className="w-24 h-24 rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </div>

        {/* Intro */}
        <p className={`mb-6 leading-relaxed pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          I'm a Full-stack web developer passionate about building interactive, user-first
          digital experiences. With a balance of frontend design and backend logic,
          I create applications that are both beautiful and performant.
        </p>

        {/* Skills */}
        <div className={`mb-6 pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
            <Wrench size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} /> Skills
          </h3>
          <p className="leading-relaxed">
            I work across the full stack, with experience in frontend (React, Tailwind),
            backend (Node.js, Firebase), and API integration.
            <span className="block mt-2">
              For a detailed breakdown, check out my <strong>Skills</strong> section.
            </span>
          </p>
        </div>

        {/* Current Focus */}
        <div className={`mb-6 pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
            <MapPin size={20} className={isDark ? 'text-red-400' : 'text-red-600'} /> Current Focus
          </h3>
          <ul className={`list-disc pl-6 space-y-1 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            <li>Deepening my expertise in Next.js and backend integration</li>
            <li>Building Zaptalk (fullstack chat app)</li>
            <li>Learning Mobile Development with React Native</li>
          </ul>
        </div>

        {/* Journey */}
        <div className={`mb-6 pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
            <Compass size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} /> My Journey
          </h3>
          <p className="leading-relaxed">
            I started coding in 2022 with HTML and CSS, paused for university,
            and returned fully in 2025. Since then, I've built projects like
            a Netflix clone, a calculator, and my current cinema web app.
            I'm constantly leveling up as a full-stack developer.
          </p>
        </div>

        {/* Personality */}
        <div className={`mb-6 pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
            <UserIcon size={20} className={isDark ? 'text-purple-400' : 'text-purple-600'} /> Personality
          </h3>
          <p className="leading-relaxed">
            I'm a Liverpool fan — my code sometimes runs better than my team's defense!
            Outside of coding, I enjoy teaching kids Scratch programming and exploring
            new creative tech ideas.
          </p>
        </div>

        {/* Vision */}
        <div className={`mb-6 pb-4 border-b ${isDark? 'border-gray-700' :'border-gray-300'}`}>
          <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
            <Rocket size={20} className={isDark ? 'text-red-400' : 'text-red-600'} /> Vision
          </h3>
          <p className="leading-relaxed">
            My goal is to become a highly skilled JavaScript and React developer this year,
            while continuing to grow as a full-stack engineer. Long-term, I want to
            build impactful products and create a coding school for kids.
          </p>
        </div>

        {/* Quote */}
        <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} italic border-l-4 ${isDark ? 'border-neutral-700' : 'border-neutral-300'} pl-4 py-2`}>
          "Code is like humor. When you have to explain it, it's bad." — Cory House
        </p>
      </div>
    );
  }


  if (title === "Projects") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <p className={`mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Here are some of the projects I've worked on recently:
        </p>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} isDark={isDark} />
        ))}
      </div>
    );
  }

  if (title === "Skills") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <p className={`mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
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

  if (title === "Experience") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className={`border-l-2 ${isDark ? 'border-neutral-700' : 'border-neutral-300'} pl-4 space-y-6`}>
          <div>
            <h3 className="font-bold text-lg">Frontend Developer</h3>
            <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'} mb-2`}>Self-Employed • 2023 - Present</p>
            <p className="text-sm leading-relaxed">
              Building responsive web applications and interactive user interfaces. 
              Focusing on performance optimization and modern design patterns.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Web Developer</h3>
            <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'} mb-2`}>Freelance • 2022 - 2023</p>
            <p className="text-sm leading-relaxed">
              Created custom websites for small businesses and startups. 
              Implemented responsive designs and integrated various APIs.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Resume") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className={`${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-6 rounded-lg mb-4 text-center`}>
          <FileText size={48} className="mx-auto mb-3" />
          <p className="mb-4">Download my resume to learn more about my experience and skills.</p>
          <button className={`${isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'} px-6 py-2 rounded-lg font-semibold transition-colors`}>
            Download Resume
          </button>
        </div>
        <div className="space-y-2 text-sm">
          <p><strong>Email:</strong> dee@example.com</p>
          <p><strong>Location:</strong> Ibadan, Nigeria</p>
          <p><strong>Available:</strong> Open to opportunities</p>
        </div>
      </div>
    );
  }

  if (title === "Contact") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 leading-relaxed">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out through any of these channels:
        </p>
        <div className="space-y-4">
          <a 
            href="mailto:dee@example.com" 
            className={`flex items-center gap-3 ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'} p-4 rounded-lg transition-colors`}
          >
            <Mail size={24} />
            <div>
              <p className="font-semibold">Email</p>
              <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>dee@example.com</p>
            </div>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-3 ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'} p-4 rounded-lg transition-colors`}
          >
            <Github size={24} />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>@yourusername</p>
            </div>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-3 ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'} p-4 rounded-lg transition-colors`}
          >
            <Linkedin size={24} />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>/in/yourprofile</p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return null;
}