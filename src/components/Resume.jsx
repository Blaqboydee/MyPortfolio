import { useRef } from "react";
import { FileText } from "lucide-react";
import html2pdf from "html2pdf.js";

export default function Resume({ isDark }) {

    
  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: "Dee_Adegoke_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

const resumeRef = useRef();
  return (
      <section
      ref={resumeRef}
      id="resume"
      className={`p-8 rounded-lg shadow-lg ${
        isDark ? "bg-neutral-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Dee Adegoke — Full Stack Developer</h1>

      <div className="mb-6 text-sm">
        <p><strong>Email:</strong> adeoluwaadegoke05@gmail.com</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Blaqboydee"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-purple-400" : "text-purple-700"}
          >
            github.com/Blaqboydee
          </a>
        </p>
        <p><strong>Location:</strong> Ibadan, Nigeria</p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p className="leading-relaxed">
          Full-stack developer passionate about building responsive, performant, and
          user-centered applications. Skilled in developing both frontend and backend
          solutions using the MERN stack. Dedicated to crafting smooth user experiences,
          writing clean, maintainable code, and continuously exploring new technologies
          to improve efficiency and scalability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p>
          <strong>Federal University of Agriculture, Abeokuta (FUNAAB)</strong> — B.Eng.
          Agricultural and Bio-Resources Engineering, Second Class Upper (2024)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
        <p>
          <strong>Frontend:</strong> React, Tailwind CSS, JavaScript, TypeScript, HTML/CSS, Framer Motion<br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB<br />
          <strong>Others:</strong> Git, REST APIs, Firebase, Recharts, Local Storage, Socket.io, Nodemailer
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>

        <div className="mb-4">
          <h3 className="font-bold">Zaptalk — Real-time Chat Application</h3>
          <a
            href="https://zaptalk-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-purple-400" : "text-purple-700"}
          >
            zaptalk-frontend.vercel.app
          </a>
          <p className="text-sm leading-relaxed mt-1">
            A full-stack chat app supporting DMs and group chats. Features include
            real-time messaging with Socket.io, edit/delete sync, typing indicators,
            online/offline presence, authentication, and friend requests.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Moviemood — Cinema Web App</h3>
          <a
            href="https://moviemoodcinema.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-purple-400" : "text-purple-700"}
          >
            moviemoodcinema.vercel.app
          </a>
          <p className="text-sm leading-relaxed mt-1">
            A full-stack cinema app with admin and user dashboards, seat availability
            system, movie time validation, cart, payment gateway, food & drinks ordering,
            and email verification using Nodemailer. Built with React, Node.js, Express,
            and MongoDB.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Spendly — Expense Tracker</h3>
          <a
            href="https://spendlytracks.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-purple-400" : "text-purple-700"}
          >
            spendlytracks.vercel.app
          </a>
          <p className="text-sm leading-relaxed mt-1">
            A financial tracker built with React and Tailwind CSS, featuring expense
            summaries, category-based breakdowns with Recharts, persistent data storage,
            and smooth UI interactions.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>

        <div className="mb-3">
          <h3 className="font-bold">Full Stack Developer (Student Intern)</h3>
          <p className="text-sm italic">Tech School Program • 2024 – Present</p>
          <p className="text-sm leading-relaxed mt-1">
            Building full-stack web applications using React, Node.js, and MongoDB.
            Collaborating with peers on team projects, integrating real APIs, and
            learning advanced concepts like authentication and deployment.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Freelance Web Developer</h3>
          <p className="text-sm italic">Self-Employed • 2022 – 2023</p>
          <p className="text-sm leading-relaxed mt-1">
            Designed and developed responsive websites for small businesses.
            Implemented modern UI and handled client requests with clean,
            maintainable front-end code.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Vision</h2>
        <p className="leading-relaxed">
          To become a highly skilled full-stack engineer capable of building impactful,
          scalable web applications and inspiring the next generation of young
          developers through tech education.
        </p>
      </section>

      {/* Download Resume Button */}
     <div className="text-center mt-8">
        <button
          onClick={handleDownload}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            isDark
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          <FileText size={20} /> Download Resume
        </button>
      </div>
    </section>
  );
}
