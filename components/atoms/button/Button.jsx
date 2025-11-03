import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
  const { 
    children = 'Button',
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    type = 'button',
    ...restProps 
  } = props;

  const classNames = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled'
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;