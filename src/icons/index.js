// Export all icon components for easy importing
export { default as CheckmarkIcon } from './CheckmarkIcon';
export { default as DownloadIcon } from './DownloadIcon';
export { default as EmailIcon } from './EmailIcon';
export { default as LinkedinIcon } from './LinkedinIcon';
export { default as CodeIcon } from './CodeIcon';
export { default as DatabaseIcon } from './DatabaseIcon';
export { default as DocumentIcon } from './DocumentIcon';

// You can also export them as a grouped object if preferred
export const Icons = {
  CheckmarkIcon: require('./CheckmarkIcon').default,
  DownloadIcon: require('./DownloadIcon').default,
  EmailIcon: require('./EmailIcon').default,
  LinkedinIcon: require('./LinkedinIcon').default,
  CodeIcon: require('./CodeIcon').default,
  DatabaseIcon: require('./DatabaseIcon').default,
  DocumentIcon: require('./DocumentIcon').default,
}; 