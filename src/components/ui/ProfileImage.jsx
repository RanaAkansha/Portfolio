import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Reusable profile image component
export default function ProfileImage({
  alt = "Akansha Rana — Software developer smiling outdoors",
  className = "",
  size = "md", // md | lg
  shape = "rounded", // rounded | circle
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || prefersReduced) {
      setIsVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [prefersReduced]);

  // Image sources: place optimized images in `public/`
  // - /profile.webp (preferred)
  // - /profile.jpg (fallback)
  // Optionally include 2x variants as /profile@2x.jpg and /profile@2x.webp

  const isLarge = size === 'lg';
  const maxClass = isLarge ? 'max-w-[360px]' : 'max-w-[280px]';
  const imgSize = isLarge ? 360 : 280;
  const src1x = isLarge ? '/profile.jpg' : '/profile.jpg';
  const src2x = isLarge ? '/profile@2x.jpg' : '/profile@2x.jpg';
  const webp1x = isLarge ? '/profile.webp' : '/profile.webp';
  const webp2x = isLarge ? '/profile@2x.webp' : '/profile@2x.webp';
  const circleWebp = isLarge ? '/profile-circle.webp' : '/profile-circle.webp';
  const circleWebp2x = isLarge ? '/profile-circle@2x.webp' : '/profile-circle@2x.webp';

  const imgClass = shape === 'circle' ? 'rounded-full' : 'rounded-xl';

  return (
    <motion.div
      ref={ref}
      className={`${maxClass} mx-auto md:mx-0 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={!prefersReduced ? { translateY: -4, scale: 1.02 } : {}}
    >
      <div className={`relative overflow-hidden shadow-lg profile-border profile-float ${shape === 'circle' ? 'rounded-full' : 'rounded-2xl'}`}>
        {shape === 'circle' ? (
          <div className="rounded-full ring-1 ring-accent/20 p-0.5 bg-white/30 overflow-hidden">
            <picture>
              <source srcSet={`${circleWebp} 1x, ${circleWebp2x} 2x`} type="image/webp" />
              <img
                src={src1x}
                srcSet={`${src1x} 1x, ${src2x} 2x`}
                sizes={`(max-width: 768px) ${Math.round(imgSize * 0.6)}px, ${imgSize}px`}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-auto block object-cover rounded-full`}
                width={imgSize}
                height={imgSize}
              />
            </picture>
          </div>
        ) : (
          <picture>
            <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
            <img
              src={src1x}
              srcSet={`${src1x} 1x, ${src2x} 2x`}
              sizes={`(max-width: 768px) ${Math.round(imgSize * 0.6)}px, ${imgSize}px`}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`w-full h-auto ${imgClass} object-cover`}
              width={imgSize}
              height={imgSize}
            />
          </picture>
        )}
      </div>
    </motion.div>
  );
}
