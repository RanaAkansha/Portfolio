import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const checkActiveSection = () => {
      // If we are at the very top of the page, select the first section
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // If we are at the bottom of the page, select the last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let currentActive = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section is in the viewport top range
          if (rect.top <= offset && rect.bottom > offset) {
            currentActive = id;
            break;
          }
        }
      }

      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", checkActiveSection, { passive: true });
    checkActiveSection(); // Run initially

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
