import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reusable profile image component
 * Sizes: sm (200px) | md (280px) | lg (360px) | xl (460px)
 * Shapes: rounded | circle
 */
export default function ProfileImage({
  alt = "Akansha Rana — Full Stack Developer",
  className = "",
  size = "md",
  shape = "rounded",
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || prefersReduced) { setIsVisible(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [prefersReduced]);

  // Size configuration — xl is 25% bigger than lg
  const sizeMap = {
    sm:  { maxClass: "max-w-[200px]", px: 200 },
    md:  { maxClass: "max-w-[280px]", px: 280 },
    lg:  { maxClass: "max-w-[380px]", px: 380 },
    xl:  { maxClass: "max-w-[460px]", px: 460 },
  };
  const { maxClass, px } = sizeMap[size] ?? sizeMap.md;

  const imgClass = shape === "circle" ? "rounded-full" : "rounded-xl";

  return (
    <motion.div
      ref={ref}
      className={`${maxClass} mx-auto md:mx-0 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={!prefersReduced ? { y: -4, scale: 1.015 } : {}}
    >
      <div
        className={`relative overflow-hidden profile-border profile-float ${
          shape === "circle" ? "rounded-full" : "rounded-2xl"
        }`}
      >
        {shape === "circle" ? (
          <div className="rounded-full ring-1 ring-accent/15 overflow-hidden">
            <picture>
              <source
                srcSet={`/profile-circle.webp 1x, /profile-circle@2x.webp 2x`}
                type="image/webp"
              />
              <img
                src="/profile-circle.png"
                srcSet={`/profile-circle.png 1x, /profile-circle@2x.png 2x`}
                sizes={`(max-width: 768px) ${Math.round(px * 0.6)}px, ${px}px`}
                alt={alt}
                loading="eager"
                decoding="async"
                className="w-full h-auto block object-cover rounded-full"
                width={px}
                height={px}
              />
            </picture>
          </div>
        ) : (
          <picture>
            <source
              srcSet={`/profile.webp 1x, /profile@2x.webp 2x`}
              type="image/webp"
            />
            <img
              src="/profile.jpg"
              srcSet={`/profile.jpg 1x, /profile@2x.jpg 2x`}
              sizes={`(max-width: 768px) ${Math.round(px * 0.6)}px, ${px}px`}
              alt={alt}
              loading="eager"
              decoding="async"
              className={`w-full h-auto ${imgClass} object-cover`}
              width={px}
              height={px}
            />
          </picture>
        )}
      </div>
    </motion.div>
  );
}
