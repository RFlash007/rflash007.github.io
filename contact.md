---
layout: page
title: Contact
permalink: /contact/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in" style="color: var(--primary);">Get In Touch</h1>
      <p style="color: var(--text-dark);">I'd love to hear from you! Feel free to reach out for collaborations, questions, or just to say hello.</p>
    </div>
    
    <div class="two-column-grid">
      <div class="contact-info fade-in-right">
        <div class="card">
          <h3>Contact Information</h3>
          <p>You can reach me through any of these channels:</p>
          
          <ul style="list-style: none; margin-left: 0;">
            <li style="margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary-light); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="fas fa-envelope" style="color: var(--primary); font-size: 1.25rem;"></i>
                </div>
                <div>
                  <h4 style="margin: 0;">Email</h4>
                  <a href="mailto:ianjcmullins@gmail.com">ianjcmullins@gmail.com</a>
                </div>
              </div>
            </li>
            
            <li style="margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary-light); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="fab fa-github" style="color: var(--primary); font-size: 1.25rem;"></i>
                </div>
                <div>
                  <h4 style="margin: 0;">GitHub</h4>
                  <a href="https://github.com/RFlash007" target="_blank">github.com/RFlash007</a>
                </div>
              </div>
            </li>
            
            <li style="margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary-light); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="fab fa-linkedin" style="color: var(--primary); font-size: 1.25rem;"></i>
                </div>
                <div>
                  <h4 style="margin: 0;">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ianjcmullins" target="_blank">linkedin.com/in/ianjcmullins</a>
                </div>
              </div>
            </li>
            
            <li>
              <div style="display: flex; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary-light); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="fas fa-map-marker-alt" style="color: var(--primary); font-size: 1.25rem;"></i>
                </div>
                <div>
                  <h4 style="margin: 0;">Location</h4>
                  <p style="margin: 0;">Richmond, Virginia</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="card" style="margin-top: 2rem;">
          <h3>Current Status</h3>
          <p>I'm currently:</p>
          <ul>
            <li>Studying Computer Science at Virginia Commonwealth University</li>
            <li>Open to internship opportunities in AI and software development</li>
            <li>Available for research collaborations in machine learning</li>
            <li>Interested in connecting with fellow AI enthusiasts</li>
          </ul>
        </div>
      </div>
      
      <div class="contact-form-container fade-in-up">
        <div class="card">
          <h3>Send Me a Message</h3>
          <p>Fill out the form below and I'll get back to you as soon as possible.</p>
          
          <form class="contact-form" action="https://formspree.io/f/xdoqgkrw" method="POST">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" name="name" class="form-control" required>
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" name="_replyto" class="form-control" required>
            </div>
            
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" name="subject" class="form-control" required>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-control" rows="6" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-icon">
              <i class="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>Response Time</h2>
      <p>I typically respond to messages within 24-48 hours</p>
    </div>
    
    <div class="three-column-grid">
      <div class="feature-card text-center">
        <div class="feature-icon">
          <i class="fas fa-handshake"></i>
        </div>
        <h3>Collaboration</h3>
        <p>Interested in working together on a project? Let me know the details and we can discuss how to make it happen.</p>
      </div>
      
      <div class="feature-card text-center">
        <div class="feature-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <h3>Opportunities</h3>
        <p>Looking for a motivated Computer Science student with AI expertise? I'm open to internships and research positions.</p>
      </div>
      
      <div class="feature-card text-center">
        <div class="feature-icon">
          <i class="fas fa-comments"></i>
        </div>
        <h3>Just Chat</h3>
        <p>Want to discuss AI, programming, or technology in general? I'm always happy to connect with like-minded individuals.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .contact-card {
    text-align: center;
    padding: 2rem;
    transition: all 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-10px);
  }
  
  .contact-card-icon {
    font-size: 2.5rem;
    color: #ff006e;
    margin-bottom: 1rem;
  }
  
  .interests-card {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  .location-card {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .location-info {
    text-align: center;
  }
  
  .location-info i {
    font-size: 2.5rem;
    color: #3a86ff;
    margin-bottom: 1rem;
  }
  
  .text-light {
    color: #8d99ae;
    font-style: italic;
  }
</style> 