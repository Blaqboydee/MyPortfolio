import React from "react";
import "./index.css"
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Mail, User, Folder, Code, Briefcase, FileText } from "lucide-react";
import DesktopIcon from "./components/DesktopIcon"
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import Window from "./components/Window";
import WindowContent from "./components/WindowContent";

import useTheme from './Hooks/useTheme'
import Taskbar from "./components/Taskbar";
export default function PortfolioOS() {
  const [windows, setWindows] = React.useState([]);
  const [topZIndex, setTopZIndex] = React.useState(50);
  const { isDark, toggleTheme } = useTheme();
  const [time, setTime] = React.useState(new Date());



  const openWindow = (title) => {
    if (!windows.find(w => w.title === title)) {
      setWindows([...windows, { title, zIndex: topZIndex }]);
      setTopZIndex(topZIndex + 1);
    }
  };

  const closeWindow = (title) => {
    setWindows(windows.filter((w) => w.title !== title));
  };

  const focusWindow = (title) => {
    setWindows(windows.map(w => 
      w.title === title ? { ...w, zIndex: topZIndex } : w
    ));
    setTopZIndex(topZIndex + 1);
  };

  const projects = [
    {
      title: "Zaptalk",
      description: "A cinema website for discovering films based on your mood with personalized recommendations.",
      tech: ["React", "API", "Tailwind"],
      link: "#"
    },
    {
      title: "Spendly",
      description: "A sleek, functional calculator with advanced operations and beautiful UI.",
      tech: ["JavaScript", "CSS", "HTML"],
      link: "#"
    },
    {
      title: "Moviemood",
      description: "Full-featured streaming platform clone with authentication and video browsing.",
      tech: ["React", "Firebase", "TMDB API"],
      link: "#"
    },
    {
      title: "Task Manager",
      description: "Productivity app for managing tasks with drag-and-drop functionality.",
      tech: ["React", "Local Storage", "Framer Motion"],
      link: "#"
    }
  ];

  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js", 
    "Tailwind CSS", "HTML/CSS", "Git", "REST APIs",
    "Framer Motion", "Responsive Design"
  ];

  const getIcon = (title) => {
    switch(title) {
      case "About Me": return User;
      case "Projects": return Folder;
      case "Skills": return Code;
      case "Experience": return Briefcase;
      case "Resume": return FileText;
      case "Contact": return Mail;
      default: return Folder;
    }
  };

  return (
    <div className={`relative w-screen h-screen ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      {/* Desktop Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className={`border ${isDark ? 'border-white' : 'border-black'}`} />
          ))}
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 flex lg:flex-col flex-wrap gap-6 z-10">
        <DesktopIcon label="About Me" icon={User} onClick={() => openWindow("About Me")} isDark={isDark} />
        <DesktopIcon label="Projects" icon={Folder} onClick={() => openWindow("Projects")} isDark={isDark} />
        <DesktopIcon label="Skills" icon={Code} onClick={() => openWindow("Skills")} isDark={isDark} />
        <DesktopIcon label="Experience" icon={Briefcase} onClick={() => openWindow("Experience")} isDark={isDark} />
        <DesktopIcon label="Resume" icon={FileText} onClick={() => openWindow("Resume")} isDark={isDark} />
        <DesktopIcon label="Contact" icon={Mail} onClick={() => openWindow("Contact")} isDark={isDark} />
      </div>

      {/* Windows */}
      <AnimatePresence>
        {windows.map((win) => (
          <Window 
            key={win.title} 
            title={win.title} 
            icon={getIcon(win.title)}
            onClose={() => closeWindow(win.title)}
            zIndex={win.zIndex}
            onFocus={() => focusWindow(win.title)}
            isDark={isDark}
          >
            <WindowContent 
              title={win.title} 
              isDark={isDark}
              projects={projects}
              skills={skills}
            />
          </Window>
        ))}
      </AnimatePresence>

    <Taskbar isDark={isDark} toggleTheme={toggleTheme}/>
    </div>
  );
}