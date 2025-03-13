---
layout: page
title: Projects
permalink: /projects/
---

# My Projects

## LLM Personal Assistant with RAG Database

![Project Screenshot](/assets/images/llm_assistant.jpg)

**Technologies used:** Python, Ollama API, Qwen 2.5:14b Model, Retrieval-Augmented Generation (RAG), JSON Database

**Description:** 
- Built on Qwen 2.5:14b Model using Ollama API
- Implemented Retrieval-Augmented Generation (RAG) and a custom relational database to store memory-based JSON objects for context-aware responses
- Optimized query execution by integrating prompt chaining workflows, improving response accuracy and reducing size of "memories" stored by 50%
- Implemented embedding caching for memory objects increasing processing speed significantly
- Developed dynamic memory management system which consolidates recently accessed memory objects based on semantic similarity using cosine similarity function, drastically reducing redundancy in JSON database
- Utilized prompt chaining techniques to drastically increase digestibility of complex prompts for smaller models, significantly increasing response accuracy
- Crafted complex system prompt to urge model to utilize features such as: chain-of-thought, alignment tuning, and "curiosity"
- Designated "Memory Management" language model for crafting unique memories utilizing zero-shot prompting

[View Code](https://github.com/RFlash007/personal-llm-assistant)

---

## RoBERTa Fine-tune for Emotion Detection

![Project Screenshot](/assets/images/roberta_emotion.jpg)

**Technologies used:** Python, PyTorch, Hugging Face Transformers, RoBERTa, tweet_eval/emotion dataset

**Description:**
- Developed an emotion detection system using RoBERTa model fine-tuned on tweet_eval/emotion dataset
- Implemented text classification pipeline for detecting anger, joy, optimism, and sadness with 81.5% accuracy
- Designed model training workflow with hyperparameter optimization and evaluation metrics (accuracy, F1 score)
- Integrated emotion detection with chatbot system to enable context-aware, empathetic responses
- Built end-to-end solution including model training, evaluation, and deployment capabilities
- Optimized system performance with GPU acceleration and efficient text preprocessing

[View Code](https://github.com/RFlash007/emotion-detection)

---

## Current Projects

I'm currently working on expanding my AI capabilities through these projects:

1. **RAG System with Multi-Modal Capabilities** - Developing an advanced RAG system that can process both text and image inputs for more comprehensive information retrieval
2. **Fine-tuning Mistral 7B for Domain-Specific Tasks** - Training Mistral 7B model on specialized datasets to improve performance in targeted domains

Want to collaborate on a project? [Contact me](/contact)! 