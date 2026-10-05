import React from 'react';
import { icons, stats } from '../data';

const HeroSection = ({ personalInfo, handleViewWorkClick, handleDownloadResumeClick, handleEmailClick, handleLinkedInClick }) => {
  const DownloadIcon = icons.download;
  const EmailIcon = icons.email;
  const LinkedinIcon = icons.linkedin;
  return (
    <>
      <nav className="topnav">
        <span className="brand">AP</span>
        <div className="navlinks">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <header className="hero-section">
        <div className="hero-bg"><span className="orb o1" /><span className="orb o2" /><span className="orb o3" /><span className="orb o4" /></div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="eyebrow"><span className="dot" /> Open to Senior / SDE III roles · Bengaluru</span>
            <h1 className="hero-title">{personalInfo.name}</h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-description">{personalInfo.description}</p>
            <div className="hero-buttons">
              <a href={process.env.PUBLIC_URL + personalInfo.resume} download onClick={handleDownloadResumeClick} className="btn-secondary">
                <DownloadIcon /> Resume
              </a>
              <a href={`mailto:${personalInfo.email}`} onClick={handleEmailClick} className="social-link" aria-label="Email"><EmailIcon /></a>
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick} className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + personalInfo.image} alt={personalInfo.name} className="profile-image" />
        </div>
        <div className="stats-strip">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};
export default HeroSection;
