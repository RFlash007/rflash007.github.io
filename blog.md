---
layout: page
title: Blog
permalink: /blog/
---

# Technical Blog & Writeups

Welcome to my technical blog where I share insights, tutorials, and thoughts on AI, machine learning, and computer science. Here you'll find deep dives into LLMs, prompt engineering techniques, and other AI-related topics.

<div class="post-list-container">
  {% if site.posts.size > 0 %}
    <ul class="post-list">
      {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {% if post.excerpt %}
          <div class="post-excerpt">
            {{ post.excerpt }}
          </div>
        {% endif %}
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>Stay tuned! Blog posts coming soon...</p>
  {% endif %}
</div>

## Topics I Write About

- **LLM Development**: Techniques, architectures, and best practices
- **Prompt Engineering**: Advanced strategies and patterns for effective LLM interactions
- **RAG Systems**: Building effective retrieval systems for AI 
- **AI Project Case Studies**: Detailed breakdowns of my projects
- **Technical Tutorials**: Step-by-step guides on AI implementation

## Subscribe

Want to be notified when I publish new content? [Contact me](/contact) to sign up for updates. 