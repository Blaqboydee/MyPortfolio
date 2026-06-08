export type Region = "ng" | "uk";

// ─── Shared identity (region-independent) ─────────────────────────────────────

const shared = {
  name: "Adeoluwa Al-Ameen Adegoke",
  title: "Full-Stack Developer",
  email: "adeoluwaadegoke05@gmail.com",
  github: "https://github.com/Blaqboydee",
  linkedin: "https://linkedin.com/in/adegoke-adeoluwa-579119345",
  twitter: "https://twitter.com/blaqboydee",
  tiktok: "https://tiktok.com/@blaqboydee5",
  tagline: "I build web apps.",
  sub: "MERN stack. Available for work.",
  currently: "I am currently working on Arena",
  arenaLink: "https://arenagameplay.vercel.app/",
};

// ─── Region-specific personal info ────────────────────────────────────────────

export const personalByRegion = {
  ng: {
    ...shared,
    location: "Ibadan, Nigeria",
    phone: "+234 913 376 3902",
    whatsapp: "+234 913 376 3902",
    about: [
      "I'm a full-stack developer passionate about building interactive, user-first digital experiences. With a balance of frontend design and backend logic, I create applications that are both beautiful and performant.",
      "I started coding in 2022 with HTML and CSS, took a break to focus on university, and returned fully in 2024. Since then I've built several real-world projects and I'm constantly learning and growing.",
    ],
  },
  uk: {
    ...shared,
    location: "North Yorkshire, United Kingdom",
    phone: "+44 7763 992972",
    whatsapp: "+44 7763 992972",
    about: [
      "I'm a full-stack developer passionate about building interactive, user-first digital experiences. With a balance of frontend design and backend logic, I create applications that are both beautiful and performant.",
      "I've been building for the web since 2022 — over three years of hands-on experience spanning freelance client work, instructing, and full-stack product development with the MERN and Next.js stacks. I'm constantly learning and growing.",
    ],
  },
} as const;

export const skills = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  Backend: ["Node.js", "Express", "MongoDB", "Socket.io", "Firebase"],
  Tools: ["Git", "Vite", "Vercel"],
  Learning: ["GraphQL", "React Native"],
};

export const education = [
  {
    institution: "SQI College of ICT",
    location: "Ibadan, Nigeria",
    degree: "Professional Certificate in Software Engineering",
    period: "November 2024 – November 2025",
  },
  {
    institution: "Federal University of Agriculture, Abeokuta",
    location: "Abeokuta, Nigeria",
    degree: "B.Eng in Agricultural and Bioresources Engineering",
    period: "June 2019 – August 2024",
  },
];

export const projects = [
  {
    id: "01",
    name: "Klassroom",
    description:
      "Full-stack classroom management platform where instructors can manage assignments, grade submissions, run timed coding challenges, and monitor student activity through a real-time dashboard. Includes multi-role authentication, late submission detection, email notifications via Resend, and self-enrollment via invite links.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Resend"],
    live: "https://klassroomapp.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    name: "FindAm",
    description:
      "Early-stage startup MVP for connecting people with reliable local professionals. Features a full provider registration flow, customer search, dynamic routing for profiles, and secure authentication.",
    tech: ["Next.js", "React", "MongoDB", "Next API Routes", "JWT"],
    live: "https://findam.vercel.app/",
    featured: true,
  },
  {
    id: "03",
    name: "Arena",
    description:
      "Multiplayer gaming hub where players connect, create private rooms, and compete in real-time. Games include Reaction, TicTacToe, Hangman, Wordle Duel, and Connect Four. Built with a full Socket.io backend for live gameplay and match results.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Socket.io"],
    live: "https://arenagameplay.vercel.app/",
    featured: true,
  },
  {
    id: "04",
    name: "Ember",
    description:
      "Real-time chat PWA with DMs, group chats, typing indicators, online presence, Google OAuth, and offline support. Installable on iOS and Android.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    live: "https://emberconnect.vercel.app/",
    featured: true,
  },
  {
    id: "05",
    name: "Spendly",
    description:
      "Financial expense tracker with category breakdowns, data visualization, and persistent storage.",
    tech: ["React", "Tailwind CSS", "Recharts", "Local Storage"],
    live: "https://spendlytracks.vercel.app/",
    featured: false,
  },
  {
    id: "06",
    name: "Moviemood",
    description:
      "Cinema booking platform with admin dashboard, seat selection, payment integration, and email notifications.",
    tech: ["React", "Node.js", "MongoDB", "Nodemailer", "Express"],
    live: "https://moviemoodcinema.vercel.app/",
    featured: true,
  },
  {
    id: "07",
    name: "myCinema",
    description:
      "Cinema web application where users can browse movies, view details, and book tickets with persistent storage using Firebase.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    live: "https://blaqboydee.github.io/Cinema-WebApp/",
    featured: false,
  },
  {
    id: "08",
    name: "EdenVille",
    description:
      "E-commerce web application offering a seamless shopping experience with user authentication, product browsing, and a functional shopping cart.",
    tech: ["React", "Tailwind CSS", "Firebase", "Local Storage"],
    live: "https://edenville.vercel.app",
    featured: false,
  },
];

