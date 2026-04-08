import { personal } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] border-t border-[#161616] px-5 sm:px-8 md:px-10 py-16 sm:py-20">
      <div className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-8 sm:mb-10">About</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 max-w-[900px]">
        <div>
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
        </div>
        <div>
          <div className="mb-8">
            <div className="text-[10px] text-[#999] uppercase tracking-[0.1em] mb-1.5">Education</div>
            <div className="text-[13px] sm:text-[14px] text-[#ccc]">B.Eng. Agricultural Engineering</div>
            <div className="text-[12px] text-[#999] mt-0.5">FUNAAB · 2024</div>
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
        </div>
      </div>
    </section>
  );
}