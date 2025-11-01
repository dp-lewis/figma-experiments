import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className='storybook-button'
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
