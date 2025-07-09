# Hero Images

This folder contains images specifically for the Hero section of the YTM Group website.

## Recommended Images for YTM Group

### 📸 **Professional Team Photo** 
- **File name**: `professional-team.jpg` / `professional-team.webp`
- **Size**: 1200x800px or 1920x1280px
- **Description**: Professional photo of the YTM Group team in business attire
- **Usage**: Main hero image on homepage

### 🏢 **Office Environment**
- **File name**: `office-exterior.jpg` / `office-interior.jpg`  
- **Size**: 1200x800px or 1920x1280px
- **Description**: Professional photos of your office space
- **Usage**: About page, contact page backgrounds

### 👔 **Individual Professional Headshots**
- **File name**: `ceo-headshot.jpg`, `founder-headshot.jpg`
- **Size**: 800x800px (square) or 600x800px (portrait)
- **Description**: High-quality professional headshots of key team members
- **Usage**: About section, leadership profiles

### 💼 **Business Meeting/Consultation**
- **File name**: `consultation-meeting.jpg`
- **Size**: 1200x800px
- **Description**: Professional photo showing client consultation or team meeting
- **Usage**: Services pages, consultation call-to-action sections

## Image Requirements

- **Format**: WebP (preferred) + JPG (fallback)
- **Quality**: High resolution, professional photography
- **Style**: Clean, professional, consistent lighting
- **Colors**: Should complement the blue/white color scheme
- **People**: Professional business attire, genuine expressions

## Current Hero Implementation

The Hero component is currently set up to use:
```typescript
heroImage="" // Add your professional photo URL here
heroImageAlt="YTM Group Financial Services Team"
```

Once you add your images, update the HomePage.tsx file:
```typescript
import HeroImage from '@/assets/hero/professional-team.jpg';

// Then in the Hero component:
heroImage={HeroImage}
``` 