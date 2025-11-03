import React from 'react';
import Button from '../../atoms/button/Button';
import Heading from '../../atoms/heading/Heading';
import BodyText from '../../atoms/bodytext/BodyText';
import './mypage2.css';

const MyPage2 = () => {
  return (
    <div className="mypage2">
      <div className="mypage2__content">
        {/* Page Title */}
        <Heading level={1} size="xlarge" className="mypage2__title">
          Title text
        </Heading>
        
        {/* Button Group */}
        <div className="mypage2__button-group">
          <Button variant="primary" size="medium">
            Share
          </Button>
          <Button variant="primary" size="medium">
            More
          </Button>
        </div>
        
        {/* Body Content */}
        <div className="mypage2__body">
          <BodyText size="base" className="mypage2__paragraph">
            The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn't just about choosing the right font; it's about balance, contrast, and rhythm. Notice how italics add subtle emphasis, how bold text commands attention, and how numbers — like 12, 345, or 67% — align neatly within the grid. Every line, letter, and space contributes to readability, clarity, and tone. When typography works well, you don't notice it at all; when it doesn't, it's the only thing you see.
          </BodyText>
          
          <BodyText size="base" className="mypage2__paragraph">
            The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn't just about choosing the right font; it's about balance, contrast, and rhythm. Notice how italics add subtle emphasis, how bold text commands attention, and how numbers — like 12, 345, or 67% — align neatly within the grid. Every line, letter, and space contributes to readability, clarity, and tone. When typography works well, you don't notice it at all; when it doesn't, it's the only thing you see.
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default MyPage2;