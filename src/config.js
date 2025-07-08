// Configuration file for the portfolio website

export const config = {
  // Google Analytics 4 Tracking ID
  // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
  // You can get this from your Google Analytics property settings
  GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX',
  
  // Website information
  SITE_NAME: 'Ashwani Prasad - Portfolio',
  SITE_URL: 'https://imashwani.github.io/portfolio/',
  
  // Contact information
  EMAIL: 'ashwani.p30@gmail.com',
  LINKEDIN_URL: 'https://www.linkedin.com/in/ashwani-prasad/',
  
  // Feature flags
  ENABLE_ANALYTICS: true,
  ENABLE_PRIVACY_MODE: true, // Anonymizes IP addresses
};

export default config; 