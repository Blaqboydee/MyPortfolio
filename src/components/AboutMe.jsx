import React from "react";
import { Wrench, MapPin, Compass, User, Rocket } from "lucide-react";

export default function AboutMe({ isDark, mypicture }) {
  return (
    <div className="space-y-8">
      {/* Header with Profile */}
      <div className="flex items-start gap-8 pb-8 border-b border-neutral-800">
        <div className="flex-1 space-y-3">
          <div>
            <p className={`text-sm font-medium ${isDark ? "text-neutral-400" : "text-neutral-600"} mb-1`}>
              Hello, I'm
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              Adeoluwa Adegoke
            </h1>
          </div>
          <p className={`text-lg ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            Full-stack Developer
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={mypicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover ring-2 ring-neutral-800"
          />
        </div>
      </div>

      {/* Intro */}
      <div className="space-y-4">
        <p className={`text-lg leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
          I'm a Full-stack web developer passionate about building interactive,
          user-first digital experiences. With a balance of frontend design and
          backend logic, I create applications that are both beautiful and
          performant.
        </p>
      </div>

      {/* Grid Layout for Sections */}
      <div className="grid md:grid-cols-2 gap-6 pt-4">
        {/* Skills */}
        <div className={`p-6 rounded-xl border ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-50"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? "bg-neutral-800" : "bg-neutral-200"}`}>
              <Wrench size={20} className={isDark ? "text-white" : "text-black"} />
            </div>
            <h3 className="text-xl font-bold">Skills</h3>
          </div>
          <p className={`leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            I work across the full stack, with experience in frontend (React,
            Tailwind), backend (Node.js, Firebase), and API integration.
          </p>
          <p className={`mt-3 text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
            → Check out my <strong>Skills</strong> section for details
          </p>
        </div>

        {/* Current Focus */}
        <div className={`p-6 rounded-xl border ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-50"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? "bg-neutral-800" : "bg-neutral-200"}`}>
              <MapPin size={20} className={isDark ? "text-white" : "text-black"} />
            </div>
            <h3 className="text-xl font-bold">Current Focus</h3>
          </div>
          <ul className={`space-y-2 ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0"></span>
              <span>Deepening my expertise in Next.js and backend integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0"></span>
              <span>Building Zaptalk (fullstack chat app)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0"></span>
              <span>Learning Mobile Development with React Native</span>
            </li>
          </ul>
        </div>

        {/* Journey */}
        <div className={`p-6 rounded-xl border ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-50"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? "bg-neutral-800" : "bg-neutral-200"}`}>
              <Compass size={20} className={isDark ? "text-white" : "text-black"} />
            </div>
            <h3 className="text-xl font-bold">My Journey</h3>
          </div>
          <p className={`leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            I started coding in 2022 with HTML and CSS, took a break to focus on
            university, and returned fully in 2024. Since then, I've built
            several real-world projects including <strong>Spendly</strong>, <strong>MovieMood</strong>, and <strong>ZapTalk</strong>. I'm constantly learning, experimenting, and growing as
            a full-stack developer.
          </p>
        </div>

        {/* Personality */}
        <div className={`p-6 rounded-xl border ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-50"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? "bg-neutral-800" : "bg-neutral-200"}`}>
              <User size={20} className={isDark ? "text-white" : "text-black"} />
            </div>
            <h3 className="text-xl font-bold">Personality</h3>
          </div>
          <p className={`leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            I'm a Liverpool fan, my code usually performs better than my team's defense! 
            Beyond coding, I enjoy teaching programming. I've taught kids 
            <strong> Scratch</strong> and introduced them to <strong>basic HTML & CSS</strong>, 
            helping them build confidence and creativity through tech.
          </p>
        </div>
      </div>

      {/* Vision - Full Width */}
      <div className={`p-6 rounded-xl border ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-50"}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${isDark ? "bg-neutral-800" : "bg-neutral-200"}`}>
            <Rocket size={20} className={isDark ? "text-white" : "text-black"} />
          </div>
          <h3 className="text-xl font-bold">Vision</h3>
        </div>
        <p className={`leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
          My goal is to deepen my expertise in <strong>React</strong> and explore more 
          advanced technologies like <strong>Next.js</strong>, <strong>TypeScript</strong>, 
          and modern backend tools that push me further as a full-stack engineer. 
          In the long run, I aspire to build impactful products and establish a 
          coding school that inspires the next generation of young developers.
        </p>
      </div>

      {/* Quote */}
      <div className={`mt-8 pt-6 border-t ${isDark ? "border-neutral-800" : "border-neutral-200"}`}>
        <blockquote className={`${isDark ? "text-neutral-400" : "text-neutral-600"} italic text-center text-lg`}>
          "Code is like humor. When you have to explain it, it's bad."
          <span className={`block mt-2 text-sm not-italic ${isDark ? "text-neutral-500" : "text-neutral-500"}`}>
            — Cory House
          </span>
        </blockquote>
      </div>
    </div>
  );
}