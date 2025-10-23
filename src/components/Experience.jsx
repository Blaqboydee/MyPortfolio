// Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const experiencesData = [
  {
    Icon: Code2,
    title: "Full Stack Developer (Student)",
    company: "Tech School Program",
    period: "2024 — Present",
    description: "Building full-stack web applications using React, Node.js, and MongoDB. Collaborating on team projects, integrating real APIs, and learning advanced concepts like authentication and deployment."
  },
  {
    Icon: Briefcase,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 — 2023",
    description: "Designed and developed responsive websites for small businesses. Implemented modern UI and handled client requests with clean, maintainable front-end code."
  },
  {
    Icon: GraduationCap,
    title: "Tech Instructor",
    company: "Part-Time",
    period: "2024 — Present",
    description: "Teaching Scratch programming and basic HTML/CSS to young learners, introducing them to coding fundamentals through fun, creative projects."
  }
];

const Experience = ({ experienceRef }) => {
  return (
    <section ref={experienceRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16">EXPERIENCE</h2>

          <div className="space-y-16">
            {experiencesData.map(({ Icon, title, company, period, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-4 border-black pl-8 hover:pl-12 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-gray-600 font-medium">{company} • {period}</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;