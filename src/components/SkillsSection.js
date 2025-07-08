import React from 'react';

const SkillsSection = ({ skills }) => {
  return (
    <section className="section">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skills.map((skillCategory) => {
          const IconComponent = skillCategory.icon;
          return (
            <div key={skillCategory.id} className="skill-category">
              <h3>
                <IconComponent />
                {skillCategory.category}
              </h3>
              <div className="skill-items">
                {skillCategory.items.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection; 