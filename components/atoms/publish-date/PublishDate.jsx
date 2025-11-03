import React from 'react';
import PropTypes from 'prop-types';
import './publish-date.css';

const PublishDate = ({ date, className = '' }) => {
  return (
    <time className={`publish-date ${className}`} dateTime={date}>
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
    </time>
  );
};

PublishDate.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PublishDate;