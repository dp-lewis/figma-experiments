import React from 'react';
import PropTypes from 'prop-types';
import ArticleHeader from '../../molecules/article-header/ArticleHeader';
import ArticleBody from '../../molecules/article-body/ArticleBody';
import './news-article.css';

const NewsArticle = ({ 
  title, 
  author, 
  publishDate, 
  lead, 
  paragraphs, 
  className = '' 
}) => {
  return (
    <article className={`news-article ${className}`}>
      <ArticleHeader 
        title={title}
        author={author}
        publishDate={publishDate}
      />
      <ArticleBody 
        lead={lead}
        paragraphs={paragraphs}
      />
    </article>
  );
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default NewsArticle;