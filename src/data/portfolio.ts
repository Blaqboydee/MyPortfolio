export const personal = {
  name: "Adeoluwa Adegoke",
  title: "Full-Stack Developer",
  location: "Ibadan, Nigeria",
  email: "adeoluwaadegoke05@gmail.com",
  github: "https://github.com/Blaqboydee",
  linkedin: "https://linkedin.com/in/adegoke-adeoluwa-579119345",
  twitter: "https://twitter.com/blaqboydee",
  tiktok: "https://tiktok.com/@blaqboydee5",
  whatsapp: "+234 913 376 3902",
  tagline: "I build web apps.",
  sub: "MERN stack. Available for work.",
  about: [
    "I'm a full-stack developer passionate about building interactive, user-first digital experiences. With a balance of frontend design and backend logic, I create applications that are both beautiful and performant.",
    "I started coding in 2022 with HTML and CSS, took a break to focus on university, and returned fully in 2024. Since then I've built several real-world projects and I'm constantly learning and growing.",
  ],
  currently: "I am currently working on Arena",
  arenaLink: "https://arenagameplay.vercel.app/",
};

export const skills = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  Backend: ["Node.js", "Express", "MongoDB", "Socket.io", "Firebase"],
  Tools: ["Git", "Vite", "Vercel"],
  Learning: ["GraphQL", "React Native"],
};

export const projects = [
  {
    id: "01",
    name: "FindAm",
    description:
      "Early-stage startup MVP for connecting people with reliable local professionals. Features a full provider registration flow, customer search, dynamic routing for profiles, and secure authentication.",
    tech: ["Next.js", "React", "MongoDB", "Next API Routes", "JWT"],
    live: "https://findam.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    name: "Arena",
    description:
      "Multiplayer gaming hub where players connect, create private rooms, and compete in real-time. Games include Reaction, TicTacToe, Hangman, Wordle Duel, and Connect Four. Built with a full Socket.io backend for live gameplay and match results.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Socket.io"],
    live: "https://arenagameplay.vercel.app/",
    featured: true,
  },
 {
  id: "03",
  name: "Ember",
  description:
    "Real-time chat PWA with DMs, group chats, typing indicators, online presence, Google OAuth, and offline support. Installable on iOS and Android.",
  tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  live: "https://emberconnect.vercel.app/",
  featured: true,
},
  {
    id: "04",
    name: "Spendly",
    description:
      "Financial expense tracker with category breakdowns, data visualization, and persistent storage.",
    tech: ["React", "Tailwind CSS", "Recharts", "Local Storage"],
    live: "https://spendlytracks.vercel.app/",
    featured: false,
  },
  {
    id: "05",
    name: "Moviemood",
    description:
      "Cinema booking platform with admin dashboard, seat selection, payment integration, and email notifications.",
    tech: ["React", "Node.js", "MongoDB", "Nodemailer", "Express"],
    live: "https://moviemoodcinema.vercel.app/",
    featured: true,
  },
  {
    id: "06",
    name: "myCinema",
    description:
      "Cinema web application where users can browse movies, view details, and book tickets with persistent storage using Firebase.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    live: "https://blaqboydee.github.io/Cinema-WebApp/",
    featured: false,
  },
  {
    id: "07",
    name: "EdenVille",
    description:
      "E-commerce web application offering a seamless shopping experience with user authentication, product browsing, and a functional shopping cart.",
    tech: ["React", "Tailwind CSS", "Firebase", "Local Storage"],
    live: "https://edenville.vercel.app",
    featured: false,
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    org: "SWOT Builds",
    period: "2025 — Present",
    desc: "Building and maintaining a multi-user platform that connects employers, professionals, startup founders, and investors. Working across the full frontend stack with React, TypeScript, and Tailwind.",
  },
  {
    role: "React Instructor",
    org: "SQI College of ICT",
    period: "2025 — Present",
    desc: "Teaching React to students as part of my NYSC posting. Covering component architecture, hooks, state management, and building real-world projects.",
  },
 
  {
    role: "Tech Instructor",
    org: "Part-Time",
    period: "2024 — Present",
    desc: "Teaching Scratch programming and basic HTML/CSS to young learners, introducing them to coding fundamentals through fun, creative projects.",
  },
];