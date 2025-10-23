import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero({ heroRef, scrollToSection, projectsRef, contactRef }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full">
        <motion.div style={{ opacity, scale, y }} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="inline-block mb-6 px-6 py-2 bg-black text-white text-sm font-semibold tracking-wider"
          >
            FULL-STACK DEVELOPER
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none"
          >
            ADEOLUWA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
              ADEGOKE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting seamless digital experiences with the MERN stack.
            Building applications that are beautiful, performant, and user-centered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
              className="w-full sm:w-auto px-10 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(contactRef)}
              className="w-full sm:w-auto px-10 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/Blaqboydee" },
              { icon: Linkedin, href: "https://linkedin.com/in/adegokeadeoluwa" },
              { icon: Mail, href: "mailto:adeoluwaadegoke05@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}