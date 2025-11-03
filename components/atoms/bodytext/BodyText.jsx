import React from 'react';
import PropTypes from 'prop-types';
import './bodytext.css';

const BodyText = (props) => {
  const { 
    children,
    size = 'base',
    className = '',
    ...restProps 
  } = props;

  const classNames = [
    'bodytext',
    `bodytext--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <p
      className={classNames}
      {...restProps}
    >
      {children}
    </p>
  );
};

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'base', 'medium', 'large']),
  className: PropTypes.string
};

export default BodyText;