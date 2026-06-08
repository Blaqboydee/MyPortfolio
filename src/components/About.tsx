import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { useRegion } from "../context/RegionContext";

export default function About() {
  const { personal } = useRegion();
  return (
    <section id="about" className="bg-[#0a0a0a] border-t border-[#161616] px-5 sm:px-8 md:px-10 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-8 sm:mb-10"
      >
        About
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {personal.about.map((p, i) => (
            <p
              key={i}
              className={`text-[14px] sm:text-[15px] text-[#ccc] leading-[1.85] ${
                i < personal.about.length - 1 ? "mb-5" : ""
              }`}
            >
              {p}
            </p>
          ))}
          <div className="mt-6 p-4 bg-[#0e0e0e] border border-[#1a1a1a] rounded">
            <div className="text-[10px] text-[#999] uppercase tracking-[0.1em] mb-1.5">Currently</div>
            <div className="text-[13px] sm:text-[14px] text-[#bbb] font-mono">
              I am currently working on{" "}
              <a
                href={personal.arenaLink}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#3B6D11] underline decoration-[#444] underline-offset-2 transition-colors duration-200"
              >
                Arena
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="mb-8">
            <div className="text-[10px] text-[#999] uppercase tracking-[0.1em] mb-3">Education</div>
            {education.map((edu, i) => (
              <div key={i} className={i < education.length - 1 ? "mb-4" : ""}>
                <div className="text-[13px] sm:text-[14px] text-[#ccc]">{edu.degree}</div>
                <div className="text-[12px] text-[#999] mt-0.5">{edu.institution} · {edu.period.split("–")[1]?.trim() ?? edu.period}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[10px] text-[#999] uppercase tracking-[0.1em] mb-3">Connect</div>
            {[
              { label: "Email", val: personal.email, href: `mailto:${personal.email}` },
              { label: "GitHub", val: "Blaqboydee", href: personal.github },
              { label: "LinkedIn", val: "adegokeadeoluwa", href: personal.linkedin },
            ].map((c) => (
              <div key={c.label} className="mb-3">
                <div className="text-[10px] text-[#999] uppercase tracking-[0.08em] mb-0.5">{c.label}</div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-[#bbb] font-mono no-underline hover:text-white transition-colors duration-200"
                >
                  {c.val}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
