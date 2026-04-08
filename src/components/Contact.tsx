import { useState } from "react";
import { personal } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdapjpan", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] border-t border-[#161616] px-5 sm:px-8 md:px-10 py-20 sm:py-24"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#999] mb-6">
          Contact
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Text Content */}
          <div>
            <h2
              className="font-medium text-white leading-[1.1] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              Let's build something
              <br />
              <span className="text-[#777]">worth shipping.</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#bbb] leading-relaxed mb-8 sm:mb-10">
              Open to full-time roles, freelance projects, and collaborations. If you have something in mind, reach out.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#bbb] text-[13px] hover:text-white transition-colors duration-200"
              >
                <span className="text-[#999]">LinkedIn</span>
                <span className="text-[#666]">→</span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#bbb] text-[13px] hover:text-white transition-colors duration-200"
              >
                <span className="text-[#999]">GitHub</span>
                <span className="text-[#666]">→</span>
              </a>
              <a
                href={`https://wa.me/${personal.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#bbb] text-[13px] hover:text-white transition-colors duration-200"
              >
                <span className="text-[#999]">WhatsApp</span>
                <span className="text-[#666]">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] text-[#999] uppercase tracking-[0.08em] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-white placeholder-[#666] focus:border-[#444] focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] text-[#999] uppercase tracking-[0.08em] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-white placeholder-[#666] focus:border-[#444] focus:outline-none transition-colors duration-200"
                  placeholder="you@example.com"
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] text-[#999] uppercase tracking-[0.08em] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-white placeholder-[#666] focus:border-[#444] focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  disabled={status === "submitting"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-white text-[#0a0a0a] text-[13px] font-medium px-6 py-3 rounded tracking-[0.04em] hover:bg-neutral-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <div className="text-[13px] text-[#3B6D11] border border-[#1f3a12] bg-[#0e1f0a] px-4 py-3 rounded">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="text-[13px] text-[#d11] border border-[#3a1212] bg-[#1f0a0a] px-4 py-3 rounded">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}