import React from 'react';
import PropTypes from 'prop-types';
import './article-title.css';

const ArticleTitle = ({ children, className = '' }) => {
  return (
    <h1 className={`article-title ${className}`}>
      {children}
    </h1>
  );
};

ArticleTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ArticleTitle;