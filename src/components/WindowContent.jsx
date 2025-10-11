import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import SkillsSection from "./SkillsSection";

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function WindowContent({ title, isDark, projects, mypicture }) {
  if (title === "About Me") {
    return (
      <AnimatedSection>
        <AboutMe isDark={isDark} mypicture={mypicture} />
      </AnimatedSection>
    );
  }

  if (title === "Projects") {
    return (
      <AnimatedSection>
        <div>
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          <p className={`mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
            Here are some of the projects I've worked on recently:
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects?.map((project, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ProjectCard {...project} isDark={isDark} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    );
  }

  if (title === "Skills") {
    return (
      <AnimatedSection>
        <SkillsSection isDark={isDark} />
      </AnimatedSection>
    );
  }

  if (title === "Experience") {
    return (
      <AnimatedSection>
        <div>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`border-l-2 ${
              isDark ? "border-neutral-700" : "border-neutral-300"
            } pl-4 space-y-6`}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg">Full Stack Developer (Student)</h3>
              <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"} mb-2`}>
                Coding School • 2024 – Present
              </p>
              <p className="text-sm leading-relaxed">
                Currently training as a full stack developer with hands-on experience in the 
                MERN stack. Building responsive web applications, designing RESTful APIs, and 
                managing databases using MongoDB. Focused on writing clean, maintainable, and 
                scalable code.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg">Frontend Developer</h3>
              <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"} mb-2`}>
                Freelance • 2022 – 2023
              </p>
              <p className="text-sm leading-relaxed">
                Developed responsive websites and landing pages for small businesses and startups. 
                Collaborated with clients to translate ideas into engaging user interfaces using 
                React and Tailwind CSS.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg">Tech Instructor</h3>
              <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"} mb-2`}>
                Part-Time • 2024 – Present
              </p>
              <p className="text-sm leading-relaxed">
                Teach Scratch programming and basic HTML/CSS to young learners, introducing them 
                to coding fundamentals through fun, creative projects. Encourage problem-solving 
                and logical thinking in an engaging way.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    );
  }

  if (title === "Resume") {
    return (
      <AnimatedSection>
        <Resume isDark={isDark} />
      </AnimatedSection>
    );
  }

  if (title === "Contact") {
    return (
      <AnimatedSection>
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 leading-relaxed">
            Whether you're looking to collaborate, hire, or just say hello — feel free to reach out through any of the platforms below.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:adeoluwaadegoke05@gmail.com"
              className={`flex items-center gap-3 ${
                isDark
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              } p-4 rounded-lg transition-colors`}
            >
              <Mail size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  adeoluwaadegoke05@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Blaqboydee"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${
                isDark
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              } p-4 rounded-lg transition-colors`}
            >
              <Github size={24} />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  @Blaqboydee
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/adegokeadeoluwa"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${
                isDark
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              } p-4 rounded-lg transition-colors`}
            >
              <Linkedin size={24} />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  /in/adegokeadeoluwa
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/2349133763902"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${
                isDark
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              } p-4 rounded-lg transition-colors`}
            >
              <Phone size={24} />
              <div>
                <p className="font-semibold">WhatsApp / Call</p>
                <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  +234 913 376 3902
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    );
  }

  return null;
}