// ─── Region-specific experience ───────────────────────────────────────────────

export const experienceByRegion = {
  ng: [
    {
      role: "Frontend Developer",
      org: "SWOT Builds",
      location: "Remote",
      period: "2025 — Present",
      desc: "Building and maintaining a multi-user platform that connects employers, professionals, startup founders, and investors. Working across the full frontend stack with Next.js, TypeScript, and Tailwind.",
      details: [
        "Building and maintaining a multi-user platform that connects employers, professionals, startup founders, and investors.",
        "Developing responsive interfaces with Next.js, TypeScript, and Tailwind to improve usability across desktop and mobile.",
        "Collaborating with backend and product teams to ship features faster and keep UI behavior consistent across modules.",
      ],
    },
    {
      role: "React Instructor",
      org: "SQI College of ICT",
      location: "Abeokuta, Nigeria",
      period: "2025 — Present",
      desc: "Teaching React to students as part of my NYSC posting. Covering component architecture, hooks, state management, and building real-world projects.",
      details: [
        "Teaching React to students as part of my NYSC posting, with emphasis on practical project-based learning.",
        "Covering component architecture, hooks, state management, routing, and API integration with real-world examples.",
        "Mentoring students through assignments and capstone projects, helping them build deployable frontend applications.",
      ],
    },
    {
      role: "Tech Instructor",
      org: "Part-Time",
      location: "Ibadan, Nigeria",
      period: "2024 — Present",
      desc: "Teaching Scratch programming and basic HTML/CSS to young learners, introducing them to coding fundamentals through fun, creative projects.",
      details: [
        "Teaching Scratch programming and basic HTML/CSS to young learners using age-appropriate, hands-on lessons.",
        "Designing interactive class activities that improve confidence in problem-solving and logical thinking.",
        "Tracking learner progress and adapting lesson delivery to support different learning paces.",
      ],
    },
  ],
  uk: [
    {
      role: "Full-Stack Developer",
      org: "SWOT Builds",
      location: "Remote",
      period: "2024 — Present",
      desc: "Building and maintaining a multi-user platform that connects employers, professionals, startup founders, and investors. Working across the full stack with Next.js, TypeScript, and Tailwind.",
      details: [
        "Building and maintaining a multi-user platform that connects employers, professionals, startup founders, and investors.",
        "Developing responsive, accessible interfaces with Next.js, TypeScript, and Tailwind to improve usability across desktop and mobile.",
        "Collaborating with backend and product teams to ship features faster and keep UI behaviour consistent across modules.",
      ],
    },
    {
      role: "React Instructor",
      org: "SQI College of ICT",
      location: "Remote",
      period: "2024 — 2025",
      desc: "Taught React to students, covering component architecture, hooks, state management, and building real-world projects.",
      details: [
        "Taught React with an emphasis on practical, project-based learning.",
        "Covered component architecture, hooks, state management, routing, and API integration with real-world examples.",
        "Mentored students through assignments and capstone projects, helping them build and deploy frontend applications.",
      ],
    },
    {
      role: "Freelance Web Developer",
      org: "Self-Employed",
      location: "Remote",
      period: "2022 — 2024",
      desc: "Designed and developed responsive websites and web applications for small businesses and individual clients.",
      details: [
        "Designed and developed responsive websites and web apps for small businesses and individual clients.",
        "Built React and JavaScript frontends with clean, reusable, maintainable component architecture.",
        "Handled projects end-to-end, from gathering requirements through design, build, and deployment.",
      ],
    },
  ],
} as const;

// ─── Backwards-compatible defaults (Nigerian) ─────────────────────────────────

export const personal = personalByRegion.ng;
export const experience = experienceByRegion.ng;
