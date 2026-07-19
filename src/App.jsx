import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import Toolbox from "./components/sections/Toolbox";
import About from "./components/sections/About";
import Writing from "./components/sections/Writing";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <Nav toggleTheme={toggleTheme} isDark={theme === "dark"} />

      <main>
        <Hero />
        <Experience />
        <Work />
        <Toolbox />
        <About />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
