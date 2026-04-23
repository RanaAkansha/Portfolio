import React, { useEffect, useState } from "react";

export default function AchievementToast({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="achievement-toast glass-strong glow-accent">
      <span style={{ fontSize: 24 }}>🏆</span>
      <div>
        <div
          className="font-display"
          style={{
            fontSize: 10,
            letterSpacing: 2,
            color: "var(--color-accent)",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          Achievement Unlocked
        </div>
        <div
          style={{
            fontSize: 14,
            color: "var(--color-text-bright)",
            fontWeight: 600,
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
