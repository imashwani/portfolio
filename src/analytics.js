import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId, {
    gaOptions: {
      anonymizeIp: true, // Privacy: anonymize IP addresses
    },
  });
};

// Track page views
export const trackPageView = (path, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent('User Interaction', 'Button Click', buttonName);
};

// Track link clicks
export const trackLinkClick = (linkName, url) => {
  trackEvent('User Interaction', 'Link Click', `${linkName} - ${url}`);
};

// Track download events
export const trackDownload = (fileName) => {
  trackEvent('Download', 'File Download', fileName);
};

// Track section views (for single-page apps)
export const trackSectionView = (sectionName) => {
  trackEvent('Navigation', 'Section View', sectionName);
};

// Track email interactions
export const trackEmailClick = () => {
  trackEvent('Contact', 'Email Click', 'ashwani.p30@gmail.com');
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  trackEvent('Social Media', 'Click', platform, url);
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackLinkClick,
  trackDownload,
  trackSectionView,
  trackEmailClick,
  trackSocialClick,
}; 