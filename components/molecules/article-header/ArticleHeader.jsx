import React from 'react';
import PropTypes from 'prop-types';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleByline from '../../atoms/article-byline/ArticleByline';
import PublishDate from '../../atoms/publish-date/PublishDate';
import './article-header.css';

const ArticleHeader = ({ title, author, publishDate, className = '' }) => {
  return (
    <header className={`article-header ${className}`}>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleByline author={author} />
      <PublishDate date={publishDate} />
    </header>
  );
};

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ArticleHeader;