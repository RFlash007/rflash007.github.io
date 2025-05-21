---
layout: post
title: "Unlocking AI on Your Terms: A Deep Dive into Locally Run LLMs with Ollama"
date: 2025-05-21
author: Ian Mullins
categories: ai llms ollama local-ai prompt-engineering research
tags: [ollama, llm, local-ai, prompt-engineering, privacy, open-source]
description: "An exploration of running large language models locally using Ollama, detailing experiments with different models and the implications for privacy, control, and customization."
show_excerpts: true
---

The world of AI is buzzing, and Large Language Models (LLMs) like ChatGPT, Claude, and Grok are at the forefront. But what if you want that power without sending your data to the cloud? What if you crave more control and customization? Enter Ollama, a game-changing tool that lets you run powerful open-source LLMs right on your own computer. As a Computer Science student fascinated by AI and prompt engineering, I decided to explore what Ollama offers and how different models behave when you're in the driver's seat.

## Why Go Local? The Ollama Advantage

Running LLMs locally isn't just a niche hobby; it's a significant step towards a more private, secure, and customizable AI experience. Here's the lowdown:

- **Privacy First**: Your data, your prompts, your conversations – they never leave your machine. This is huge for handling sensitive information or simply for peace of mind.
- **Cost-Effective**: Say goodbye to API fees and usage limits. Once you've downloaded a model, it's yours to use as much as you want, for free.
- **Ultimate Control**: This is where it gets exciting for prompt engineers like me! You can tweak system prompts, fine-tune models on your own data, and truly tailor the AI's personality and responses.
- **Offline Accessibility**: No internet? No problem. Local LLMs work offline, making them reliable companions wherever you are.
- **Enhanced Security**: For industries with stringent data security needs, like government or healthcare, local LLMs offer a robust solution.

## My Ollama Experiment: Uncovering Model Personalities

Intrigued by the possibilities, I embarked on a research project to see how different open-source LLMs behave when run locally via Ollama. I focused on three popular models, all around the 3-billion parameter mark, making them manageable for local hardware:

- `llama3.2:3b` (Meta)
- `phi4-mini:latest` (Microsoft)
- `qwen2.5:3b` (Alibaba)

I put them through their paces using a series of 11 distinct system prompts (SP-0 to SP-10), designed to elicit a range of responses. I then analyzed their outputs based on several metrics: sentiment, verbosity, certainty language, readability, and emotional expression. The goal? To see how prompt modifications affect AI behavior and if distinct "model personalities" emerge.

## The Showdown: How Did the Models Differ?

The results were fascinating, revealing unique characteristics for each model.

### 1. Emotional Range & Sentiment:

- `qwen2.5:3b` showcased the widest sentiment range, capable of expressing complete neutrality (a sentiment score of 0.00 on SP-1) all the way to high positivity (0.98 on SP-8). It's the most emotionally flexible of the trio.
- `llama3.2:3b` had a more moderate range, with its most negative response still leaning slightly positive (0.15 on SP-7).
- `phi4-mini:latest` was the most consistently optimistic, with its lowest sentiment score being a fairly positive 0.44 (on SP-1). It seems to have stronger guardrails against negativity.

### 2. Talkativeness (Verbosity) & Readability:

- When it came to detail, `qwen2.5:3b` could be the most verbose, churning out up to 416 words when prompted for detail (SP-8).
- `phi4-mini:latest` consistently produced longer responses, even when asked for conciseness (its minimum was 68.8 words on SP-7). However, this detail came at the cost of readability; its responses were often the hardest to read, sometimes requiring a post-graduate reading level (Flesch score as low as 6.3 on SP-10).
- `llama3.2:3b` was the champion of clarity and conciseness when needed. It produced the shortest responses (a mere 21.5 words on SP-7) and boasted the highest readability, with some responses easily understandable by a 7th grader (Flesch score of 70.3 on SP-7).

### 3. Emotional Expression & Tone:

- `llama3.2:3b` was the most "visibly" emotional, using the most explicit emotion words (average of 0.6 on SP-4) and displaying the most diverse range of dominant emotions (often "unknown," but also joy and sadness).
- In contrast, `phi4-mini:latest` and `qwen2.5:3b` used fewer explicit emotion words but consistently projected an optimistic dominant emotion across most prompts (8 out of 11 prompts for both). They convey positivity more subtly.

