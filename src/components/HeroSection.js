import React from 'react';
import { icons } from '../data';

const HeroSection = ({ 
  personalInfo, 
  handleViewWorkClick, 
  handleDownloadResumeClick, 
  handleEmailClick, 
  handleLinkedInClick 
}) => {
  const CheckmarkIcon = icons.checkmark;
  const DownloadIcon = icons.download;
  const EmailIcon = icons.email;
  const LinkedinIcon = icons.linkedin;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <img 
          src={process.env.PUBLIC_URL + personalInfo.image} 
          alt={personalInfo.name} 
          className="profile-image" 
        />
        <h1 className="hero-title">{personalInfo.name}</h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <p className="hero-description">{personalInfo.description}</p>
        
        <div className="hero-buttons">
          <button onClick={handleViewWorkClick} className="btn-primary">
            <CheckmarkIcon />
            View My Work
          </button>
          <a 
            href={process.env.PUBLIC_URL + personalInfo.resume} 
            download 
            onClick={handleDownloadResumeClick}
            className="btn-secondary"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
        
        <div className="social-links">
          <a 
            href={`mailto:${personalInfo.email}`} 
            onClick={handleEmailClick}
            className="social-link"
          >
            <EmailIcon />
          </a>
          <a 
            href={personalInfo.linkedIn} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleLinkedInClick}
            className="social-link"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 