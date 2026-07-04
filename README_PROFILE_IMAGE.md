Generating optimized profile images

This project includes a helper script to generate responsive WebP and JPEG variants for your profile photo.

Prerequisites

- Node.js (14+)
- Install `sharp` in the project:

```bash
npm install --save-dev sharp
```

Usage

1. Place your high-resolution source image somewhere (for example `./my-photo.jpg`).
2. Run the script to generate images into `public/`:

```bash
npm run generate:profile -- ./my-photo.jpg
# or
node ./scripts/generate-profile-images.js ./my-photo.jpg
```

Output

- `public/profile.webp` (280x280)
- `public/profile@2x.webp` (560x560)
- `public/profile.jpg` (280x280)
- `public/profile@2x.jpg` (560x560)

Notes

- The script crops to square using `cover`. If you'd like a different crop focal point, pre-crop your source image.
- After running, refresh the site to see the optimized images load in the Hero.
- If you prefer, I can generate these images for you — upload the high-res source into the repo or give me permission to create files directly.