### 4. Certainty Language:

- `qwen2.5:3b` demonstrated the greatest flexibility in expressing certainty, ranging from very certain (0.00 difference between certainty and uncertainty markers on SP-1) to very uncertain (5.00 on SP-8).
- `phi4-mini:latest` interestingly showed it could be more certain than uncertain (a negative difference score of -0.12 on SP-7), while also reaching high levels of uncertainty (3.50 on SP-6).
- `llama3.2:3b` maintained a narrower, more consistently neutral-to-slightly-uncertain stance in its language.

## Meet the Models: Distinct Personalities Emerge

Based on these findings, distinct "personalities" for each model became clear:

- **`llama3.2:3b`**: "The Adaptable Communicator"
  This model feels the most human-like. It's highly readable, can be very concise or reasonably detailed, and expresses a wider, more nuanced range of emotions. It often asks questions (most questions asked on SP-9) and refers to itself, making interactions feel more conversational.

- **`phi4-mini:latest`**: "The Academic Optimist"
  If you need detailed, consistently optimistic responses couched in more formal, academic language, `phi4-mini` is your go-to. It's verbose by nature and its output is generally more complex to read. It's less about chit-chat and more about delivering comprehensive, if sometimes dense, information.

- **`qwen2.5:3b`**: "The Flexible Specialist"
  This model is a powerhouse of flexibility. It can be incredibly detailed when asked, boasts the widest sentiment range, and can vary its certainty significantly. While generally optimistic, it can adapt its output dramatically based on the prompt.

## Why This Matters: Implications for Users & Prompt Engineers

Understanding these nuances is crucial. If you're building an application for a general audience, `llama3.2:3b`'s readability is a huge plus. For technical documentation or expert systems, `phi4-mini:latest`'s detail might be preferred. If you need an AI that can adapt to a wide array of tones and tasks, `qwen2.5:3b` is a strong contender.

For prompt engineers, this research underscores that one-size-fits-all prompting doesn't work. The same system prompt can yield vastly different results depending on the model. For example, SP-7 (the conciseness prompt) made `llama3.2:3b` incredibly brief, while `phi4-mini:latest` remained relatively wordy.

## The Bigger Picture: Benefits, Challenges, and the Road Ahead

The ability to run LLMs locally with tools like Ollama is democratizing AI. It offers enhanced privacy, security, and control, which is invaluable. However, it's not without challenges.

### Benefits:

- True data ownership and privacy.
- No ongoing costs or internet dependency.
- Incredible customization and learning opportunities for AI enthusiasts.

### Challenges & Ethical Thoughts:

- **Hardware Demands**: While I tested 3B models, larger, more powerful open-source models can require significant computing resources, creating an accessibility gap.
- **The "Abliteration" Concern**: The open nature of these models means users can remove built-in safety filters and censorship (a process sometimes called "Abliterating"). This raises ethical questions about potential misuse, as models could be prompted to generate harmful or problematic content that mainstream commercial models would refuse. The responsibility shifts heavily to the user.

## The Future is Local (and Customizable):

I believe we'll see a continued rise in the capability and accessibility of local LLMs. As models become more efficient and hardware improves, more people will be able to harness AI on their own terms. This empowers individuals and small organizations, fostering innovation outside the realms of big tech.

My journey with Ollama and these open-source models has been incredibly insightful. It's shown me that the future of AI isn't just about bigger models in the cloud; it's also about personalized, private, and powerful AI running right where we live and work.

---

What are your thoughts on local LLMs? Have you experimented with Ollama or similar tools? Share your experiences in the comments below!

## Works Cited

- Kumari, Janvi. "How to Run LLM Models Locally with Ollama." *Analytics Vidhya*, 23 July 2024, www.analyticsvidhya.com/blog/2024/07/local-llm-deployment-with-ollama/. Accessed 20 Apr. 2025.
- Labonne, Maxime. "Uncensor Any LLM with Abliteration." *Hugging Face Blog*, 13 June 2024, huggingface.co/blog/mlabonne/abliteration. Accessed 20 Apr. 2025.
- Ollama. Ollama Inc., 2025, ollama.com/. Accessed 20 Apr. 2025.
- Prompt Engineering Guide. DAIR.AI, 21 Jan. 2025, www.promptingguide.ai/. Accessed 20 Apr. 2025.