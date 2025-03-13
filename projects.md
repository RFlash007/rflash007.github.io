---
layout: page
title: Projects
permalink: /projects/
---

<h1 class="fade-in">My Projects</h1>

<div class="projects-container fade-in">

  <div class="card project-card" id="llm-assistant">
    <h2>LLM Personal Assistant with RAG Database</h2>
    
    <img src="/assets/images/llm_assistant.jpg" alt="LLM Assistant Project" class="project-img" />
    
    <div class="skill-container">
      <span class="skill-tag">Python</span>
      <span class="skill-tag">Ollama API</span>
      <span class="skill-tag">Qwen 2.5:14b</span>
      <span class="skill-tag">RAG</span>
      <span class="skill-tag">JSON Database</span>
    </div>
    
    <div class="project-description">
      <p>An AI assistant built with state-of-the-art language models and memory capabilities.</p>
      <ul>
        <li>Built on Qwen 2.5:14b Model using Ollama API</li>
        <li>Implemented Retrieval-Augmented Generation (RAG) and a custom relational database to store memory-based JSON objects for context-aware responses</li>
        <li>Optimized query execution by integrating prompt chaining workflows, improving response accuracy and reducing size of "memories" stored by 50%</li>
        <li>Implemented embedding caching for memory objects increasing processing speed significantly</li>
        <li>Developed dynamic memory management system which consolidates recently accessed memory objects based on semantic similarity using cosine similarity function</li>
        <li>Utilized prompt chaining techniques to drastically increase digestibility of complex prompts for smaller models</li>
        <li>Crafted complex system prompt to urge model to utilize features such as: chain-of-thought, alignment tuning, and "curiosity"</li>
        <li>Designated "Memory Management" language model for crafting unique memories utilizing zero-shot prompting</li>
      </ul>
    </div>
    
    <div class="project-links">
      <a href="https://github.com/RFlash007/personal-llm-assistant" class="btn btn-secondary">View Code</a>
    </div>
  </div>

  <div class="card project-card" id="roberta-emotion">
    <h2>RoBERTa Fine-tune for Emotion Detection</h2>
    
    <img src="/assets/images/roberta_emotion.jpg" alt="Emotion Detection Project" class="project-img" />
    
    <div class="skill-container">
      <span class="skill-tag">Python</span>
      <span class="skill-tag">PyTorch</span>
      <span class="skill-tag">Hugging Face</span>
      <span class="skill-tag">RoBERTa</span>
      <span class="skill-tag">Tweet_eval</span>
    </div>
    
    <div class="project-description">
      <p>An emotion detection system that identifies emotions in text with high accuracy.</p>
      <ul>
        <li>Developed an emotion detection system using RoBERTa model fine-tuned on tweet_eval/emotion dataset</li>
        <li>Implemented text classification pipeline for detecting anger, joy, optimism, and sadness with 81.5% accuracy</li>
        <li>Designed model training workflow with hyperparameter optimization and evaluation metrics (accuracy, F1 score)</li>
        <li>Integrated emotion detection with chatbot system to enable context-aware, empathetic responses</li>
        <li>Built end-to-end solution including model training, evaluation, and deployment capabilities</li>
        <li>Optimized system performance with GPU acceleration and efficient text preprocessing</li>
      </ul>
    </div>
    
    <div class="project-links">
      <a href="https://huggingface.co/RFlash/emotion-detector" class="btn btn-secondary">View Code</a>
    </div>
  </div>

  <div class="card" id="current-projects">
    <h2>Current Projects</h2>
    
    <div class="project-description">
      <p>I'm currently working on expanding my AI capabilities through these projects:</p>
      
      <div class="skill-container">
        <span class="skill-tag">LLM Development</span>
        <span class="skill-tag">Fine-tuning</span>
        <span class="skill-tag">AI Research</span>
      </div>
      
      <ol>
        <li><strong>Upgrading LLM assistant capabilities</strong> - Enhancing my personal assistant to be more useful in everyday scenarios, with improved memory management and contextual understanding.</li>
        <li><strong>Exploring multimodal models</strong> - Researching and implementing vision-language models for more comprehensive AI applications.</li>
      </ol>
      
      <div class="text-center" style="margin-top: 2rem;">
        <p>Interested in collaborating on a project?</p>
        <a href="/contact" class="btn btn-accent">Let's Connect</a>
      </div>
    </div>
  </div>

</div>

<style>
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
  }
  
  .project-img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }
  
  .project-description {
    margin: 1.5rem 0;
  }
  
  .project-links {
    margin-top: 1.5rem;
  }
</style> 