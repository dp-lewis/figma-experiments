import React from 'react';
import './typography.css';

export const Typography = () => {
  return (
    <div className="typography-showcase">
      <header className="typography-header">
        <h1>Typography Showcase</h1>
        <p className="lead">
          A comprehensive demonstration of typographic elements using our design tokens.
        </p>
      </header>

      <section className="typography-section">
        <h2>Headings</h2>
        <h1>Heading 1 - Main Page Title</h1>
        <h2>Heading 2 - Section Title</h2>
        <h3>Heading 3 - Subsection Title</h3>
      </section>

      <section className="typography-section">
        <h2>Body Text</h2>
        <p>
          This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Here's another paragraph with <mark>highlighted text</mark> and a 
          <a href="#" className="link">sample link</a>. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris.
        </p>
        <p className="small-text">
          This is smaller text that might be used for captions or fine print.
        </p>
      </section>

      <section className="typography-section">
        <h2>Lists</h2>
        
        <h3>Unordered List</h3>
        <ul>
          <li>First item in the list</li>
          <li>Second item with <strong>bold content</strong></li>
          <li>Third item with nested list:
            <ul>
              <li>Nested item one</li>
              <li>Nested item two</li>
            </ul>
          </li>
          <li>Fourth item to complete the list</li>
        </ul>

        <h3>Ordered List</h3>
        <ol>
          <li>Step one of the process</li>
          <li>Step two with <em>emphasis</em></li>
          <li>Step three with nested steps:
            <ol>
              <li>Sub-step A</li>
              <li>Sub-step B</li>
            </ol>
          </li>
          <li>Final step</li>
        </ol>
      </section>

      <section className="typography-section">
        <h2>Blockquotes</h2>
        <blockquote>
          "Design is not just what it looks like and feels like. Design is how it works."
          <cite>— Steve Jobs</cite>
        </blockquote>
      </section>

      <section className="typography-section">
        <h2>Code</h2>
        <p>
          Here's some <code>inline code</code> within a paragraph. You can also use 
          keyboard shortcuts like <kbd>Cmd + C</kbd> to copy.
        </p>
        
        <pre><code>{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}</code></pre>
      </section>

      <section className="typography-section">
        <h2>Font Families</h2>
        <p className="font-sans">
          This paragraph uses the sans-serif font family for clean, modern readability.
        </p>
        <p className="font-serif">
          This paragraph uses the serif font family for traditional, elegant typography.
        </p>
        <p className="font-mono">
          This paragraph uses the monospace font family, perfect for code and technical content.
        </p>
      </section>

      <section className="typography-section">
        <h2>Text Sizes</h2>
        <p className="text-sm">Small text size - perfect for captions and metadata</p>
        <p className="text-base">Base text size - the default for body content</p>
        <p className="text-lg">Large text size - great for emphasis and lead paragraphs</p>
      </section>
    </div>
  );
};

export default Typography;