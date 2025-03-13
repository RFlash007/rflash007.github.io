---
layout: page
title: Projects
permalink: /projects/
---

# My Projects

<div class="projects-container">

  <div class="project-item">
    <h2>LLM Personal Assistant with RAG Database</h2>
    
    <img src="/assets/images/llm_assistant.jpg" alt="LLM Assistant Project" />
    
    <div class="project-tech">
      <strong>Technologies used:</strong> Python, Ollama API, Qwen 2.5:14b Model, Retrieval-Augmented Generation (RAG), JSON Database
    </div>
    
    <div class="project-description">
      <ul>
        <li>Built on Qwen 2.5:14b Model using Ollama API</li>
        <li>Implemented Retrieval-Augmented Generation (RAG) and a custom relational database to store memory-based JSON objects for context-aware responses</li>
        <li>Optimized query execution by integrating prompt chaining workflows, improving response accuracy and reducing size of "memories" stored by 50%</li>
        <li>Implemented embedding caching for memory objects increasing processing speed significantly</li>
        <li>Developed dynamic memory management system which consolidates recently accessed memory objects based on semantic similarity using cosine similarity function, drastically reducing redundancy in JSON database</li>
        <li>Utilized prompt chaining techniques to drastically increase digestibility of complex prompts for smaller models, significantly increasing response accuracy</li>
        <li>Crafted complex system prompt to urge model to utilize features such as: chain-of-thought, alignment tuning, and "curiosity"</li>
        <li>Designated "Memory Management" language model for crafting unique memories utilizing zero-shot prompting</li>
      </ul>
    </div>
    
    <div class="project-links">
      <a href="https://github.com/RFlash007/personal-llm-assistant" class="btn-primary">View Code</a>
    </div>
  </div>

  <div class="project-item">
    <h2>RoBERTa Fine-tune for Emotion Detection</h2>
    
    <img src="/assets/images/roberta_emotion.jpg" alt="Emotion Detection Project" />
    
    <div class="project-tech">
      <strong>Technologies used:</strong> Python, PyTorch, Hugging Face Transformers, RoBERTa, tweet_eval/emotion dataset
    </div>
    
    <div class="project-description">
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
      <a href="https://huggingface.co/RFlash/emotion-detector" class="btn-primary">View Code</a>
    </div>
  </div>

  <div class="project-item">
    <h2>Current Projects</h2>
    
    <div class="project-description">
      <p>I'm currently working on expanding my AI capabilities through these projects:</p>
      
      <ol>
        <li><strong>Upgrade LLM assistant capabilities</strong> - Looking to make assistant more usable in everyday life</li>
      </ol>
      
      <p>Want to collaborate on a project? <a href="/contact">Contact me</a>!</p>
    </div>
  </div>

</div> 