import React from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo, projects, skills } from "../../data/portfolio";

function AboutPanel() {
  return (
    <div>
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
        About Me
      </h2>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "var(--color-text)",
          marginBottom: 24,
        }}
      >
        {personalInfo.bio}
      </p>
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: "rgba(108,92,231,0.08)",
          border: "1px solid rgba(108,92,231,0.15)",
        }}
      >
        <div
          className="font-display"
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: "var(--color-primary-light)",
            marginBottom: 8,
          }}
        >
          QUICK INFO
        </div>
        <div style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 2 }}>
          <div>💼 {personalInfo.title}</div>
          <div>📧 {personalInfo.email}</div>
          <div>
            🔗{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              GitHub
            </a>
            {" · "}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href={personalInfo.devTo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              DEV.to
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPanel() {
  const { selectedProject, setSelectedProject } = useGameStore();

  if (selectedProject) {
    return (
      <div>
        <button
          onClick={() => setSelectedProject(null)}
          style={{
            background: "none",
            border: "none",
            color: "var(--color-text-muted)",
            cursor: "pointer",
            fontSize: 13,
            marginBottom: 16,
            fontFamily: "var(--font-mono)",
          }}
        >
          ← Back to all projects
        </button>

        <h2
          className="font-display"
          style={{
            fontSize: 24,
            color: selectedProject.color,
            marginBottom: 8,
            letterSpacing: 2,
          }}
        >
          {selectedProject.title}
        </h2>

        {selectedProject.featured && (
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 20,
              background: "rgba(255,215,0,0.15)",
              border: "1px solid rgba(255,215,0,0.3)",
              fontSize: 11,
              color: "#ffd700",
              marginBottom: 20,
              fontFamily: "var(--font-display)",
              letterSpacing: 1,
            }}
          >
            ★ FEATURED PROJECT
          </span>
        )}

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--color-text)",
            marginBottom: 24,
          }}
        >
          {selectedProject.description}
        </p>

        <div style={{ marginBottom: 24 }}>
          <div
            className="font-display"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: "var(--color-primary-light)",
              marginBottom: 12,
            }}
          >
            TECH STACK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {selectedProject.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono"
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: "rgba(108,92,231,0.1)",
                  border: "1px solid rgba(108,92,231,0.2)",
                  fontSize: 12,
                  color: "var(--color-primary-light)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Live Demo →
          </a>
          <a
            href={selectedProject.repoUrl}
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
              display: "flex",
              alignItems: "center",
              transition: "all 0.3s",
            }}
          >
            Source Code
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
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
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            style={{ borderLeftColor: project.color, borderLeftWidth: 3 }}
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
                  fontSize: 16,
                  color: project.color,
                  letterSpacing: 1,
                }}
              >
                {project.title}
              </h3>
              {project.featured && (
                <span style={{ fontSize: 11, color: "#ffd700" }}>
                  ★ FEATURED
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              {project.description.slice(0, 100)}...
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="font-mono"
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    background: "rgba(108,92,231,0.08)",
                    fontSize: 10,
                    color: "var(--color-text-muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsPanel() {
  const categoryColors = {
    frontend: "#6c5ce7",
    backend: "#00cec9",
    tools: "#0984e3",
  };

  return (
    <div>
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

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: 28 }}>
          <h3
            className="font-display"
            style={{
              fontSize: 12,
              letterSpacing: 3,
              color: categoryColors[category],
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            {category}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map((skill) => (
              <div key={skill.name} className="skill-orb" style={{ flexDirection: "row", gap: 16, padding: "12px 16px" }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    color: "var(--color-text)",
                    flex: 1,
                    minWidth: 120,
                  }}
                >
                  {skill.name}
                </div>
                <div style={{ flex: 2, display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="skill-level-bar" style={{ flex: 1 }}>
                    <div
                      className="skill-level-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      color: categoryColors[category],
                      minWidth: 35,
                      textAlign: "right",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactPanel() {
  return (
    <div>
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
        Get In Touch
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "var(--color-text-muted)",
          marginBottom: 28,
          lineHeight: 1.6,
        }}
      >
        Ready to build something amazing together? Drop me a message.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (Demo mode)");
        }}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <input
          className="contact-input"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-input"
          placeholder="Your Message"
          rows={4}
          required
          style={{ resize: "vertical" }}
        />
        <button type="submit" className="contact-btn" style={{ alignSelf: "flex-start" }}>
          Send Message →
        </button>
      </form>

      {/* Direct links */}
      <div
        style={{
          marginTop: 28,
          padding: 16,
          borderRadius: 12,
          background: "rgba(108,92,231,0.06)",
          border: "1px solid rgba(108,92,231,0.12)",
        }}
      >
        <div
          className="font-display"
          style={{
            fontSize: 10,
            letterSpacing: 2,
            color: "var(--color-text-muted)",
            marginBottom: 12,
          }}
        >
          DIRECT LINKS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            📧 {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            💻 GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            🔗 LinkedIn
          </a>
          <a
            href={personalInfo.devTo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            📝 DEV.to
          </a>
        </div>
      </div>
    </div>
  );
}

export default function InfoPanel() {
  const { activePanel, closeAllPanels } = useGameStore();

  const panels = {
    about: <AboutPanel />,
    projects: <ProjectsPanel />,
    skills: <SkillsPanel />,
    contact: <ContactPanel />,
  };

  return (
    <>
      <div className="overlay-backdrop" onClick={closeAllPanels} />
      <div className="info-panel glass-strong">
        <button className="info-panel-close" onClick={closeAllPanels}>
          ✕
        </button>
        {panels[activePanel]}
      </div>
    </>
  );
}
