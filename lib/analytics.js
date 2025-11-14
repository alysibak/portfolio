// Analytics tracking utilities for Vercel Analytics
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', eventName, properties);
  }
};

// Pre-defined events for consistency
export const EVENTS = {
  // Resume actions
  RESUME_VIEWED: 'resume_viewed',
  RESUME_DOWNLOADED: 'resume_downloaded',

  // Navigation
  PAGE_VIEW: 'page_view',
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',

  // Contact actions
  EMAIL_COPIED: 'email_copied',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  SOCIAL_LINK_CLICKED: 'social_link_clicked',

  // Project interactions
  PROJECT_VIEWED: 'project_viewed',
  PROJECT_GITHUB_CLICKED: 'project_github_clicked',
  PROJECT_DEMO_CLICKED: 'project_demo_clicked',
  PROJECT_FILTERED: 'project_filtered',

  // Engagement
  THEME_TOGGLED: 'theme_toggled',
  SCROLL_TO_SECTION: 'scroll_to_section',
  TIME_ON_PAGE: 'time_on_page',
};

// Track page views
export const trackPageView = (page) => {
  trackEvent(EVENTS.PAGE_VIEW, { page });
};

// Track external link clicks
export const trackExternalLink = (url, label) => {
  trackEvent(EVENTS.EXTERNAL_LINK_CLICKED, { url, label });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent(EVENTS.SOCIAL_LINK_CLICKED, { platform });
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent(EVENTS.RESUME_DOWNLOADED);
};

// Track email copy
export const trackEmailCopy = () => {
  trackEvent(EVENTS.EMAIL_COPIED);
};

// Track theme toggle
export const trackThemeToggle = (theme) => {
  trackEvent(EVENTS.THEME_TOGGLED, { theme });
};

// Track time on page
export const trackTimeOnPage = (duration) => {
  trackEvent(EVENTS.TIME_ON_PAGE, { duration });
};

// Track project interactions
export const trackProjectView = (projectTitle) => {
  trackEvent(EVENTS.PROJECT_VIEWED, { project: projectTitle });
};

export const trackProjectGithubClick = (projectTitle) => {
  trackEvent(EVENTS.PROJECT_GITHUB_CLICKED, { project: projectTitle });
};

export const trackProjectFilter = (filter) => {
  trackEvent(EVENTS.PROJECT_FILTERED, { filter });
};
