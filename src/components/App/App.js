
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/me.png" alt="Ashwani Prasad" className="profile-image" />
          <h1 className="hero-title">Ashwani Prasad</h1>
          <p className="hero-subtitle">Senior Software Engineer</p>
          <p className="hero-description">
            Passionate software engineer with 5+ years of experience building scalable, 
            fault-tolerant platforms using microservice architecture. Specialized in 
            backend systems, API design, and high-performance applications.
          </p>
          <div className="hero-buttons">
            <a href="#experience" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              View My Work
            </a>
            <a href={process.env.PUBLIC_URL + '/Ashwani_Prasad_Resume.pdf'} download className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>
          <div className="social-links">
            <a href="mailto:ashwani.p30@gmail.com" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ashwani-prasad/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          
          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-grid">
              
              {/* Super.Money */}
              <div className="experience-card">
                <div className="company-header">
                  <img src="/supermoney.png" alt="Super.Money" className="company-logo" />
                  <div className="company-info">
                    <h3>Super.Money</h3>
                    <div className="position">Software Engineer III</div>
                    <div className="duration">Feb 2025 - Present • Bangalore, IN</div>
                  </div>
                </div>
                <div className="company-summary">
                  <h4>Focus: Customer Onboarding & API Gateway</h4>
                  <p>
                    Building scalable platforms for seamless customer onboarding and optimizing conversion funnels. 
                    Working on API gateway enhancements with custom security and throughput management capabilities.
                  </p>
                </div>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">SpringBoot</span>
                  <span className="tech-tag">API Gateway</span>
                  <span className="tech-tag">Microservices</span>
                </div>
              </div>

              {/* CRED - Software Engineer II */}
              <div className="experience-card">
                <div className="company-header">
                  <img src="/cred.png" alt="CRED" className="company-logo" />
                  <div className="company-info">
                    <h3>CRED</h3>
                    <div className="position">Software Engineer II</div>
                    <div className="duration">Nov 2022 - Feb 2025 • Bangalore, IN</div>
                  </div>
                </div>
                <div className="company-summary">
                  <h4>Focus: Financial Products & Platform Engineering</h4>
                  <p>
                    Led development of BNPL, term loans, and loan against securities products. Built the multi-tenant 
                    fee processing platform handling 4B+ monthly transactions. Spearheaded 0-to-1 product development 
                    serving 8M+ users while optimizing infrastructure costs by 31%.
                  </p>
                </div>
                <div className="achievements">
                  <div className="achievement-item">
                    <div className="metric">4B+</div>
                    <div className="description">Monthly transactions processed</div>
                  </div>
                  <div className="achievement-item">
                    <div className="metric">8M+</div>
                    <div className="description">Users served</div>
                  </div>
                  <div className="achievement-item">
                    <div className="metric">31%</div>
                    <div className="description">AWS cost savings achieved</div>
                  </div>
                </div>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Google Guice</span>
                  <span className="tech-tag">gRPC</span>
                  <span className="tech-tag">AWS SQS</span>
                  <span className="tech-tag">Databricks</span>
                  <span className="tech-tag">DynamoDB</span>
                </div>
              </div>

              {/* CRED - Software Engineer I */}
              <div className="experience-card">
                <div className="company-header">
                  <img src="/cred.png" alt="CRED" className="company-logo" />
                  <div className="company-info">
                    <h3>CRED</h3>
                    <div className="position">Software Engineer I</div>
                    <div className="duration">July 2020 - Nov 2022 • Bangalore, IN</div>
                  </div>
                </div>
                <div className="company-summary">
                  <h4>Focus: Core Platform & Credit Card Services</h4>
                  <p>
                    Built config-driven APIs and credit card management systems. Migrated from SQL to DynamoDB 
                    for improved scalability and extensibility. Developed bank offer showcasing flows and 
                    optimized services for high-throughput performance.
                  </p>
                </div>
                <div className="achievements">
                  <div className="achievement-item">
                    <div className="metric">23K</div>
                    <div className="description">Requests per minute handled</div>
                  </div>
                  <div className="achievement-item">
                    <div className="metric">10K</div>
                    <div className="description">Requests per second load tested</div>
                  </div>
                  <div className="achievement-item">
                    <div className="metric">6M+</div>
                    <div className="description">Users served by bank offers</div>
                  </div>
                </div>
                <div className="tech-stack">
                  <span className="tech-tag">SpringBoot</span>
                  <span className="tech-tag">DynamoDB</span>
                  <span className="tech-tag">Velocity</span>
                  <span className="tech-tag">Locust</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>

              {/* Crio.do */}
              <div className="experience-card">
                <div className="company-header">
                  <img src="/crio.png" alt="Crio.do" className="company-logo" />
                  <div className="company-info">
                    <h3>Crio.do</h3>
                    <div className="position">Student Developer</div>
                    <div className="duration">May 2019 - June 2019 • Online</div>
                  </div>
                </div>
                <div className="company-summary">
                  <h4>Focus: Backend System Development</h4>
                  <p>
                    Completed intensive 4-week program building QEats, a distributed food ordering platform. 
                    Gained hands-on experience with microservices architecture, REST APIs, and modern backend technologies.
                  </p>
                </div>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">SpringBoot</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">MVCS</span>
                </div>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  Languages & Frameworks
                </h3>
                <div className="skill-items">
                  <span className="skill-item">Java</span>
                  <span className="skill-item">SpringBoot</span>
                  <span className="skill-item">Google Guice DI</span>
                  <span className="skill-item">C++</span>
                  <span className="skill-item">Python</span>
                  <span className="skill-item">gRPC</span>
                  <span className="skill-item">REST APIs</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                  Databases & Technologies
                </h3>
                <div className="skill-items">
                  <span className="skill-item">DynamoDB</span>
                  <span className="skill-item">MySQL</span>
                  <span className="skill-item">MongoDB</span>
                  <span className="skill-item">AWS SQS</span>
                  <span className="skill-item">AWS S3</span>
                  <span className="skill-item">Kafka</span>
                  <span className="skill-item">Databricks</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  Architecture & Design
                </h3>
                <div className="skill-items">
                  <span className="skill-item">Microservices</span>
                  <span className="skill-item">API Design</span>
                  <span className="skill-item">System Design</span>
                  <span className="skill-item">Fault Tolerance</span>
                  <span className="skill-item">Performance Optimization</span>
                  <span className="skill-item">Load Testing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-card">
              <h3>Govind Ballav Pant Engineering College</h3>
              <div className="degree">Bachelor of Technology in Computer Science</div>
              <div className="duration">2016 - 2020 • New Delhi, India</div>
              <div className="gpa">
                <strong>CGPA: 7.4/10</strong>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;
