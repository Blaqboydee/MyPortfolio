import { skills } from "../data/portfolio";

export default function Stack() {
  return (
    <section id="stack" className="bg-[#0a0a0a] border-t border-[#161616]">
      <div className="px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-12">
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-8 sm:mb-10">
          Tech stack
        </div>
        <div
          className="grid gap-px bg-[#161616]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-[#0a0a0a] p-6">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[#999] mb-3.5">
                {cat}
              </div>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className={`text-[14px] font-mono flex items-center gap-2 ${
                      cat === "Learning" ? "text-[#999]" : "text-[#ddd]"
                    }`}
                  >
                    {cat === "Learning" && (
                      <span className="text-[9px] text-[#999] border border-[#444] px-1 py-px rounded-[2px]">
                        WIP
                      </span>
                    )}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}