# YTM Group Logos & Brand Assets

This folder contains all logo variations and brand assets for the YTM Group website.

## Required Logo Variations

### 🎨 **Primary YTM Group Logo**
- **File name**: `ytm-logo.svg` / `ytm-logo.png`
- **Usage**: Main website header, footer, business cards
- **Format**: SVG (preferred) for scalability
- **Colors**: Original brand colors

### 🌙 **Dark Theme Variation**
- **File name**: `ytm-logo-dark.svg`
- **Usage**: Dark backgrounds, dark mode
- **Colors**: White or light colored version

### ☀️ **Light Theme Variation**  
- **File name**: `ytm-logo-light.svg`
- **Usage**: Light backgrounds, overlays
- **Colors**: Dark version for light backgrounds

### 📱 **Icon/Symbol Only**
- **File name**: `ytm-icon.svg` / `ytm-icon.png`
- **Usage**: Favicons, mobile app icons, small spaces
- **Size**: Square format, scalable

### 📄 **Horizontal Layout**
- **File name**: `ytm-logo-horizontal.svg`
- **Usage**: Headers, letterheads, wide layout spaces
- **Format**: Wide horizontal arrangement

## Certification & Partner Logos

### 🏆 **Professional Certifications**
- `afsl-license.svg` - Australian Financial Services License
- `cfp-certified.svg` - Certified Financial Planner
- `cpa-australia.svg` - CPA Australia
- `apa-member.svg` - Australian Payroll Association

### 🤝 **Partner/Affiliate Logos**
- Add partner company logos as needed
- Maintain original brand guidelines
- Use SVG format when possible

## Technical Specifications

### SVG Requirements
- Scalable vector format (preferred)
- Optimize for web (remove unnecessary elements)
- Include both color and monochrome versions
- Ensure proper viewBox settings

### PNG Requirements  
- Transparent background
- Multiple sizes: 64x64, 128x128, 256x256, 512x512
- High resolution for retina displays
- Optimized file size

## Usage in Code

### Import and Use Logo
```typescript
import YTMLogo from '@/assets/logos/ytm-logo.svg';
import YTMLogoDark from '@/assets/logos/ytm-logo-dark.svg';

// In component
<img src={YTMLogo} alt="YTM Group" className="h-8 w-auto" />

// For dark mode
<img src={YTMLogoDark} alt="YTM Group" className="h-8 w-auto" />
```

### In Header Component
The Header component can be updated to use your logo:
```typescript
// Replace the current text logo with:
<img src={YTMLogo} alt="YTM Group" className="h-8 w-auto" />
```

## Brand Guidelines

- Always maintain proper spacing around logos
- Don't stretch or distort logo proportions  
- Use appropriate contrast for readability
- Follow minimum size requirements
- Ensure logos are sharp at all display sizes

## Current Implementation

The website currently uses text-based branding. Once you add your logo files, you can update the Header component to display your professional YTM Group logo. 