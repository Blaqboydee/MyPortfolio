import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}