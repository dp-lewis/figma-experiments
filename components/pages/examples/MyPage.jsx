import React from 'react';
import Button from '../../atoms/button/Button';
import './mypage.css';

const MyPage = () => {
  return (
    <div className="mypage">
      <div className="mypage__content">
        {/* Page Title */}
        <h1 className="mypage__title">
          Title text
        </h1>
        
        {/* Body Content */}
        <div className="mypage__body">
          <p>
            The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn't just about choosing the right font; it's about balance, contrast, and rhythm. Notice how italics add subtle emphasis, how bold text commands attention, and how numbers — like 12, 345, or 67% — align neatly within the grid. Every line, letter, and space contributes to readability, clarity, and tone. When typography works well, you don't notice it at all; when it doesn't, it's the only thing you see.
          </p>
        </div>
        
        {/* Single Button */}
        <div className="mypage__button">
          <Button variant="primary" size="medium">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;