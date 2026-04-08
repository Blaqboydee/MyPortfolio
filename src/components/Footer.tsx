import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#161616] px-5 sm:px-8 md:px-10 py-6 flex justify-between items-center flex-wrap gap-4">
      <span className="text-[11px] text-[#777]">
        © 2026 {personal.name}
      </span>
      <div className="flex gap-6">
        {[
          { label: "GitHub", href: personal.github },
          { label: "LinkedIn", href: personal.linkedin },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-[#777] no-underline hover:text-[#bbb] transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}