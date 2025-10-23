// Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import edenville from '../assets/edenville.jpg';
import zapTalk from '../assets/zaptalk.jpg';
import movieMood from '../assets/moviemood.jpg';
import spendly from '../assets/spendly.jpg';
import myCinema from '../assets/myCinema.jpg';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Zaptalk",
    description: "Real-time chat application with DMs, group chats, typing indicators, and online presence tracking",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    link: "https://zaptalk-frontend.vercel.app/",
    image: zapTalk,
    featured: true
  },

  
   {
    title: "Spendly",
    description: "Financial expense tracker with category breakdowns, data visualization, and persistent storage",
    tech: ["React", "Tailwind CSS", "Recharts", "Local Storage"],
    link: "https://spendlytracks.vercel.app/",
    image: spendly,
    featured: true
  },

    {
    title: "Moviemood",
    description: "Cinema booking platform with admin dashboard, seat selection, payment integration, and email notifications",
    tech: ["React", "Node.js", "MongoDB", "Nodemailer", "Express"],
    link: "https://moviemoodcinema.vercel.app/",
    image: movieMood,
    featured: true
  },

  {
    title: "myCinema",
    description: "A cinema web application where users can browse movies, view details, and book tickets with persistent storage using Firebase.",
    tech: ["HTML", "CSS", "Javascript", "Local Storage", "Firebase"],
    link: "https://blaqboydee.github.io/Cinema-WebApp/",
    image: myCinema,
    featured: true
  },

    {
    title: "EdenVille",
    description: "EdenVille is an e-commerce web application that offers a seamless shopping experience with user authentication, product browsing, and a functional shopping cart.",
    tech: ["React", "Tailwind CSS", "Firebase", "Local Storage"],
    link: "https://edenville.vercel.app",
    image: edenville,
    featured: true
  }
];

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="py-0 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-16">PROJECTS</h2>

          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="border-2 border-gray rounded-xl hover:bg-gray-100  hover:text-black transition-all duration-500 group overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 md:h-full">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white text-black text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className="p-4 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg lg:text-3xl md:text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-sm lg:text-lg text-gray-600 group-hover:text-gray-700 transition-colors mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white border-2 text-black lg:text-sm text-[13px] font-medium group-hover:bg-black group-hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex text-[13px]  lg:text-base items-center gap-2 px-6 py-3 border-2 border-gray-300 group-hover:border-black font-medium hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-300 w-fit"
                      >
                        View Project
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;