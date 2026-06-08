import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { personal } from "../data/portfolio";
// import { useRegion } from "../context/RegionContext";

const links = ["Work", "Stack", "About", "Experience", "Contact"];

// function RegionToggle() {
//   const { region, setRegion } = useRegion();
//   const options: { value: "ng" | "uk"; label: string }[] = [
//     { value: "ng", label: "NG" },
//     { value: "uk", label: "UK" },
//   ];
//
//   return (
//     <div
//       className="flex items-center gap-0.5 p-0.5 rounded-full border border-[#222] bg-[#0e0e0e]"
//       role="group"
//       aria-label="Region"
//     >
//       {options.map((o) => (
//         <button
//           key={o.value}
//           onClick={() => setRegion(o.value)}
//           aria-pressed={region === o.value}
//           className={`text-[10px] tracking-[0.1em] px-2.5 py-1 rounded-full transition-colors duration-200 ${
//             region === o.value
//               ? "bg-white text-[#0a0a0a] font-medium"
//               : "text-[#888] hover:text-white"
//           }`}
//         >
//           {o.label}
//         </button>
//       ))}
//     </div>
//   );
// }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavLink = (label: string) => {
    const id = label.toLowerCase();
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  const navLinkClass =
    "bg-transparent border-0 text-[11px] text-[#aaa] tracking-[0.1em] uppercase cursor-pointer p-0 transition-colors duration-200 hover:text-white";

  const isBlog = location.pathname.startsWith("/blog");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-5 sm:px-8 md:px-10 py-[1.1rem] transition-all duration-300 ${
          scrolled || isBlog
            ? "bg-[#0a0a0a]/95 border-b border-[#1f1f1f] backdrop-blur-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link
          to="/"
          className="text-[13px] font-medium text-white tracking-[0.03em] no-underline"
        >
          {personal.name}<span className="text-[#888]"> .dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNavLink(l)}
              className={navLinkClass}
            >
              {l}
            </button>
          ))}
          <Link
            to="/blog"
            className={`text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200 ${
              isBlog ? "text-white" : "text-[#aaa] hover:text-white"
            }`}
          >
            Blog
          </Link>
          {/* <RegionToggle /> */}
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* <RegionToggle /> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-[#aaa] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] left-0 right-0 z-[99] bg-[#0a0a0a]/98 backdrop-blur-md border-b border-[#1f1f1f] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNavLink(l)}
              className="bg-transparent border-0 text-[11px] text-[#aaa] tracking-[0.1em] uppercase cursor-pointer px-5 py-4 text-left transition-colors duration-200 hover:text-white hover:bg-[#1f1f1f]/50"
            >
              {l}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-[11px] tracking-[0.1em] uppercase no-underline px-5 py-4 transition-colors duration-200 hover:bg-[#1f1f1f]/50 ${
              isBlog ? "text-white" : "text-[#aaa] hover:text-white"
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}
