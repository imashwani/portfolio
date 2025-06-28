
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="page-header text-white text-center p-4">
        <h1 className="header-title">Ashwani Prasad</h1>
        <p className="header-subtitle">Software Engineer</p>
        <div className="contact-links">
          <a href="mailto:ashwani.p30@gmail.com">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
            <span className="contact-text">ashwani.p30@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ashwani-prasad/" target="_blank" rel="noopener noreferrer">
            <svg className="contact-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" width="20"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
            <span className="contact-text">LinkedIn</span>
          </a>
          <a href={process.env.PUBLIC_URL + '/Ashwani_Prasad_Resume.pdf'} download>
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            <span className="contact-text">Download Resume</span>
          </a>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <h2 className="mb-4">Skills</h2>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 class="card-title">Languages & Frameworks</h5>
                    <p class="card-text">Java(SpringBoot, Guice DI), C++, Python</p>
                    <hr />
                    <h5 class="card-title">Databases & Technologies</h5>
                    <p class="card-text">MySQL, DynamoDb, Kafka, AWS SQS, S3</p>
                    <hr />
                    <h5 class="card-title">Other</h5>
                    <p class="card-text">API designing, Reliability, fault tolerance</p>
                </div>
            </div>
            <h2 className="my-4">Education</h2>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Govind Ballav Pant Engineering College, New Delhi</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">B.Tech. in Computer Science</span>
                    <span className="info-badge">2016 - 2020</span>
                </h6>
                <p className="card-text">CGPA: 7.4</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">About Me</h2>
            <p>
              I am a software engineer with 5+ years of experience in designing and building scalable, fault-tolerant platforms using micro-service architecture.
            </p>
            <h2 className="mb-4">Work Experience</h2>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Software Engineer III</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">Super.Money</span>
                    <span className="info-badge">Bangalore, IN</span>
                    <span className="info-badge">Feb 2025 - Present</span>
                </h6>
                <ul className="experience-list">
                  <li>Building platforms for customers onboarding and optimizing the funnel for a frictionless experience.</li>
                  <li>Working on the API gateway to enhance custom capabilities, including security and throughput management.</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Software Engineer II</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">CRED</span>
                    <span className="info-badge">Bangalore, IN</span>
                    <span className="info-badge">Nov 2022 - Feb 2025</span>
                </h6>
                <ul className="experience-list">
                  <li>Built microservices using Java, Google Guice DI and gRPC for low latency and high throughput.</li>
                  <li>Built platform for BNPL (buy now, pay later) and term loans by collaborating with cross-functional teams.</li>
                  <li>Designed and implemented the multi-tenant fee module that processes 4B+ transactions every month.</li>
                  <li>Lead the development of processing repayment transactions async using CRON job, databricks & AWS SQS.</li>
                  <li>Spearheaded 0 to 1 product called loan against securities, owning and delivering multiple features like create loan, foreclosure, interest accrual that serves 8M+ users.</li>
                  <li>Analyzed and optimized CPU, memory, and JAVA_OPTS for multiple services, achieving 31% AWS ECS cost savings.</li>
                  <li>Tweaked JAVA_OPTS to improve old-gen cleanup, enhancing service stability and eliminating memory alerts.</li>
                  <li>Mentored an intern to implement REST API wrapper for loan platform APIs and loan account lifecycle.</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Software Engineer I</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">CRED</span>
                    <span className="info-badge">Bangalore, IN</span>
                    <span className="info-badge">July 2020 - Nov 2022</span>
                </h6>
                <ul className="experience-list">
                  <li>Used spring-boot microservice and velocity lib to build config-driven API response that serves 23K req/min.</li>
                  <li>Migrated from SQL to DynamoDb schema for decoupling configs which improved reusability & extensibility.</li>
                  <li>Designed and developed APIs for showcasing unbilled transactions of credit cards of the user.</li>
                  <li>Used locust for load testing microservices for 10K req/sec and tweaked downstream API timeouts for critical flows.</li>
                  <li>Designed and built flows for showcasing bank offers for credit-cards serving over 6M+ users.</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">SDE Intern</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">CRED</span>
                    <span className="info-badge">Bangalore, IN</span>
                    <span className="info-badge">July 2020 - Nov 2020</span>
                </h6>
                <ul className="experience-list">
                  <li>Working with the Backend Team and using Spring Boot framework.</li>
                  <li>Used resilence4j lib for circuit breaks to prevent cascading failures due to failure in downstream services.</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Student Developer</h5>
                <h6 className="card-subtitle">
                    <span className="info-badge">Crio.do</span>
                    <span className="info-badge">Online</span>
                    <span className="info-badge">May 2019 - June 2019</span>
                </h6>
                <ul className="experience-list">
                  <li>Completed a 4-week intensive Micro-Experience focused on Backend Technologies.</li>
                  <li>Developed a distributed backend system for a food ordering platform, QEats, using Java Spring Boot, MongoDB, and MVCS architecture, along with REST APIs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
