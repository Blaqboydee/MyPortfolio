import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0a0a] border-t border-[#161616] px-5 sm:px-8 md:px-10 py-16 sm:py-20">
      <div className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-8 sm:mb-10">Experience</div>
      <div className="flex flex-col gap-px bg-[#161616] max-w-[780px]">
        {experience.map((e, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] px-5 sm:px-6 md:px-7 py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-8"
          >
            <div>
              <div className="text-[11px] text-[#aaa] font-mono mb-1">{e.period}</div>
              <div className="text-[10px] text-[#999] uppercase tracking-[0.08em]">{e.org}</div>
            </div>
            <div>
              <div className="text-[14px] sm:text-[15px] font-medium text-white mb-1.5">{e.role}</div>
              <div className="text-[13px] sm:text-[14px] text-[#bbb] leading-relaxed">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}