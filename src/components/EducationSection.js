import React from 'react';

const EducationSection = ({ education }) => {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <h3>{education.institution}</h3>
        <div className="degree">{education.degree}</div>
        <div className="duration">{education.duration}</div>
        <div className="gpa">
          <strong>{education.gpa}</strong>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 