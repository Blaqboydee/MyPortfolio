// Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Zaptalk",
    description: "Real-time chat application with DMs, group chats, typing indicators, and online presence tracking",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    link: "https://zaptalk-frontend.vercel.app/",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    featured: true
  },
  {
    title: "Moviemood",
    description: "Cinema booking platform with admin dashboard, seat selection, payment integration, and email notifications",
    tech: ["React", "Node.js", "MongoDB", "Nodemailer", "Express"],
    link: "https://moviemoodcinema.vercel.app/",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
    featured: true
  },
  {
    title: "Spendly",
    description: "Financial expense tracker with category breakdowns, data visualization, and persistent storage",
    tech: ["React", "Tailwind CSS", "Recharts", "Local Storage"],
    link: "https://spendlytracks.vercel.app/",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
    featured: false
  }
];

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16">PROJECTS</h2>

          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="border-2 border-white hover:bg-white hover:text-black transition-all duration-500 group overflow-hidden"
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
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg text-gray-300 group-hover:text-gray-700 transition-colors mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white text-black text-sm font-medium group-hover:bg-black group-hover:text-white transition-all duration-300"
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
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white group-hover:border-black font-medium hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-300 w-fit"
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