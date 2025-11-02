import React from 'react';
import { Button } from '../../atoms/button/Button.jsx';
import './mypage2.css';

export const MyPage2 = () => {
  return (
    <div className="mypage2">
      <h1 className="mypage2-title">Title text</h1>
      
      <div className="mypage2-buttons">
        <Button label="Share" />
        <Button label="More" />
      </div>
      
      <div className="mypage2-body">
        <p>
          The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn't just about choosing the right font; it's about balance, contrast, and rhythm. Notice how <em>italics add subtle emphasis</em>, how <strong>bold text commands attention</strong>, and how numbers — like 12, 345, or 67% — align neatly within the grid. Every line, letter, and space contributes to readability, clarity, and tone. When typography works well, you don't notice it at all; when it doesn't, it's the only thing you see.
        </p>
        
        <p>
          The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn't just about choosing the right font; it's about balance, contrast, and rhythm. Notice how <em>italics add subtle emphasis</em>, how <strong>bold text commands attention</strong>, and how numbers — like 12, 345, or 67% — align neatly within the grid. Every line, letter, and space contributes to readability, clarity, and tone. When typography works well, you don't notice it at all; when it doesn't, it's the only thing you see.
        </p>
      </div>
    </div>
  );
};

export default MyPage2;