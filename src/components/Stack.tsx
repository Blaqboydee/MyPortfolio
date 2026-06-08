import { motion, type Variants } from "framer-motion";
import { skills } from "../data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Stack() {
  return (
    <section id="stack" className="bg-[#0a0a0a] border-t border-[#161616]">
      <div className="px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-8 sm:mb-10"
        >
          Tech stack
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-px bg-[#161616]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div key={cat} variants={item} className="bg-[#0a0a0a] p-6">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[#999] mb-3.5">
                {cat}
              </div>
              <div className="flex flex-col gap-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className={`text-[14px] font-mono flex items-center gap-2 ${
                      cat === "Learning" ? "text-[#999]" : "text-[#ddd]"
                    }`}
                  >
                    {cat === "Learning" && (
                      <span className="text-[9px] text-[#999] border border-[#444] px-1 py-px rounded-[2px]">
                        WIP
                      </span>
                    )}
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
