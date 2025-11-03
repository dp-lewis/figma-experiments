import React from 'react';
import PropTypes from 'prop-types';
import './article-lead.css';

const ArticleLead = ({ children, className = '' }) => {
  return (
    <p className={`article-lead ${className}`}>
      {children}
    </p>
  );
};

ArticleLead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ArticleLead;