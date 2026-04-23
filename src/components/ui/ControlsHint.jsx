import React from "react";

export default function ControlsHint() {
  return (
    <div className="controls-hint glass">
      <div style={{ marginBottom: 6 }}>
        <span className="key-badge">W</span>
        <span className="key-badge">A</span>
        <span className="key-badge">S</span>
        <span className="key-badge">D</span>
        <span style={{ marginLeft: 6 }}>Move</span>
      </div>
      <div style={{ marginBottom: 6 }}>
        <span className="key-badge" style={{ width: "auto", padding: "0 6px" }}>
          RMB
        </span>
        <span style={{ marginLeft: 6 }}>+ Drag to look</span>
      </div>
      <div>
        <span className="key-badge" style={{ width: "auto", padding: "0 6px" }}>
          Click
        </span>
        <span style={{ marginLeft: 6 }}>Interact</span>
      </div>
    </div>
  );
}
