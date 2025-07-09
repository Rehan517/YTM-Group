# Assets Folder Structure

This folder contains all static assets for the YTM Group website.

## Folder Organization

### 📁 `/images`
General website images, graphics, and illustrations
- Background images
- Decorative graphics
- General purpose images

### 📁 `/logos`
Company logos and brand assets
- YTM Group logo (various formats)
- Partner logos
- Certification logos
- Brand variations (light/dark themes)

### 📁 `/icons`
Custom icon files and graphics
- Custom SVG icons
- Favicon files
- App icons

### 📁 `/hero`
Hero section images and backgrounds
- Professional headshots
- Office photos
- Hero background images
- Banner graphics

### 📁 `/services`
Service-related imagery
- Service category illustrations
- Process diagrams
- Service-specific graphics

### 📁 `/team`
Team member photos and related images
- Professional headshots
- Team photos
- About page imagery

## File Naming Conventions

Please follow these naming conventions for consistency:

- Use kebab-case: `file-name.jpg`
- Include descriptive names: `ytm-logo-dark.svg`
- Add size indicators when needed: `hero-image-1920x1080.jpg`
- Include theme variants: `logo-light.svg`, `logo-dark.svg`

## Recommended File Formats

- **Logos**: SVG (preferred), PNG with transparency
- **Photos**: WebP (modern), JPG (fallback)
- **Icons**: SVG (preferred), PNG for complex icons
- **Graphics**: SVG for simple graphics, PNG for complex

## How to Import Assets

```typescript
// Import from the assets folder
import heroImage from '@/assets/hero/professional-team.jpg';
import ytmLogo from '@/assets/logos/ytm-logo.svg';
import serviceIcon from '@/assets/icons/financial-planning.svg';

// Use in components
<img src={heroImage} alt="YTM Group Team" />
<img src={ytmLogo} alt="YTM Group" />
```

## Optimization Tips

1. Compress images before adding them
2. Provide WebP and fallback formats for photos
3. Use SVG for logos and simple graphics
4. Consider responsive image sizes for different devices 