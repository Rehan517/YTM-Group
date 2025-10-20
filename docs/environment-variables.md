# Environment Variables Configuration

This document outlines the environment variables needed for SEO and analytics functionality in the YTM Group website.

## Required Environment Variables

### Google Analytics
```bash
# Google Analytics 4 Tracking ID
# Get this from Google Analytics: Admin > Data Streams > Web > Measurement ID
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Site Configuration
```bash
# Site URLs and basic information
VITE_SITE_URL=https://ytmgroup.com.au
VITE_SITE_NAME=YTM Group
```

### Contact Information
```bash
# Business contact details used in structured data
VITE_PHONE=+61-3-7046-9786
VITE_EMAIL=info@ytmgroup.com.au
VITE_ADDRESS_STREET=1 Princess St
VITE_ADDRESS_CITY=Kew
VITE_ADDRESS_STATE=VIC
VITE_ADDRESS_POSTCODE=3101
VITE_ADDRESS_COUNTRY=AU
```

### Optional Social Media
```bash
# Social media handles for Open Graph and structured data
VITE_TWITTER_HANDLE=@ytmgroup
VITE_LINKEDIN_URL=https://linkedin.com/company/ytmgroup
VITE_FACEBOOK_URL=https://facebook.com/ytmgroup
```

## Setup Instructions

1. Create a `.env` file in the project root
2. Copy the variables above and replace with actual values
3. For Google Analytics:
   - Sign up for Google Analytics 4
   - Create a new property for ytmgroup.com.au
   - Get the Measurement ID (starts with G-)
   - Replace `G-XXXXXXXXXX` with your actual ID

## Development vs Production

- In development, Google Analytics is disabled by default
- Set `enableDevelopmentTracking={true}` in the GoogleAnalytics component to test tracking locally
- Production builds will automatically load Google Analytics if the tracking ID is provided

## Vite Environment Variables

- All environment variables must be prefixed with `VITE_` to be accessible in the browser
- Access them using `import.meta.env.VITE_VARIABLE_NAME` in your code
- Environment variables are exposed to client-side code, so don't include sensitive information

## Security Notes

- Never commit actual environment variables to version control
- Keep sensitive information like tracking IDs secure
- Use different tracking IDs for staging and production environments
- Remember that Vite environment variables are publicly accessible in the browser bundle 