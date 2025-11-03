import React from 'react';
import PropTypes from 'prop-types';
import './article-text.css';

const ArticleText = ({ children, className = '' }) => {
  return (
    <p className={`article-text ${className}`}>
      {children}
    </p>
  );
};

ArticleText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ArticleText;