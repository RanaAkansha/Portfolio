import React, { useState } from "react";
import { personalInfo, projects, skills } from "../../data/portfolio";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 20px",
        background: "rgba(10,10,26,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(108,92,231,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        className="font-display"
        style={{ fontSize: 12, letterSpacing: 2, color: "var(--color-accent)" }}
      >
        {personalInfo.name.toUpperCase()}
      </span>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "1px solid var(--color-primary)",
          borderRadius: 6,
          padding: "6px 12px",
          color: "var(--color-text)",
          cursor: "pointer",
          fontFamily: "var(--font-display)",
          fontSize: 10,
          letterSpacing: 1,
        }}
      >
        {open ? "✕" : "☰"} MENU
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,26,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(108,92,231,0.15)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {["hero", "about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(108,92,231,0.08)",
                padding: "14px 20px",
                color: "var(--color-text)",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function MobileHero() {
  return (
    <section id="hero" className="mobile-section" style={{ justifyContent: "center" }}>
      <div
        className="font-display"
        style={{
          fontSize: 10,
          letterSpacing: 6,
          color: "var(--color-text-muted)",
          marginBottom: 16,
          textTransform: "uppercase",
        }}
      >
        Welcome to
      </div>
      <h1
        className="font-display glow-text"
        style={{
          fontSize: "clamp(28px, 8vw, 48px)",
          color: "var(--color-accent-glow)",
          letterSpacing: 4,
          marginBottom: 12,
          textAlign: "center",
        }}
      >
        {personalInfo.name.toUpperCase()}
      </h1>
      <p
        className="font-display"
        style={{
          fontSize: 12,
          letterSpacing: 3,
          color: "var(--color-primary-light)",
          textTransform: "uppercase",
          marginBottom: 32,
        }}
      >
        {personalInfo.tagline}
      </p>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#projects"
          className="contact-btn"
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Projects
        </a>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            border: "1px solid var(--color-primary)",
            borderRadius: 8,
            color: "var(--color-primary-light)",
            textDecoration: "none",
            fontFamily: "var(--font-display)",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Resume
        </a>
      </div>
    </section>
  );
}

function MobileAbout() {
  return (
    <section id="about" className="mobile-section">
      <h2
        className="font-display"
        style={{
          fontSize: 20,
          letterSpacing: 3,
          color: "var(--color-accent)",
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        About
      </h2>
      <div
        className="glass"
        style={{
          padding: 24,
          maxWidth: 500,
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--color-text)",
            marginBottom: 20,
          }}
        >
          {personalInfo.bio}
        </p>
        <div style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 2 }}>
          <div>💼 {personalInfo.title}</div>
          <div>📧 {personalInfo.email}</div>
        </div>
      </div>
    </section>
  );
}

function MobileProjects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="mobile-section">
      <h2
        className="font-display"
        style={{
          fontSize: 20,
          letterSpacing: 3,
          color: "#fd79a8",
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 500,
          width: "100%",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              setExpanded(expanded === project.id ? null : project.id)
            }
            style={{
              borderLeftColor: project.color,
              borderLeftWidth: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: 15,
                  color: project.color,
                  letterSpacing: 1,
                }}
              >
                {project.title}
              </h3>
              {project.featured && (
                <span style={{ fontSize: 10, color: "#ffd700" }}>★ FEATURED</span>
              )}
            </div>

            {expanded === project.id ? (
              <>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 16,
                  }}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono"
                      style={{
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(108,92,231,0.1)",
                        fontSize: 10,
                        color: "var(--color-primary-light)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                    style={{
                      textDecoration: "none",
                      fontSize: 10,
                      padding: "8px 16px",
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 16px",
                      border: "1px solid var(--color-primary)",
                      borderRadius: 8,
                      color: "var(--color-primary-light)",
                      textDecoration: "none",
                      fontSize: 10,
                      fontFamily: "var(--font-display)",
                      letterSpacing: 1,
                    }}
                  >
                    Source
                  </a>
                </div>
              </>
            ) : (
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {project.description.slice(0, 80)}... <span style={{ color: "var(--color-accent)" }}>tap to expand</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileSkills() {
  const categoryColors = {
    frontend: "#6c5ce7",
    backend: "#00cec9",
    tools: "#0984e3",
  };

  return (
    <section id="skills" className="mobile-section">
      <h2
        className="font-display"
        style={{
          fontSize: 20,
          letterSpacing: 3,
          color: "#0984e3",
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        Skills
      </h2>
      <div style={{ maxWidth: 500, width: "100%" }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: 28 }}>
            <h3
              className="font-display"
              style={{
                fontSize: 11,
                letterSpacing: 3,
                color: categoryColors[category],
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              {category}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {items.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: "rgba(15,15,40,0.4)",
                    border: "1px solid rgba(108,92,231,0.1)",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      color: "var(--color-text)",
                      flex: 1,
                    }}
                  >
                    {skill.name}
                  </span>
                  <div className="skill-level-bar" style={{ flex: 1 }}>
                    <div
                      className="skill-level-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: categoryColors[category],
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileContact() {
  return (
    <section id="contact" className="mobile-section">
      <h2
        className="font-display"
        style={{
          fontSize: 20,
          letterSpacing: 3,
          color: "var(--color-primary-light)",
          marginBottom: 8,
          textTransform: "uppercase",
        }}
      >
        Contact
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-muted)",
          marginBottom: 28,
          textAlign: "center",
        }}
      >
        Let's build something amazing together.
      </p>

      <div
        className="glass"
        style={{ padding: 24, maxWidth: 500, width: "100%" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Demo mode)");
          }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <input className="contact-input" type="text" placeholder="Name" required />
          <input className="contact-input" type="email" placeholder="Email" required />
          <textarea
            className="contact-input"
            placeholder="Message"
            rows={4}
            required
            style={{ resize: "vertical" }}
          />
          <button type="submit" className="contact-btn">
            Send →
          </button>
        </form>

        <div
          style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid rgba(108,92,231,0.15)",
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 13 }}
          >
            📧 Email
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 13 }}
          >
            💻 GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 13 }}
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default function MobilePortfolio() {
  return (
    <div className="mobile-portfolio">
      <MobileNav />
      <MobileHero />
      <MobileAbout />
      <MobileProjects />
      <MobileSkills />
      <MobileContact />
      {/* Footer */}
      <div
        style={{
          padding: "24px 20px",
          textAlign: "center",
          fontSize: 11,
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Built with React + Three.js • {new Date().getFullYear()}
      </div>
    </div>
  );
}
