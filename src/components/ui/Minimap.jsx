import React from "react";
import useGameStore from "../../store/gameStore";
import { zonePositions } from "../../data/portfolio";

export default function Minimap() {
  const { playerPosition, currentZone, teleportTo } = useGameStore();

  // Map world coords to minimap coords
  const worldSize = 100; // -50 to 50
  const mapSize = 180;

  const worldToMap = (wx, wz) => ({
    x: ((wx + 50) / worldSize) * mapSize,
    y: ((wz + 50) / worldSize) * mapSize,
  });

  const playerMap = worldToMap(playerPosition[0], playerPosition[2]);

  const zoneColors = {
    spawn: "#a29bfe",
    about: "#00cec9",
    projects: "#fd79a8",
    skills: "#0984e3",
    contact: "#6c5ce7",
  };

  const zoneLabels = {
    spawn: "⌂",
    about: "i",
    projects: "◆",
    skills: "⚡",
    contact: "✉",
  };

  return (
    <div className="minimap glass">
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(108,92,231,0.1) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(108,92,231,0.1) 30px)",
        }}
      />

      {/* Zone markers */}
      {Object.entries(zonePositions).map(([name, pos]) => {
        const mapped = worldToMap(pos.x, pos.z);
        const isActive = currentZone === name;
        return (
          <div
            key={name}
            className="minimap-zone"
            onClick={() => teleportTo(name)}
            style={{
              left: mapped.x - 14,
              top: mapped.y - 14,
              width: 28,
              height: 28,
              background: isActive
                ? `${zoneColors[name]}22`
                : "transparent",
              borderColor: isActive
                ? zoneColors[name]
                : `${zoneColors[name]}44`,
              boxShadow: isActive
                ? `0 0 8px ${zoneColors[name]}44`
                : "none",
            }}
            title={`Teleport to ${name}`}
          >
            <span style={{ color: zoneColors[name], fontSize: 10 }}>
              {zoneLabels[name]}
            </span>
          </div>
        );
      })}

      {/* Player dot */}
      <div
        className="minimap-dot"
        style={{
          left: playerMap.x,
          top: playerMap.y,
        }}
      />

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: 4,
          left: 8,
          fontSize: 8,
          fontFamily: "var(--font-display)",
          color: "var(--color-text-muted)",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Map
      </div>
    </div>
  );
}
