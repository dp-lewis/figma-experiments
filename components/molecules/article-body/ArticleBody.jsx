import React from 'react';
import PropTypes from 'prop-types';
import ArticleLead from '../../atoms/article-lead/ArticleLead';
import ArticleText from '../../atoms/article-text/ArticleText';
import './article-body.css';

const ArticleBody = ({ lead, paragraphs, className = '' }) => {
  return (
    <div className={`article-body ${className}`}>
      <ArticleLead>{lead}</ArticleLead>
      {paragraphs.map((paragraph, index) => (
        <ArticleText key={index}>{paragraph}</ArticleText>
      ))}
    </div>
  );
};

ArticleBody.propTypes = {
  lead: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default ArticleBody;