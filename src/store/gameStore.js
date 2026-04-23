import { create } from "zustand";
import { zonePositions } from "../data/portfolio";

const useGameStore = create((set, get) => ({
  // Player state
  playerPosition: [0, 0, 0],
  playerRotation: 0,
  isMoving: false,
  moveTarget: null, // For click-to-move

  // Game state
  gameStarted: false,
  isLoaded: false,
  loadingProgress: 0,
  currentZone: "spawn",
  visitedZones: new Set(["spawn"]),

  // UI state
  activePanel: null, // 'about' | 'projects' | 'skills' | 'contact' | null
  selectedProject: null,
  showAchievement: null,
  isMobile: window.innerWidth < 768,
  showControls: true,

  // Camera
  cameraMode: "follow", // 'follow' | 'cinematic' | 'free'

  // Actions
  setPlayerPosition: (pos) => set({ playerPosition: pos }),
  setPlayerRotation: (rot) => set({ playerRotation: rot }),
  setIsMoving: (val) => set({ isMoving: val }),
  setMoveTarget: (target) => set({ moveTarget: target }),

  startGame: () => set({ gameStarted: true }),
  setLoaded: () => set({ isLoaded: true }),
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),

  setCurrentZone: (zone) => {
    const state = get();
    const newVisited = new Set(state.visitedZones);
    const isNew = !newVisited.has(zone);
    newVisited.add(zone);
    set({ currentZone: zone, visitedZones: newVisited });

    // Show achievement for newly discovered zones
    if (isNew && zone !== "spawn") {
      const zoneNames = {
        about: "About Section",
        experience: "Experience Timeline",
        projects: "Projects Gallery",
        skills: "Skills Lab",
        contact: "Contact Terminal",
      };
      set({ showAchievement: `🏆 Discovered: ${zoneNames[zone] || zone}` });
      setTimeout(() => set({ showAchievement: null }), 3000);
    }
  },

  setActivePanel: (panel) => set({ activePanel: panel }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  closeAllPanels: () =>
    set({ activePanel: null, selectedProject: null }),

  teleportTo: (zone) => {
    const pos = zonePositions[zone];
    
    if (pos) {
      set({ moveTarget: [pos.x, 0, pos.z] });
    }
    
    // visitedZones update
    const state = get();
    const newVisited = new Set(state.visitedZones);
    const isNew = !newVisited.has(zone);
    newVisited.add(zone);
    set({ visitedZones: newVisited });
    if (isNew) {
      const zoneNames = {
        about: "About Section",
        experience: "Experience Timeline",
        projects: "Projects Gallery",
        skills: "Skills Lab",
        contact: "Contact Terminal",
      };
      set({ showAchievement: `🏆 Discovered: ${zoneNames[zone] || zone}` });
      setTimeout(() => set({ showAchievement: null }), 3000);
    }
  },

  setCameraMode: (mode) => set({ cameraMode: mode }),
  setShowControls: (val) => set({ showControls: val }),
}));

export default useGameStore;
