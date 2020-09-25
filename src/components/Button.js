import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, outline, ...rest }) => {
  const classes = classNames(
    'button',
    className,
    {
      'button--outline': outline,
    },
  );
  return (
    <button
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
