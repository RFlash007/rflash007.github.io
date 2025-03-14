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
      {% for post in site.posts %}
      <div class="blog-card fade-in-up" style="animation-delay: {{ forloop.index | times: 0.2 }}s;">
        <span class="blog-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        <div class="blog-content">
          <h2 class="blog-title">{{ post.title }}</h2>
          <div class="blog-tags">
            {% for tag in post.tags limit:3 %}
            <span class="blog-tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
          <div class="blog-footer">
            <div class="blog-author">
              <span class="blog-author-name">{{ post.author | default: site.author }}</span>
            </div>
            <a href="{{ post.url }}" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      {% endfor %}
      
      {% if site.posts.size == 0 %}
      <div class="no-posts-message" style="text-align: center; padding: 3rem 0;">
        <h3>No posts found</h3>
        <p>Check back soon for new content!</p>
      </div>
      {% endif %}
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