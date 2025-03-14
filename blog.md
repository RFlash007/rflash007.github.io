---
layout: page
title: Blog
permalink: /blog/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in" style="color: var(--secondary);">Blog</h1>
      <p style="color: var(--text-dark);">Thoughts, insights, and updates from my journey in AI and Computer Science</p>
    </div>
    
    <div class="blog-search">
      <form class="blog-search-form">
        <input type="text" class="blog-search-input" placeholder="Search articles...">
        <button type="submit" class="blog-search-button">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
    
    <div class="blog-grid">
      <div class="blog-card fade-in-up">
        <span class="blog-date">July 10, 2024</span>
        <div class="blog-content">
          <h2 class="blog-title">Research Project Proposal: Exploring Local LLMs with Ollama</h2>
          <div class="blog-tags">
            <span class="blog-tag">LLMs</span>
            <span class="blog-tag">Ollama</span>
            <span class="blog-tag">Research</span>
          </div>
          <p class="blog-excerpt">A class research project proposal exploring how to run large language models (LLMs) directly on your own computer using Ollama. This project will investigate the benefits of local deployment for privacy, customization, and security...</p>
          <div class="blog-footer">
            <div class="blog-author">
              <span class="blog-author-name">Ian Mullins</span>
            </div>
            <a href="/blog/2024/07/10/locally-run-llms-using-ollama/" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    
    {%- if paginator.total_pages > 1 -%}
    <div class="blog-pagination" style="display: flex; justify-content: center; margin-top: 3rem; gap: 1rem; align-items: center;">
      {%- if paginator.previous_page -%}
      <a href="{{ paginator.previous_page_path }}" class="blog-page-nav prev-page" style="display: flex; align-items: center; gap: 0.5rem; background-color: rgba(204, 120, 92, 0.1); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 500; color: var(--secondary); transition: all 0.2s ease;">
        <i class="fas fa-chevron-left"></i>
        <span>Previous</span>
      </a>
      {%- else -%}
      <span class="blog-page-nav prev-page disabled" style="display: flex; align-items: center; gap: 0.5rem; background-color: rgba(204, 120, 92, 0.05); padding: 0.5rem 1rem; border-radius: 8px; color: #b0afa9; cursor: not-allowed;">
        <i class="fas fa-chevron-left"></i>
        <span>Previous</span>
      </span>
      {%- endif -%}
      
      <span class="blog-page-link active" style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background-color: rgba(204, 120, 92, 0.2); color: var(--secondary); font-weight: 500;">
        {{ paginator.page }}
      </span>
      
      {%- if paginator.next_page -%}
      <a href="{{ paginator.next_page_path }}" class="blog-page-nav next-page" style="display: flex; align-items: center; gap: 0.5rem; background-color: rgba(204, 120, 92, 0.1); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 500; color: var(--secondary); transition: all 0.2s ease;">
        <span>Next</span>
        <i class="fas fa-chevron-right"></i>
      </a>
      {%- else -%}
      <span class="blog-page-nav next-page disabled" style="display: flex; align-items: center; gap: 0.5rem; background-color: rgba(204, 120, 92, 0.05); padding: 0.5rem 1rem; border-radius: 8px; color: #b0afa9; cursor: not-allowed;">
        <span>Next</span>
        <i class="fas fa-chevron-right"></i>
      </span>
      {%- endif -%}
    </div>
    {%- endif -%}
  </div>
</section> 