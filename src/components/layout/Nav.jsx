import { useState, useEffect } from "react";
import { useScrollNav } from "../../hooks/useScrollNav";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Nav() {
  const scrolled = useScrollNav(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Use scroll spy to get active section
  const activeSection = useScrollSpy(["home", "about", "projects", "toolbox", "experience", "writing", "contact"], 120);

  // Map active section to navbar highlights
  let activeNavId = "";
  if (activeSection === "projects" || activeSection === "toolbox") {
    activeNavId = "projects";
  } else if (activeSection === "experience" || activeSection === "writing") {
    activeNavId = "experience";
  } else if (activeSection === "contact") {
    activeNavId = "contact";
  }

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? "bg-surface/80 backdrop-blur-lg border-b border-border/70 py-3.5 shadow-[0_2px_15px_rgba(15,23,42,0.02)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-10">
            {/* Logo / Name */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-small font-semibold text-text-primary tracking-tight hover:text-accent transition-colors duration-300"
            >
              Akansha Rana
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link) => {
                const isActive = activeNavId === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-small font-medium transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Resume CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-primary text-xs py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-border/70 absolute top-full left-0 right-0 shadow-lg">
            <div className="container-max py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeNavId === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-small font-medium transition-colors ${
                      isActive 
                        ? "bg-accent/5 text-accent font-semibold" 
                        : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-2 flex items-center justify-end gap-2">
                <a
                  href="/resume.pdf"
                  download="Akansha_Rana_Resume.pdf"
                  className="btn-primary text-xs justify-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
