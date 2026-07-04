Profile image integration

Where to place images

- Put optimized profile images in the `public/` folder:
  - `public/profile.webp` (preferred, modern format)
  - `public/profile@2x.webp` (optional, 2x for high-DPI)
  - `public/profile.jpg` (fallback)
  - `public/profile@2x.jpg` (optional)

Guidelines

- Use a high-resolution source and export web-optimized versions (WebP + JPEG).
- Crop to a square while keeping subject centered. Recommended source: 1000–2000 px on the largest side, then export 280px and 560px variants.
- Ensure visual subject has some breathing room; keep soft rounded corners and subtle background.

Performance tips

- Pre-generate WebP and 2x variants using an image tool (Squoosh, ImageMagick, etc.).
- Keep the `width`/`height` attributes on the `<img>` (component already sets `width="280" height="280"`) to avoid layout shift.
- Use `loading="lazy"` and `decoding="async"` (already implemented) for deferred loading.

Accessibility

- The component includes `alt` text. Edit `src/components/ui/ProfileImage.jsx` to customize the `alt` prop if needed.

Quick test

1. Copy your profile images to `public/` with the exact names above.
2. Start the dev server: `npm run dev` (or the project's start command).
3. Open the homepage and resize the window to verify responsive layout and animations.

If you want, I can also generate responsive WebP/JPEG variants from the attached photo and add them to the repo — tell me if you'd like that and confirm you want me to create files in `public/`.
