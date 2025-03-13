---
layout: page
title: About Me
permalink: /about/
---

<h1 class="fade-in">About Me</h1>

<div class="about-section fade-in">
  <div class="profile-card">
    <img src="/assets/images/unnamed.jpg" alt="Ian Joseph-Carl Mullins" class="profile-image" />
    <h2>Ian Joseph-Carl Mullins</h2>
    <p class="lead">Computer Science student specializing in Artificial Intelligence</p>
    <div class="social-icons">
      <a href="https://github.com/RFlash007" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/ianjcmullins" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
  </div>
  
  <div class="about-content">
    <p>I'm a Computer Science student at Virginia Commonwealth University, specializing in Artificial Intelligence. With hands-on experience in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and prompt engineering, I'm passionate about developing AI solutions that enhance human-computer interaction.</p>
  </div>
</div>

<div class="card fade-in">
  <h2>Education</h2>
  <div class="education-content">
    <div class="education-logo">
      <span class="university-icon"><i class="fas fa-university"></i></span>
    </div>
    <div class="education-details">
      <h3>Virginia Commonwealth University (2023 - 2027)</h3>
      <p>Bachelor of Science, Computer Science</p>
      <p>Minor in Artificial Intelligence</p>
      <p><strong>GPA:</strong> 3.9 (In Major GPA: 4.0)</p>
      <p><strong>Key Coursework:</strong> Calculus 2, Data Structures & Object-Oriented Programming, Computer Systems, Computer Organization, Software Engineering</p>
    </div>
  </div>
</div>

<div class="card fade-in">
  <h2>Technical Skills</h2>
  
  <div class="skills-section">
    <div class="skill-category">
      <h3>AI/ML</h3>
      <div class="skill-container">
        <span class="skill-tag">Large Language Models (LLMs)</span>
        <span class="skill-tag">RAG</span>
        <span class="skill-tag">Prompt Engineering</span>
        <span class="skill-tag">Prompt Chaining</span>
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">Machine Learning</span>
        <span class="skill-tag">Fine-Tuning</span>
      </div>
    </div>
    
    <div class="skill-category">
      <h3>Programming</h3>
      <div class="skill-container">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Java</span>
        <span class="skill-tag">C</span>
      </div>
    </div>
    
    <div class="skill-category">
      <h3>Tools & Frameworks</h3>
      <div class="skill-container">
        <span class="skill-tag">Hugging Face</span>
        <span class="skill-tag">Git/GitHub</span>
        <span class="skill-tag">Requests</span>
        <span class="skill-tag">Ollama</span>
      </div>
    </div>
    
    <div class="skill-category">
      <h3>System & DevOps</h3>
      <div class="skill-container">
        <span class="skill-tag">Linux System Administration</span>
        <span class="skill-tag">Shell Scripting</span>
        <span class="skill-tag">Version Control</span>
      </div>
    </div>
  </div>
</div>

<div class="card fade-in">
  <h2>Work Experience</h2>
  
  <div class="experience-item">
    <div class="experience-header">
      <h3>Fire Sprinkler Service | Technical Inspector Assistant</h3>
      <span class="experience-date">May 2023 - Present</span>
    </div>
    <ul>
      <li>Conducted thorough building inspections that successfully identified and resolved leak issues, enhancing structural safety</li>
      <li>Ensured optimal functionality of fire sprinkler heads through regular maintenance and proactive repair</li>
      <li>Efficiently disassembled and repaired sprinkler system components, contributing to reliable fire safety operations</li>
    </ul>
  </div>
</div>

<div class="card fade-in">
  <h2>Extracurricular Activities</h2>
  
  <div class="activities-grid">
    <div class="activity-item">
      <i class="fas fa-robot"></i>
      <h3>AI Community</h3>
      <p>Active member of Ollama, Anthropic, and OpenAI Discord servers discussing latest prompting and language model techniques</p>
    </div>
    
    <div class="activity-item">
      <i class="fas fa-terminal"></i>
      <h3>Linux Command Line</h3>
      <p>Completed certification in essential Linux commands, gaining skills in system management and administration</p>
    </div>
    
    <div class="activity-item">
      <i class="fas fa-fist-raised"></i>
      <h3>VCU Grappling Club</h3>
      <p>Competed in tournaments, demonstrating discipline and resilience</p>
    </div>
    
    <div class="activity-item">
      <i class="fas fa-users"></i>
      <h3>VCU Inter-Varsity</h3>
      <p>Engaged in campus outreach events, fostering teamwork and leadership skills</p>
    </div>
    
    <div class="activity-item">
      <i class="fas fa-shield-alt"></i>
      <h3>Cyber CTF</h3>
      <p>Participated in RAM CTF Cyber-Security Competition</p>
    </div>
  </div>
</div>

<div class="card fade-in">
  <h2>Interests</h2>
  
  <div class="interests-container">
    <div class="interest-tag"><i class="fas fa-gamepad"></i> Gaming</div>
    <div class="interest-tag"><i class="fas fa-desktop"></i> Building Computers</div>
    <div class="interest-tag"><i class="fas fa-futbol"></i> Soccer</div>
    <div class="interest-tag"><i class="fas fa-fist-raised"></i> Brazilian Jiu-Jitsu</div>
    <div class="interest-tag"><i class="fas fa-dumbbell"></i> Wrestling</div>
  </div>
</div>

<div class="text-center" style="margin-top: 3rem;">
  <a href="/contact" class="btn btn-accent">Get In Touch</a>
</div>

<style>
  .about-section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .about-section {
      grid-template-columns: 1fr;
    }
  }
  
  .profile-card {
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .profile-card .profile-image {
    width: 200px;
    height: 200px;
    margin-bottom: 1.5rem;
  }
  
  .profile-card h2 {
    margin-top: 0;
  }
  
  .profile-card .social-icons {
    margin-top: 1.5rem;
  }
  
  .profile-card .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
  
  .about-content {
    display: flex;
    align-items: center;
  }
  
  .education-content {
    display: flex;
    gap: 1.5rem;
  }
  
  .education-logo {
    font-size: 2.5rem;
    color: #3a86ff;
  }
  
  .education-details {
    flex: 1;
  }
  
  .education-details h3 {
    margin-top: 0;
  }
  
  .skills-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .experience-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  
  .experience-date {
    font-style: italic;
    color: #8d99ae;
  }
  
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .activity-item {
    text-align: center;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .activity-item i {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #3a86ff;
  }
  
  .activity-item h3 {
    margin-top: 0;
  }
  
  .interests-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .interest-tag {
    background-color: #f8f9fa;
    color: #3a86ff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #e9ecef;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .interest-tag:hover {
    background-color: #3a86ff;
    color: white;
  }
</style> 