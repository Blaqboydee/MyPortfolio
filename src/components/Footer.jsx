// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Blaqboydee", Icon: Github },
    { href: "https://linkedin.com/in/adegokeadeoluwa", Icon: Linkedin },
    { href: "mailto:adeoluwaadegoke05@gmail.com", Icon: Mail }
  ];

  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-2xl font-bold mb-2">ADEOLUWA ADEGOKE</p>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-400 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 Adeoluwa Adegoke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;