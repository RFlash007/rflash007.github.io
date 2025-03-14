---
layout: page
title: Projects
permalink: /projects/
---

<section class="section" style="background-color: #FFFFFF;">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in" style="color: var(--secondary);">My Projects</h1>
      <p style="color: var(--text-medium);">A showcase of my work in AI, software development, and more</p>
    </div>
    
    <div class="projects-grid">
      <div class="project-card fade-in-up ai-card" id="ai-assistant">
        <div class="project-icon">
          <i class="fas fa-robot"></i>
        </div>
        <div class="project-content">
          <div class="project-header">
            <span class="project-category">AI Development</span>
            <h3 class="project-title">LLM Personal Assistant with RAG</h3>
          </div>
          <p class="project-description">A personal AI assistant built with Python that leverages large language models for natural language understanding and task automation, enhanced with sophisticated memory and contextual awareness systems.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Built on Qwen 2.5:14b Model using Ollama API</li>
              <li>Implemented Retrieval-Augmented Generation (RAG) and a custom relational database to store memory-based JSON objects for context-aware responses</li>
              <li>Optimized query execution by integrating prompt chaining workflows, improving response accuracy and reducing size of "memories" stored by 50%</li>
              <li>Implemented embedding caching for memory objects increasing processing speed significantly</li>
              <li>Developed dynamic memory management system which consolidates recently accessed memory objects based on semantic similarity using cosine similarity function drastically reducing redundancy in JSON database</li>
              <li>Utilized prompt chaining techniques to drastically increase digestibility of complex prompts for smaller models, significantly increasing response accuracy</li>
              <li>Crafted complex system prompt to urge model to utilize features such as: chain-of-thought, alignment tuning, and "curiosity"</li>
              <li>Designated "Memory Management" language model designated to crafting unique memories utilizing zero-shot prompting</li>
            </ul>
          </div>
          
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
      
      <div class="project-card fade-in-up ai-card" id="portfolio-website">
        <div class="project-icon">
          <i class="fas fa-laptop"></i>
        </div>
        <div class="project-content">
          <div class="project-header">
            <span class="project-category">Web Development</span>
            <h3 class="project-title">Portfolio Website Development</h3>
          </div>
          <p class="project-description">A responsive portfolio website built using iterative refinement and prompt engineering techniques with Claude 3.7 Sonnet, showcasing advanced AI-assisted development methodologies.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Developed a fully functional portfolio website using iterative refinement and prompt engineering techniques with Claude 3.7 Sonnet</li>
              <li>Optimized AI-driven workflows to refine code, design, and content, demonstrating advanced LLM utilization and prompt engineering skills</li>
              <li>Showcased expertise in AI-assisted development and efficient iteration cycles without traditional manual coding</li>
              <li>Responsive design that works seamlessly across all devices</li>
              <li>Modern UI with smooth animations and transitions</li>
              <li>Optimized performance and accessibility</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Jekyll</span>
            <span class="project-tag">HTML/CSS</span>
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">Prompt Engineering</span>
            <span class="project-tag">AI-Assisted Development</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/RFlash007/RFlash007.github.io" target="_blank" class="btn btn-primary btn-icon">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div class="project-card fade-in-up ai-card" id="roberta-emotion">
        <div class="project-icon">
          <i class="fas fa-heart"></i>
        </div>
        <div class="project-content">
          <div class="project-header">
            <span class="project-category">Machine Learning</span>
            <h3 class="project-title">RoBERTa Emotion Detection</h3>
          </div>
          <p class="project-description">A sophisticated emotion detection system using RoBERTa model fine-tuned on the tweet_eval/emotion dataset, designed to accurately classify text into different emotional categories for context-aware applications.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Developed an emotion detection system using RoBERTa model fine-tuned on tweet_eval/emotion dataset</li>
              <li>Implemented text classification pipeline for detecting anger, joy, optimism, and sadness with 81.5% accuracy</li>
              <li>Designed model training workflow with hyperparameter optimization and evaluation metrics (accuracy, F1 score)</li>
              <li>Integrated emotion detection with chatbot system to enable context-aware, empathetic responses</li>
              <li>Built end-to-end solution including model training, evaluation, and deployment capabilities</li>
              <li>Optimized system performance with GPU acceleration and efficient text preprocessing</li>
            </ul>
          </div>
          
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

<section class="section" style="background-color: #FAFAFA;">
  <div class="wrapper">
    <div class="section-title">
      <h2 style="color: var(--primary);">More Projects Coming Soon</h2>
      <p style="color: var(--text-medium);">I'm constantly working on new projects. Check back later for updates!</p>
    </div>
    
    <div class="text-center">
      <a href="https://github.com/RFlash007" target="_blank" class="btn btn-primary btn-icon">
        <i class="fab fa-github"></i> Follow Me on GitHub
      </a>
    </div>
  </div>
</section>

<style>
  body {
    background-color: #FFFFFF;
  }
  
  .section {
    padding: 3rem 0;
    background-color: #FFFFFF;
  }
  
  .projects-grid {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin-top: 3rem;
  }
  
  .project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    transition: all 0.4s ease;
    border: 1px solid #F0F0F0;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
  
  /* Card type-specific styling - all using the same rust/orange color now */
  .ai-card {
    border-top: 5px solid #CC785C;
  }
  
  .ai-card .project-icon {
    background: #FEF6F3;
  }
  
  .ai-card .project-icon i {
    color: #CC785C;
  }
  
  .ai-card .project-category {
    color: #CC785C;
  }
  
  .project-content {
    padding: 2.8rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
  }
  
  .project-header {
    margin-bottom: 1.5rem;
  }
  
  .project-title {
    font-size: 2rem;
    margin: 0.5rem 0 0;
    color: #333333;
    font-weight: 600;
    line-height: 1.3;
  }
  
  .project-category {
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.85rem;
  }
  
  .project-description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #4A4A4A;
  }
  
  .project-features {
    margin-bottom: 2rem;
  }
  
  .project-features h4 {
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    color: #333333;
    font-weight: 600;
  }
  
  .feature-list {
    margin: 0;
    padding-left: 1.8rem;
  }
  
  .feature-list li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: #4A4A4A;
    position: relative;
  }
  
  .feature-list li::before {
    content: "•";
    position: absolute;
    left: -1.2rem;
    color: #CC785C;
    font-size: 1.2rem;
  }
  
  .project-tags {
    margin-top: auto;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .project-tag {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 50px;
    font-weight: 500;
    background-color: #F5F6F7;
    color: #4A4A4A;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
  }
  
  .ai-card .project-tag:hover {
    background-color: rgba(204, 120, 92, 0.08);
    color: #CC785C;
  }
  
  .project-links {
    margin-top: auto;
  }
  
  .btn-primary {
    transition: all 0.3s ease;
    color: #FFFFFF;
    background-color: #CC785C;
    border-color: #CC785C;
  }
  
  .btn-primary:hover {
    background-color: #B05B40;
    border-color: #B05B40;
    transform: translateY(-2px);
  }
  
  @media (min-width: 992px) {
    .project-card {
      flex-direction: row;
      align-items: stretch;
    }
    
    .project-icon {
      width: 25%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .project-icon i {
      font-size: 5rem;
    }
    
    .project-content {
      width: 75%;
    }
  }
  
  @media (max-width: 991px) {
    .project-icon {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .project-icon i {
      font-size: 4.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .project-content {
      padding: 2rem;
    }
    
    .project-title {
      font-size: 1.7rem;
    }
    
    .project-description {
      font-size: 1rem;
    }
  }
</style> 