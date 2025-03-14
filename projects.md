---
layout: page
title: Projects
permalink: /projects/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in" style="color: var(--secondary);">My Projects</h1>
      <p style="color: var(--text-dark);">A showcase of my work in AI, software development, and more</p>
    </div>
    
    <div class="projects-grid">
      <div class="project-card fade-in-up" id="ai-assistant">
        <div class="project-icon">
          <i class="fas fa-robot"></i>
        </div>
        <div class="project-content">
          <span class="project-category">AI Development</span>
          <h3 class="project-title">AI Assistant</h3>
          <p class="project-description">A personal AI assistant built with Python that leverages LLMs for natural language understanding and task automation. This assistant can perform various tasks through voice commands and text input.</p>
          
          <h4>Key Features:</h4>
          <ul class="feature-list">
            <li>Built on Qwen 2.5:14b Model using Ollama API</li>
            <li>Integrated custom relational database for memory-based contextual responses</li>
            <li>Retrieval-Augmented Generation (RAG) for enhanced knowledge access</li>
            <li>Voice recognition and text-to-speech capabilities</li>
            <li>Customizable personality and response styles</li>
          </ul>
          
          <div class="project-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">LLMs</span>
            <span class="project-tag">RAG</span>
            <span class="project-tag">Ollama API</span>
            <span class="project-tag">SQLite</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/RFlash007/F.R.E.D." target="_blank" class="btn btn-primary btn-icon">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div class="project-card fade-in-up" id="portfolio-website">
        <div class="project-icon">
          <i class="fas fa-laptop"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Web Development</span>
          <h3 class="project-title">Portfolio Website</h3>
          <p class="project-description">A responsive portfolio website built with Jekyll to showcase my projects and skills in a clean, modern design. This website serves as a central hub for my professional presence online.</p>
          
          <h4>Key Features:</h4>
          <ul class="feature-list">
            <li>Responsive design that works on all devices</li>
            <li>Modern UI with smooth animations and transitions</li>
            <li>Optimized performance and accessibility</li>
            <li>Built with Jekyll for easy content management</li>
            <li>Custom CSS with dark mode support</li>
          </ul>
          
          <div class="project-tags">
            <span class="project-tag">Jekyll</span>
            <span class="project-tag">HTML/CSS</span>
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">Responsive Design</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/RFlash007/RFlash007.github.io" target="_blank" class="btn btn-primary btn-icon">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div class="project-card fade-in-up" id="roberta-emotion">
        <div class="project-icon">
          <i class="fas fa-heart"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Machine Learning</span>
          <h3 class="project-title">RoBERTa Emotion Detection</h3>
          <p class="project-description">Developed an emotion detection system using the RoBERTa model fine-tuned on the tweet_eval/emotion dataset. The system can accurately classify text into different emotional categories.</p>
          
          <h4>Key Features:</h4>
          <ul class="feature-list">
            <li>Fine-tuned RoBERTa model with 81.5% accuracy</li>
            <li>Emotion classification across 6 categories</li>
            <li>Optimized for real-time text analysis</li>
            <li>Visualization of confidence scores</li>
            <li>API for integration with other applications</li>
          </ul>
          
          <div class="project-tags">
            <span class="project-tag">PyTorch</span>
            <span class="project-tag">Hugging Face</span>
            <span class="project-tag">RoBERTa</span>
            <span class="project-tag">NLP</span>
            <span class="project-tag">Fine-Tuning</span>
          </div>
          
          <div class="project-links">
            <a href="https://huggingface.co/RFlash/emotion-detector" target="_blank" class="btn btn-primary btn-icon">
              <i class="fas fa-brain"></i> View on Hugging Face
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>More Projects Coming Soon</h2>
      <p>I'm constantly working on new projects. Check back later for updates!</p>
    </div>
    
    <div class="text-center">
      <a href="https://github.com/RFlash007" target="_blank" class="btn btn-primary btn-icon">
        <i class="fab fa-github"></i> Follow Me on GitHub
      </a>
    </div>
  </div>
</section>

<style>
  .project-card {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
  }
  
  .project-content {
    padding: 2.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .project-content p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .project-content h4 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  
  .project-content ul {
    margin-bottom: 1.8rem;
    padding-left: 1.5rem;
  }
  
  .project-content li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
  
  .project-tags {
    margin-top: auto;
    margin-bottom: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }
  
  .project-tag {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .project-links {
    margin-top: auto;
  }
  
  @media (min-width: 992px) {
    .project-card {
      flex-direction: row;
      align-items: stretch;
    }
    
    .project-icon {
      width: 30%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    
    .project-icon i {
      font-size: 5rem;
    }
    
    .project-content {
      width: 70%;
    }
  }
  
  @media (max-width: 991px) {
    .project-icon {
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .project-icon i {
      font-size: 4rem;
    }
  }
</style> 