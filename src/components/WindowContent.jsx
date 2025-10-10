import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Wrench,
  MapPin,
  Compass,
  UserIcon,
  Rocket,
  Phone
} from "lucide-react";
import { FaMapPin } from "react-icons/fa6";
import { FaTools, FaBook, FaRocket } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiJourney } from "react-icons/gi";
import ProjectCard from "./ProjectCard";
// import SkillBadge from "./SkillBadge";
import mypicture from "../assets/my picture.jpg";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
// import SkillsSection from "./SkillBadge";
import SkillsSection from "./SkillsSection";

export default function WindowContent({ title, isDark, projects}) {
  if (title === "About Me") {
    return (
<AboutMe isDark={isDark} mypicture={mypicture} />
    );
  }

  if (title === "Projects") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <p
          className={`mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          Here are some of the projects I've worked on recently:
        </p>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} isDark={isDark} />
        ))}
      </div>
    );
  }

  if (title === "Skills") {
    return  <SkillsSection isDark={isDark} />;
    
  }

  if (title === "Experience") {
    return (
 <div>
  <h2 className="text-2xl font-bold mb-4">Experience</h2>
  <div
    className={`border-l-2 ${
      isDark ? "border-neutral-700" : "border-neutral-300"
    } pl-4 space-y-6`}
  >
    <div>
      <h3 className="font-bold text-lg">Full Stack Developer (Student)</h3>
      <p
        className={`text-sm ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        } mb-2`}
      >
        Coding School • 2024 – Present
      </p>
      <p className="text-sm leading-relaxed">
        Currently training as a full stack developer with hands-on experience in the 
        MERN stack. Building responsive web applications, designing RESTful APIs, and 
        managing databases using MongoDB. Focused on writing clean, maintainable, and 
        scalable code.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">Frontend Developer</h3>
      <p
        className={`text-sm ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        } mb-2`}
      >
        Freelance • 2022 – 2023
      </p>
      <p className="text-sm leading-relaxed">
        Developed responsive websites and landing pages for small businesses and startups. 
        Collaborated with clients to translate ideas into engaging user interfaces using 
        React and Tailwind CSS.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">Tech Instructor</h3>
      <p
        className={`text-sm ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        } mb-2`}
      >
        Part-Time • 2024 – Present
      </p>
      <p className="text-sm leading-relaxed">
        Teach Scratch programming and basic HTML/CSS to young learners, introducing them 
        to coding fundamentals through fun, creative projects. Encourage problem-solving 
        and logical thinking in an engaging way.
      </p>
    </div>
  </div>
</div>


    );
  }

  if (title === "Resume") {
    return (
      <Resume isDark={isDark} />
    );
  }

  if (title === "Contact") {
    return (
  
        <div>
  <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
  <p className="mb-6 leading-relaxed">
    Whether you're looking to collaborate, hire, or just say hello — feel free to reach out through any of the platforms below.
  </p>

  <div className="space-y-4">
    <a
      href="mailto:adeoluwaadegoke05@gmail.com"
      className={`flex items-center gap-3 ${
        isDark
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "bg-neutral-100 hover:bg-neutral-200"
      } p-4 rounded-lg transition-colors`}
    >
      <Mail size={24} />
      <div>
        <p className="font-semibold">Email</p>
        <p
          className={`text-sm ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          adeoluwaadegoke05@gmail.com
        </p>
      </div>
    </a>

    <a
      href="https://github.com/Blaqboydee"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 ${
        isDark
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "bg-neutral-100 hover:bg-neutral-200"
      } p-4 rounded-lg transition-colors`}
    >
      <Github size={24} />
      <div>
        <p className="font-semibold">GitHub</p>
        <p
          className={`text-sm ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          @Blaqboydee
        </p>
      </div>
    </a>

    <a
      href="https://linkedin.com/in/adegokeadeoluwa"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 ${
        isDark
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "bg-neutral-100 hover:bg-neutral-200"
      } p-4 rounded-lg transition-colors`}
    >
      <Linkedin size={24} />
      <div>
        <p className="font-semibold">LinkedIn</p>
        <p
          className={`text-sm ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          /in/adegokeadeoluwa
        </p>
      </div>
    </a>

    <a
      href="https://wa.me/2349133763902"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 ${
        isDark
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "bg-neutral-100 hover:bg-neutral-200"
      } p-4 rounded-lg transition-colors`}
    >
      <Phone size={24} />
      <div>
        <p className="font-semibold">WhatsApp / Call</p>
        <p
          className={`text-sm ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          +234 913 376 3902
        </p>
      </div>
    </a>
  </div>
</div>

    );
  }

  return null;
}
