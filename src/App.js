
import React, { useEffect } from 'react';
import './App.css';
import { 
  initGA, 
  trackPageView, 
  trackButtonClick, 
  trackEmailClick, 
  trackSocialClick, 
  trackDownload
} from './analytics';
import { config } from './config';
import { personalInfo, experiences, skills, education } from './data';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';

function App() {
  useEffect(() => {
    // Initialize Google Analytics if enabled
    if (config.ENABLE_ANALYTICS && config.GA_TRACKING_ID !== 'G-7Z52HLG2DM') {
      initGA(config.GA_TRACKING_ID);
      
      // Track initial page view
      trackPageView(window.location.pathname, config.SITE_NAME);
    }
  }, []);

  const handleViewWorkClick = () => {
    trackButtonClick('View My Work');
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResumeClick = () => {
    trackDownload('Ashwani_Prasad_Resume.pdf');
  };

  const handleEmailClick = () => {
    trackEmailClick();
  };

  const handleLinkedInClick = () => {
    trackSocialClick('LinkedIn', 'https://www.linkedin.com/in/ashwani-prasad/');
  };

  return (
    <div className="App">
      <HeroSection 
        personalInfo={personalInfo}
        handleViewWorkClick={handleViewWorkClick}
        handleDownloadResumeClick={handleDownloadResumeClick}
        handleEmailClick={handleEmailClick}
        handleLinkedInClick={handleLinkedInClick}
      />

      <main className="main-content">
        <div className="container">
          <ExperienceSection experiences={experiences} />
          <SkillsSection skills={skills} />
          <EducationSection education={education} />
        </div>
      </main>
    </div>
  );
}

export default App;
