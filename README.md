# Writo AI - Content Repurposing Tool

Writo AI is an interactive, premium web application designed to take long-form articles, ideas, or thoughts and instantly convert them into viral content optimized for different platforms:
1. **Twitter/X Thread** (A 10-part connected thread structure)
2. **LinkedIn Post** (Clean formatting, engaging hooks, and key takeaways)
3. **TikTok/Reel Script** (A timed scenes-and-speech breakdown script)

## Project Structure

- `index.html`: Core markup and interface structure.
- `index.css`: Sleek glassmorphism theme, layout styling, and device/platform preview styles.
- `app.js`: Application state and generation engine that formats output based on tone and platform.

## How to Run

1. Open `index.html` directly in any modern web browser (Double-click or drag and drop it into your browser).
2. Or run a local development server using a tool like VS Code Live Server or python:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Features

- **Tone Selector**: Professional, Funny, Controversial, Inspirational, or Educational.
- **Side-by-Side Preview Layout**: Visual mockups that mimic real Twitter, LinkedIn, and script teleprompters.
- **Interactive Editing**: Directly edit generated content within the preview cards.
- **Copy Action**: Instant copy to clipboard buttons for seamless platform publishing.
