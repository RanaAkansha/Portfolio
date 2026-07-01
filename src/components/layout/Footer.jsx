export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-small text-text-muted">
          © {year} Akansha Rana. Designed and built from scratch.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RanaAkansha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akansha-rana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://akansharana.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Substack
          </a>
        </div>
      </div>
    </footer>
  );
}
