import { useEffect, useRef } from "react";
import { personal } from "../data/portfolio";

export default function Hero() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let on = true;
    const blink = () => {
      if (dotRef.current) dotRef.current.style.opacity = on ? "1" : "0";
      on = !on;
      frame = window.setTimeout(blink, 530);
    };
    blink();
    return () => clearTimeout(frame);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0a0a0a] flex flex-col justify-end px-5 sm:px-8 md:px-10 pb-16 sm:pb-20 relative overflow-hidden"
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* top bar */}
      <div className="absolute top-20 sm:top-24 left-5 right-5 sm:left-8 sm:right-8 md:left-10 md:right-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <span className="text-[11px] text-[#888] tracking-[0.14em] uppercase font-mono">
          Portfolio · 2026
        </span>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] animate-pulse" />
            <span className="text-[11px] text-[#3B6D11] tracking-[0.08em]">Available</span>
          </div>
          <div className="flex gap-4 sm:gap-5">
            {[
              { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", href: personal.github, label: "GitHub" },
              { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", href: personal.linkedin, label: "LinkedIn" },
              { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: personal.twitter, label: "X" },
              { icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z", href: personal.tiktok, label: "TikTok" },
              { icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", href: `mailto:${personal.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-[#aaa] hover:text-white transition-colors duration-200"
                aria-label={s.label}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[18px]"
                >
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="relative max-w-[900px]">
        <h1
          className="font-black text-white leading-[0.95] tracking-[-0.03em] m-0 mb-6 sm:mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          ADEOLUWA<br />ADEGOKE<span ref={dotRef} className="text-[#3B6D11] transition-opacity duration-100">.</span>
        </h1>

        <div className="text-[12px] sm:text-[13px] text-[#999] tracking-[0.12em] uppercase mb-3">
          {personal.title} — {personal.tagline}
        </div>
        <div className="text-[11px] sm:text-[12px] text-[#aaa] font-mono mb-8 sm:mb-10">
          ↳ I am currently working on{" "}
          <a
            href={personal.arenaLink}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#3B6D11] underline decoration-[#444] underline-offset-2 transition-colors duration-200"
          >
            Arena
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-white text-[#0a0a0a] text-[12px] sm:text-[13px] font-medium px-6 py-3 rounded no-underline tracking-[0.04em] hover:bg-neutral-100 transition-colors duration-200 text-center"
          >
            See my work
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[#bbb] text-[12px] sm:text-[13px] px-6 py-3 border border-[#444] rounded no-underline tracking-[0.04em] hover:text-white hover:border-[#888] transition-all duration-200 text-center"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}