import { useCallback, useRef, useEffect } from "react";

export default function useSoundEffects() {
  const hoverSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const warpSoundRef = useRef(null);

  useEffect(() => {
    // We use very short, minimalist sound effects (UI clicks, swooshes)
    // Using base64 data URIs or linking to free UI sounds for immediate use
    hoverSoundRef.current = new Audio("https://cdn.freesound.org/previews/256/256116_3263906-lq.mp3"); // Soft tick
    hoverSoundRef.current.volume = 0.1;

    clickSoundRef.current = new Audio("https://cdn.freesound.org/previews/256/256113_3263906-lq.mp3"); // Soft pop
    clickSoundRef.current.volume = 0.2;

    warpSoundRef.current = new Audio("https://cdn.freesound.org/previews/336/336605_5674468-lq.mp3"); // Whoosh
    warpSoundRef.current.volume = 0.3;
  }, []);

  const playHover = useCallback(() => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(e => console.warn("Audio play blocked", e));
    }
  }, []);

  const playClick = useCallback(() => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.warn("Audio play blocked", e));
    }
  }, []);

  const playWarp = useCallback(() => {
    if (warpSoundRef.current) {
      warpSoundRef.current.currentTime = 0;
      warpSoundRef.current.play().catch(e => console.warn("Audio play blocked", e));
    }
  }, []);

  return { playHover, playClick, playWarp };
}
