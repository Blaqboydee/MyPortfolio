import React from 'react';
import { motion } from 'framer-motion';
import picture from '../assets/newpic.jpg';
import { MapPin, GraduationCap, Sparkles, Code2 } from 'lucide-react';

export default function About({ aboutRef }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }
    }
  };

  return (
    <section ref={aboutRef} className="py-9 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-7xl font-black mb-10 tracking-tight"
          >
            ABOUT ME
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                {/* Replace this URL with your actual image */}
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src={picture}
                  alt="Adeoluwa Adegoke"
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border-4 border-black -translate-x-4 -translate-y-4 -z-10" />
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                I'm a <span className="font-bold text-black">Full-stack developer</span> passionate about building interactive,
                user-first digital experiences. With a balance of frontend design and
                backend logic, I create applications that are both beautiful and
                performant.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                I started coding in 2022 with HTML and CSS, took a break to focus on
                university, and returned fully in 2024. Since then, I've built
                several real-world projects and I'm constantly learning and growing.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 space-y-6">
                <InfoCard 
                  icon={MapPin}
                  title="Location"
                  content="Ibadan, Nigeria"
                />
                <InfoCard 
                  icon={GraduationCap}
                  title="Education"
                  content="B.Eng. Agricultural Engineering"
                  subcontent="FUNAAB (2024)"
                />
                <InfoCard 
                  icon={Code2}
                  title="Currently"
                  content="Learning Next.js & React Native"
                  subcontent="Building Zaptalk"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, content, subcontent }) {
  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className="flex items-start gap-4 group"
    >
      <div className="w-12 h-12 bg-black group-hover:bg-gray-800 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{content}</p>
        {subcontent && <p className="text-xs text-gray-500 mt-1">{subcontent}</p>}
      </div>
    </motion.div>
  );
}