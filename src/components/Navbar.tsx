import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = ["Work", "Stack", "About", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-5 sm:px-8 md:px-10 py-[1.1rem] transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 border-b border-[#1f1f1f] backdrop-blur-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <span className="text-[13px] font-medium text-white tracking-[0.03em]">
          {personal.name}<span className="text-[#888]"> .dev</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="bg-transparent border-0 text-[11px] text-[#aaa] tracking-[0.1em] uppercase cursor-pointer p-0 transition-colors duration-200 hover:text-white"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] left-0 right-0 z-[99] bg-[#0a0a0a]/98 backdrop-blur-md border-b border-[#1f1f1f] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="bg-transparent border-0 text-[11px] text-[#aaa] tracking-[0.1em] uppercase cursor-pointer px-5 py-4 text-left transition-colors duration-200 hover:text-white hover:bg-[#1f1f1f]/50"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}