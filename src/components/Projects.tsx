import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projects } from "../data/portfolio";
import ember from "../assets/ember.png";
import spendly from "../assets/spendly.jpg";
import movieMood from "../assets/moviemood.jpg";
import myCinema from "../assets/myCinema.jpg";
import edenville from "../assets/edenville.jpg";
import klassroom from "../assets/klassroom.jpg";
import findAm from "../assets/image.png";
import arena from "../assets/Arena.png";

const images: Record<string, string> = {
  "01": klassroom,
  "02": findAm,
  "03": arena,
  "04": ember,
  "05": spendly,
  "06": movieMood,
  "07": myCinema,
  "08": edenville,
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("featured");

  const shown = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="work" className="bg-[#0a0a0a] py-16 sm:py-20">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline px-5 sm:px-8 md:px-10 mb-6 sm:mb-8 gap-3 sm:gap-0"
      >
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#999]">
          Selected work
        </span>
        <div className="flex gap-3">
          {(["featured", "all"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`bg-transparent text-[11px] px-3 py-1 rounded cursor-pointer tracking-[0.06em] capitalize transition-all duration-200 ${
                filter === f
                  ? "border border-[#555] text-white"
                  : "border border-[#444] text-[#888] hover:border-[#666] hover:text-[#ccc]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      {/* project list */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col gap-px bg-[#161616]"
      >
        {shown.map((p) => (
          <motion.div
            key={p.id}
            variants={item}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className={`px-5 sm:px-8 md:px-10 py-6 sm:py-7 grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 sm:gap-6 md:gap-8 cursor-pointer transition-colors duration-150 group ${
              hovered === p.id ? "bg-[#111]" : "bg-[#0a0a0a]"
            }`}
          >
            <div>
              <div className="font-mono text-[10px] text-[#777] mb-2">{p.id}</div>
              <div className="text-[17px] font-medium text-white mb-1.5">
                {p.name}
                {p.featured && (
                  <span className="ml-2.5 text-[9px] text-[#3B6D11] bg-[#0e1f0a] border border-[#1f3a12] px-2 py-0.5 rounded-[3px] align-middle tracking-[0.08em] uppercase">
                    Featured
                  </span>
                )}
              </div>
              <div className="text-[14px] text-[#ccc] leading-relaxed max-w-[560px] mb-3.5">
                {p.description}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-[#999] border border-[#444] px-2 py-0.5 rounded-[3px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-start md:items-end gap-3 pt-0 md:pt-1">
              {images[p.id] ? (
                <img
                  src={images[p.id]}
                  alt={p.name}
                  className="w-28 sm:w-32 md:w-36 h-20 sm:h-22 md:h-24 object-cover rounded opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <div className="w-28 sm:w-32 md:w-36 h-20 sm:h-22 md:h-24 rounded bg-[#111] border border-[#1f1f1f] flex items-center justify-center">
                  <span className="text-[11px] text-[#777] font-mono tracking-widest">{p.name.slice(0, 2).toUpperCase()}</span>
                </div>
              )}
              <div className="flex flex-row md:flex-col gap-2">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`text-[11px] sm:text-[12px] no-underline border border-[#222] px-3 sm:px-3.5 py-1.5 rounded transition-all duration-200 whitespace-nowrap text-center ${
                    hovered === p.id ? "text-white border-[#888]" : "text-[#aaa]"
                  }`}
                >
                  Live ↗
                </a>
                {p.apk && (
                  <a
                    href={p.apk}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-[11px] sm:text-[12px] no-underline border border-[#222] px-3 sm:px-3.5 py-1.5 rounded transition-all duration-200 whitespace-nowrap text-center ${
                      hovered === p.id ? "text-white border-[#888]" : "text-[#aaa]"
                    }`}
                  >
                    APK ↓
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
