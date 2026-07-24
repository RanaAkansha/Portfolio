import { useState, useEffect } from "react";
import { useScrollNav } from "../../hooks/useScrollNav";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",       href: "#home",       id: "home"       },
  { label: "About",      href: "#about",      id: "about"      },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects",   href: "#projects",   id: "projects"   },
  { label: "Writing",    href: "#writing",    id: "writing"    },
  { label: "Contact",    href: "#contact",    id: "contact"    },
];

export default function Nav({ toggleTheme, isDark }) {
  const scrolled   = useScrollNav(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSection = useScrollSpy(
    ["home", "projects", "experience", "toolbox", "about", "writing", "contact"],
    120
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-border py-3 shadow-[0_1px_0_rgba(15,23,42,0.05)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-9">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-small font-semibold text-text-primary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="Back to top"
            >
              Akansha Rana
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-small font-medium rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-md bg-surface-hover -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-hover transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-primary text-xs py-2 px-4"
                aria-label="Download resume PDF"
              >
                Resume
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button
                className="p-2 rounded-md hover:bg-surface-hover transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-surface/97 backdrop-blur-xl border-b border-border absolute top-full left-0 right-0 shadow-lg"
            >
              <div className="container-max py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3 py-2.5 rounded-lg text-small font-medium transition-colors ${
                        isActive
                          ? "bg-surface-hover text-text-primary font-semibold"
                          : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-border">
                  <a
                    href="/resume.pdf"
                    download="Akansha_Rana_Resume.pdf"
                    className="btn-primary text-xs w-full justify-center"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
