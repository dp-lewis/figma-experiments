import React from 'react';
import PropTypes from 'prop-types';
import './article-byline.css';

const ArticleByline = ({ author, className = '' }) => {
  return (
    <div className={`article-byline ${className}`}>
      By {author}
    </div>
  );
};

ArticleByline.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ArticleByline;