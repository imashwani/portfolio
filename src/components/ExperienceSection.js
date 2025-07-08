import React from 'react';

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="company-header">
              <img 
                src={process.env.PUBLIC_URL + exp.logo} 
                alt={exp.company} 
                className="company-logo" 
              />
              <div className="company-info">
                <h3>{exp.company}</h3>
                <div className="position">{exp.position}</div>
                <div className="duration">{exp.duration}</div>
              </div>
            </div>
            
            <div className="company-summary">
              <h4>Focus: {exp.focus}</h4>
              <p>{exp.description}</p>
            </div>
            
            {exp.achievements.length > 0 && (
              <div className="achievements">
                {exp.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <div className="metric">{achievement.metric}</div>
                    <div className="description">{achievement.description}</div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="tech-stack">
              {exp.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 