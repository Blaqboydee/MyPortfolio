// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const contactLinks = [
  {
    Icon: Mail,
    title: "Email",
    text: "adeoluwaadegoke05@gmail.com",
    href: "mailto:adeoluwaadegoke05@gmail.com"
  },
  {
    Icon: Github,
    title: "GitHub",
    text: "@Blaqboydee",
    href: "https://github.com/Blaqboydee"
  },
  {
    Icon: Linkedin,
    title: "LinkedIn",
    text: "/in/adegokeadeoluwa",
    href: "https://linkedin.com/in/adegokeadeoluwa"
  },
  {
    Icon: Phone,
    title: "WhatsApp",
    text: "+234 913 376 3902",
    href: "https://wa.me/2349133763902"
  }
];

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="py-9 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-16">LET'S CONNECT</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map(({ Icon, title, text, href }, i) => (
              <motion.a
                key={title}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <Icon size={32} className="mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">{text}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;