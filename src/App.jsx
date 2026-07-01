import { useState } from "react";
import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Toolbox from "./components/sections/Toolbox";
import Experience from "./components/sections/Experience";
import Writing from "./components/sections/Writing";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ThinkingButton from "./components/ui/ThinkingButton";
import ThinkingPanel from "./components/ui/ThinkingPanel";

export default function App() {
  const [isThinkingOpen, setIsThinkingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[-5%] left-[-15%] w-[600px] h-[600px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-15%] w-[700px] h-[700px] bg-indigo-500/3 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/3 rounded-full blur-[140px] pointer-events-none" />

      <Nav />

      <main>
        <Hero />
        <About />
        <Work />
        <Toolbox />
        <Experience />
        <Writing />
        <Contact />
      </main>

      <Footer />

      <ThinkingButton onClick={() => setIsThinkingOpen(true)} />
      <ThinkingPanel isOpen={isThinkingOpen} onClose={() => setIsThinkingOpen(false)} />
    </div>
  );
}
