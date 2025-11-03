import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

const Heading = (props) => {
  const { 
    children,
    level = 1,
    size = 'xlarge',
    className = '',
    ...restProps 
  } = props;

  const Tag = `h${level}`;
  
  const classNames = [
    'heading',
    `heading--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag
      className={classNames}
      {...restProps}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string
};

export default Heading;